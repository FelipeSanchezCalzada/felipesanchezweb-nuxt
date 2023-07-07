---
title: Integración De Keycloak Con Django REST Framework
description: En el siguiente artículo veremos como integrar el servidor de identidades Keycloak junto con Django REST Framework (Autenticación basada en tokens JWT).
featuredImagePath: /blog/img/configuracion-realm-keycloak/1.png
date: 2022-01-02
tags:
  - Django
  - Keycloak
published: true
---

# Integración De Keycloak Con Django REST Framework

En el siguiente artículo veremos como integrar el servidor de identidades Keycloak junto con Django REST Framework (Autenticación basada en tokens JWT).

### Requisitos previos:

* Saber crear proyectos Django y saber integrar Django REST en un proyecto Django.
* Tener una instancia de Keycloack en ejecución y un Realm totalmente nuevo y recién creado.

### Objetivos del artículo:

* Tener un proyecto Django REST Framework que permita la autenticación a través de Keycloack.
* Utilización del modelo de usuarios original de Django
* Permisos basados en los roles que traen los tokens JWT

## Creación del proyecto Django REST Framework
En este articulo no voy explicar como se crea un proyecto. Simplemente crea uno con la configuracion básica (o la que tu proyecto necesite)

## Configuración del Realm de Keycloak
Para configurar el Realm primero creamos un cliente especifico para el proyecto:

![img.png](/blog/img/configuracion-realm-keycloak/1.png)
![img.png](/blog/img/configuracion-realm-keycloak/2.png)

Una vez creado el cliente podemos hacer las configuraciones básicas necesarias. ¡No olvides guardar!:

![img.png](/blog/img/configuracion-realm-keycloak/3.png)

## Configurando el proyecto Django

Vamos a usar la biblioteca [mozilla-django-oidc](https://github.com/mozilla/mozilla-django-oidc), 
que permite utilizar cualquier servidor que siga [OpenID Connect](https://openid.net/connect/).

Primero instalamos mozilla-django-oidc y pyjwt:
```Bash
pip install mozilla-django-oidc
pip install pyjwt
```
Después vamos a pasar a especificar las configuraciones necesarias en el archivo settings.py de Django:

```Python
########################################################################################################################
# Configuraciones para Modilla OIDC
########################################################################################################################

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'Django_Keycloack_Tutorial.core.oidc.KeycloakOIDCAuthenticationBackend',
)

##########################################################################
# Django REST
##########################################################################
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'mozilla_django_oidc.contrib.drf.OIDCAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        # other authentication classes, if needed
    ],
}
##########################################################################


##########################################################################
# mozilla-django-oidc with Keycloak
##########################################################################
OIDC_RP_CLIENT_ID = 'django-back'
OIDC_RP_CLIENT_SECRET = 'PyMQxJBMIgHEUjaBFAv0W88ZEihHMiNj'

OIDC_OP_TOKEN_ENDPOINT = 'http://localhost:8005/auth/realms/Django_PoC/protocol/openid-connect/token'
OIDC_OP_USER_ENDPOINT = 'http://localhost:8005/auth/realms/Django_PoC/protocol/openid-connect/userinfo'
OIDC_OP_AUTHORIZATION_ENDPOINT  = 'http://localhost:8005/auth/realms/Django_PoC/protocol/openid-connect/auth'

LOGIN_REDIRECT_URL = 'http://127.0.0.1:8000/api/'

# This data is in url: http://localhost:8005/auth/realms/Django_PoC/.well-known/openid-configuration
OIDC_RP_SIGN_ALGO = 'RS256'
OIDC_OP_JWKS_ENDPOINT = 'http://localhost:8005/auth/realms/Django_PoC/protocol/openid-connect/certs'

########################################################################################################################
```

Aquí los puntos importantes son las configuraciones de la seccion **mozilla-django-oidc with Keycloa**.
la configuración OIDC_RP_CLIENT_SECRET se puede obtener desde Keycloack:

![img.png](/blog/img/configuracion-realm-keycloak/4.png)

El resto de configuraciones puede obtenerse en la URL http://localhost:8005/auth/realms/Django_Keycloak_Tutotial/.well-known/openid-configuration
Hay que cambiar la URL con los datos de tu Realm, host y puerto:

**http://\<HOST\>:\<PORT\>/auth/realms/<REALM>/.well-known/openid-configuration**

Ahora tenemos que crear un OIDCAuthenticationBackend customizado. Puedes modificarlo de acuerdo a tus necesidades.
Esta clase es la encargada de crear o modificar los usuarios del modelo original de Django. No recomiendo modificar el modelo original, si queremos añadir mas datos es mejor hacer una relación 1 a 1 con un «perfil de usuario».

En ese mismo archivo podemos crear el BasePermission que nos permitirá autenticacion por roles. Tambien puedes customizarlo de acuerdo con las necesidades.

Este archivo puede estar en cualquier parte.

```Python
from mozilla_django_oidc.auth import OIDCAuthenticationBackend
import jwt
from django.conf import settings
from rest_framework.permissions import BasePermission

class KeycloakOIDCAuthenticationBackend(OIDCAuthenticationBackend):

    def create_user(self, claims):
        """ Overrides Authentication Backend so that Django users are
            created with the keycloak preferred_username.
            If nothing found matching the email, then try the username.
        """
        user = super(KeycloakOIDCAuthenticationBackend, self).create_user(claims)
        user.first_name = claims.get('given_name', '')
        user.last_name = claims.get('family_name', '')
        user.email = claims.get('email')
        user.username = claims.get('preferred_username')
        user.save()
        return user

    def filter_users_by_claims(self, claims):
        """ Return all users matching the specified email.
            If nothing found matching the email, then try the username
        """
        email = claims.get('email')
        preferred_username = claims.get('preferred_username')

        if not email:
            return self.UserModel.objects.none()
        users = self.UserModel.objects.filter(email__iexact=email)

        if len(users) < 1:
            if not preferred_username:
                return self.UserModel.objects.none()
            users = self.UserModel.objects.filter(username__iexact=preferred_username)
        return users

    def update_user(self, user, claims):
        user.first_name = claims.get('given_name', '')
        user.last_name = claims.get('family_name', '')
        user.email = claims.get('email')
        user.username = claims.get('preferred_username')
        user.save()
        return user



class HasRole(BasePermission):

    def __init__(self, roles: list = []):
        self.roles = roles

    def has_permission(self, request, view):
        jwt_payload = jwt.decode(request.auth, options={"verify_signature": False})
        realm_roles = jwt_payload['realm_access']['roles']
        client_roles = jwt_payload['resource_access'].get(settings.OIDC_RP_CLIENT_ID, {}).get('roles', [])
        all_roles = list(dict.fromkeys(realm_roles + client_roles))

        return any(role in self.roles for role in all_roles)


class ROLES:
    EMPLOYEE = 'EMPLOYEE'
```

Hay que meter esa configuración en AUTHENTICATION_BACKENDS

Para usar la autenticación por roles definida solo se puede hacer mediante la instanciación completa por constructor. A continuacion un ejemplo:

```Python
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        return [IsAuthenticated(), HasRole([ROLES.EMPLOYEE])]
```

Por ultimo solo queda añadir las URLs de mozilla oidc a los urlpatterns (solo si los necesitamos):
```Python
path('oidc/', include('mozilla_django_oidc.urls')),
```

**Eso es todo, ya podemos usar una autenticacion por token JWT.**
