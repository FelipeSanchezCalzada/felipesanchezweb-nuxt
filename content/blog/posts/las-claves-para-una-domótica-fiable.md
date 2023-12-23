---
title: Las claves para una domótica fiable
description: 
featuredImagePath: /blog/img/las-claves-para-una-domótica-fiable/cabecera.png
date: 2023-11-18
tags:
  - Domótica
published: true
---

# Las claves para una domótica fiable

La domótica es una forma de hacer tu casa mas inteligente para hacerte la vida mas cómoda. 
A mucha gente se le olvida que la principal razón para tener una casa inteligente es la comodidad, no sirve de nada poner 
cientos de sensores y actuadores si de verdad no están aportando un beneficio a parte de "poder encender las luces con el móvil" o 
poder "fardar" con tus amigos.

Durante mis aventuras y desventuras haciendo mi casa inteligente he aprendido algunas cosas que me gustaría compartir contigo, para evitar que cometas los mismos errores que yo.

## Lo mas importante, todo debe funcionar sin capacidades inteligentes
Te pongo un ejemplo sencillo:

Si montas una nueva luz inteligente, esa luz no debe afectar al funcionamiento normal de una luz, que es poder encenderla y apagarla con un interruptor típico.
Así pues, las bombillas inteligentes que se ponen sustituyendo las bombillas clásicas, son normalmente inutiles. ¿La razón? 
Si apagas la luz con el interruptor, la bombilla inteligente se queda sin corriente y no puedes encenderla con el móvil. 
Lo mismo sucede si la apagas con el móvil, por mucho que toques el interruptor no vas a poder encenderla...

Hay dos cosas que hay que tener muy en cuenta cuando montamos un dispositivo inteligente:
- **No eres el unico de la casa:** puede que la gente que convive contigo simplemente no quiera usar las cosas inteligentes y 
simplemente quieran utilizar los aparatos con interruptores o selectores simples, como se ha hecho toda la vida. Si les obligas a usar tus sistemas, 
se cansarán y tendrás que eliminarlas, no esperes que se adapten a tu sistema, tu sistema debe adaptarse a ellos.
- **Los sistemas fallan:** si tu sistema inteligente falla, no puedes dejar a la gente sin poder usar las cosas de la casa, 
todo ha de funcionar normalmente sin inteligencia cuando la domótica se muere.

## No uses cosas "cloud" con servidores de los fabricantes, monta la domótica en un servidor local custodiado por ti
Cuando compres algún dispositivo los fabricantes van a intentar que uses sus servicios cloud. 
Es fácil que termines con varias APPs instaladas y que no son interoperables entre si, esto limita las capacidades inteligentes y dificulta el uso, es una mala idea.

Los beneficios de usar un servidor local:

- **No dependerás de internet:** si tu sistema depende de internet, cuando internet se caiga (relativamente común), tu sistema se caerá.
- **Las clouds privadas pueden cambiar sus condiciones sin previo aviso:** podrían pasar a cobrar una cara mensualidad por usar sus sistemas, y si dependes de ellos, tendrás que pagarlo.
- **Funciones interesantes que serán de pago** por ejemplo, es posible que para automatizaciones avanzadas tengas que pagar una mensualidad por versiones "PRO".
- **Solo tú tendrás un registro de tu actividad:** si la nube privada mantiene un registro puede llegar a vender y comerciar con esos datos, cosa que no quieres.

**¿Cómo lo hago entonces?**

Respuesta rápida, usa [Home Assistant](https://www.home-assistant.io/getting-started/) junto con [zigbee2mqtt](https://www.zigbee2mqtt.io/).
Tendrás que informarte muy bien con videos de YouTube, pero aprenderás como funciona. 
Si la instalación te la va a hacer una empresa, pídeles que usen Home Assistant en vez de cualquier otro, me lo vas a agradecer.

## No uses WiFi para conectar todos tus dispositivos, usa ZigBee o Z-Wave

Las redes WiFi se colapsan rápidamente (y si usas el router que te da tu proveedor de internet, esto va a ocurrir con tan solo unas decenas de dispositivos conectados). 
El WiFi ha de usarse solo si no hay otra alternativa.

Para mí, el mejor protocolo de comunicación inalámbrica para casas inteligentes es ZigBee. ¿Los motivos?:
- **Genera una red mallada:** es decir, cualquier dispositivo conectado a la red electrica hará de repetidor (los que funcionan con pilas o batería no).
- **Consumo de energía extremadamente bajo:** los dispositivos a pilas pueden durar años con las mismas pilas, esto es imposible con WiFi.
- **Los dispositivos son muy baratos:** Yo compro todo en AliExpress, los dispositivos rara vez superan los 10€. Con Z-Wave los dispositivos son mucho mas caros y menos comunes.
- **zigbee2mqtt:** este es en realidad uno de los puntos mas importantes, con esta integración puedes usar casi cualquier dispositivo ZigBee con Home Assistant.

¿Por que no Z-Wave?
- **Menor catálogo de productos**
- **Mucho mas caro que Zigbee**
- **Se usa mucho menos y cuesta mas encontrar como arreglar los problemas**

En resumen, no te compliques, usa ZigBee.

## Ten mucho cuidado al exponer tu domótica a internet

Internet es un lugar hostil, cientos de miles de personas van a intentar romper tu sistema para controlar tu casa y obtener datos sobre ti y tus rutinas.
Yo uso los Tuneles de Cloudflare para exponer mi domótica, pero eso no te libra de estar expuesto. Lo mejor es que expongas tu domótica a través de una VPN solamente.

Si aún así quieres exponer tu casa, te traigo algunos consejos:
- **Siempre usa autenticación en dos pasos (2FA):** de verdad, siempre activa la autenticación en dos pasos. Además es mucho mejor el sistema TOTP (Time-based One-Time Password) 
- **No abras puertos en tu router:** abrir puertos es tremendamente peligroso si no lo haces a traves de un proxy por que que estas exponiendo tu IP a internet, auque sea dinamica 

## La domótica requiere mantenimiento!

Quien te diga lo contrario te está engañando. Recuerda que un sistema de domótica es un conjunto de softwares tremendamente complejos que funcionan en conjunto.
Si, un software puede romperse de un día para otro sin tocar nada, has de estár preparado o pagar a alguien para que lo esté por ti:

- **Haz backups de tu servidor a diario:** o exige que una empresa los haga. Además tienes que probar esos backups, de nada sirve guardar copias de seguridad si a la hora de la verdad no sabes como restaurarlas o están rotas.
- **Mantén las cosas actualizadas para evitar brechas de seguridad:** ojo, tampoco seas el primero en actualizar o te comerás todos los errores si los hay...
