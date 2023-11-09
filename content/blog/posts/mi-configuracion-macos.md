---
title: Mi configuración de MacOS
description: En este artículo explico como yo configuro mi MacOS para que sea más cómodo y productivo con algunos trucos avanzados.
featuredImagePath: /blog/img/mi-configuracion-macos/macos.png
date: 2023-11-07
tags:
  - MacOS
published: true
---

# Mi configuración de MacOS

En este artículo explico como yo configuro mi MacOS desde 0, las herramientas que uso, configuraciones y trucos avanzados. 
¡Todo gratis y compatible con Apple Silicon M1 y sus derivados!

Contenido del artículo:
* [Aplicaciones y herramientas imprescindibles](#aplicaciones-y-herramientas-imprescindibles)
  + [Capturas de pantalla en condiciones y con edición directa tras hacer la captura](#capturas-de-pantalla-en-condiciones-y-con-edición-directa-tras-hacer-la-captura)
  + [Historial de portapapeles. Copia todo lo que quieras y luego elige que quieres pegar](#historial-de-portapapeles-copia-todo-lo-que-quieras-y-luego-elige-que-quieres-pegar)
  + [Configuración avanzada de la velocidad de los ventiladores para maximizar el rendimiento](#configuración-avanzada-de-la-velocidad-de-los-ventiladores-para-maximizar-el-rendimiento)
  + [Gestión avanzada de ventanas](#gestión-avanzada-de-ventanas)
  + [Solo si tienes un móvil android: servicio NearbyShare para envíar archivos como con AirDrop](#solo-si-tienes-un-móvil-android-servicio-nearbyshare-para-envíar-archivos-como-con-airdrop)
* [Personalización avanzada del dock](#personalización-avanzada-del-dock)
  + [Añadir separadores al dock](#añadir-separadores-al-dock)
    - [Separador grande:](#separador-grande)
    - [Separador pequeño:](#separador-pequeño)
  + [Ocultar y mostrar el dock automáticamente más rápido](#ocultar-y-mostrar-el-dock-automáticamente-más-rápido)
    - [Ocultar el dock más rápido:](#ocultar-el-dock-más-rápido)
    - [Animaciones del dock mas rápidas:](#animaciones-del-dock-mas-rápidas)

¡Vamos a ello!

## Aplicaciones y herramientas imprescindibles

Al venir de windows eché mucho de menos algunas herramientas que me hacían la vida más fácil, por lo que me puse a buscar alternativas para MacOS.
Lo que me sorprendió es que en MacOS (y en iOS o iPadOS) hay que pasar por caja para todo, es a lo que la gente está acostumbrada.

Es increíblemente sencillo dejarse embaucar por herramientas bonitas y sencillas y empezar a gastar dinero, las primeras búsquedas en google 
te van a llevar a ellas. ¡Menuda mierda!

Por suerte, hay alternativas gratuitas y de código abierto para todo, y en este artículo te voy a enseñar las que yo uso, que no quiere decir que sean las mejores.

### Capturas de pantalla en condiciones y con edición directa tras hacer la captura

La primera herramienta es [Flameshot](https://flameshot.org/), una herramienta de capturas de pantalla que permite editar la captura tras hacerla y otras mil cosas.

La instalación es sencilla, simplemente descarga la herramienta desde [su pagina de descargas](https://flameshot.org/#download) seleccionando el 
sistema operativo MacOS y el botón "Download .dmg"
Una vez descargado el archivo .dmg, lo abres y arrastras Flameshot a la carpeta de aplicaciones. ¡Listo!

Ten en cuenta que las apps no están firmadas, por lo que quizá tengas que configurar MacOS para que te deje instalarla.
Para ello ve a "Ajustes del sistema", "Privacidad y seguridad", "Permitir aplicaciones descargadas de:" y selecciona "App Store y desarrolladores identificados".

Otro detalle important es que la primera vez que lanzamos la aplicación lo hagamos dando click derecho y "Abrir", ya que MacOS no la reconoce como una aplicación de confianza.

En la barra de estado, arriba del todo a la derecha verás el siguiente icono:

<img src="/blog/img/mi-configuracion-macos/barra-estado.png" alt="drawing" class="markdown-image-100-75"/>

Haz click derecho en el icono y luego en "Configuration", ahora puedes configurar la combinación de teclas para hacer captura:

<img src="/blog/img/mi-configuracion-macos/flameshot-config.png" alt="drawing" class="markdown-image-100-75"/>

### Historial de portapapeles. Copia todo lo que quieras y luego elige que quieres pegar

Para ello vamos a usar [Yippy](https://yippy.mattdavo.com/), para mi la mejor herramienta de histórico de portapapeles.

Para descargarla vete a la [web de Yippy](https://yippy.mattdavo.com/) y haz click en "Download Yippy XXX Now!". 
Se descargará un .dmg y lo instalas como Flameshot.

De igual forma que Flameshot iniciamos la aplicación Yippy.

Para configurarlo hacemos click derecho en el icono de Yippy (unas tijeras con la punta mirando abajo) en la barra de estado y luego en "Preferences...".
Después configuramos la "Hot Key", en mi caso yo la tengo en "option + v", para tenerla al lado que "command + v" y rápidamente 
elegir entre pegado normal o pegado con sección de histórico de portapapeles.

### Configuración avanzada de la velocidad de los ventiladores para maximizar el rendimiento

En este caso usaremos [Macs Fan Control](https://crystalidea.com/macs-fan-control), una herramienta que nos permite configurar la 
velocidad de los ventiladores de nuestro Mac en función de la temperatura.

Ya no voy a explicar como se descarga, como se instala y como se lanza, es igual que las anteriores.

Hay dos configuraciones que hacer:

Primero, hacemos que el icono sea la temperatura de la CPU para tenerla siempre a la vista:
Click izquierdo, "Preferences...", "Barra de Menús", "Sensor: CPU Core Average":

<img src="/blog/img/mi-configuracion-macos/cpu-temperature-icon.png" alt="drawing" class="markdown-image-100-75"/>


Después, configuramos la velocidad de los ventiladores: click izquiero en el icono, luego "Mostar Macs fan control". 
Despues hacemos la configuración oportuna, en mi caso:

<img src="/blog/img/mi-configuracion-macos/macs-fan-control-config.png" alt="drawing" class="markdown-image-100-75"/>

Esto mantiene los ventiladores al minimo hasta 50º para mantenerlos silenciosos y la aumenta al máximo a 75º, que es una temperatura a la que 
la CPU aun no pierde mucho rendimiento.

### Gestión avanzada de ventanas

Por defecto la gestion de ventanas en MacOS deja mucho que desear. Para mejorarla usaremos [Rectangle](https://rectangleapp.com/).

Para descargarlo accede a la [página de Rectangle](https://rectangleapp.com/), descarga, instala y lanza la aplicación.

Ahora ya puedes arrastrar una ventana a la parte superior de la pantalla para maximizarla, a la izquierda para que ocupe la mitad izquierda, etc.

### Solo si tienes un móvil android: servicio NearbyShare para envíar archivos como con AirDrop

Si tienes un móvil android y quieres enviar archivos a tu Mac como con AirDrop, puedes usar [NearDrop](https://github.com/grishka/NearDrop).

Se descarga de la su [página de lanzamientos en github](https://github.com/grishka/NearDrop/releases), en la sección "Assets" 
de la última relese descargamos el archivo "NearDrop.app.zip". Esta vez para instalarlo basta con mover "NearDrop.app" a la carpeta de aplicaciones.

Puedes leer sobre como funciona NearbyShare para entender como usarlo en Google 😜.


## Personalización avanzada del dock

Aunque hay algunas aplicaciones que permiten personalizar el dock, yo prefiero hacerlo a mano. 
Puede ser un poco tedioso por que hay que usar algunos comandos, pero no te asustes, son muy sencillos

Primero te enseño mi Dock:
<img src="/blog/img/mi-configuracion-macos/dock.png" alt="drawing" class="markdown-image-100-75"/>

### Añadir separadores al dock

Abrimos una terminal (command + espacio y escribimos "terminal") para poder lanzar los comandos que generan los separadores.

#### Separador grande:
```bash
defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'; killall Dock
```

#### Separador pequeño:
```bash
defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="small-spacer-tile";}'; killall Dock
```
Añade tantos como quieras y muévelos arrastrando. Para quitarlos simplemente click derecho y "Eliminar del dock" 🤓.

### Ocultar y mostrar el dock automáticamente más rápido

Por defecto la animación de salida y entrada del dock es muy lenta, no me gusta perder tiempo con animaciones.

Primero asegurate de configurar el dock para que se oculte automáticamente de forma regular. A continuacion te enseño como 
tengo yo configurado el dock en la configuracion de MacOS:

<img src="/blog/img/mi-configuracion-macos/dock-config.png" alt="drawing" class="markdown-image-100-75"/>

Ahora ya podemos pasar a configurar la velocidad de la animación y el retrase para ocultar el Dock. 
Para ello abrimos una terminal (command + espacio y escribimos "terminal") y ejecutamos el siguiente comando:

#### Ocultar el dock más rápido:
```bash
defaults write com.apple.dock autohide-delay -float 0; killall Dock
```
Esto elimina el retraso para ocultar el dock, puedes cambiarlo a tu gusto, fijate en la parte "-float 0". Usa un tiempo en segundos, por ejemplo -float 0.2.

#### Animaciones del dock mas rápidas:
```bash
defaults write com.apple.dock autohide-time-modifier -float 0.2; killall Dock
```

Esto especifica una animacion con una duración de 0.2 segundos, puedes cambiarlo a tu gusto, fijate en la parte "-float 0.2".