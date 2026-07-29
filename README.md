# DTMBIKE — Web

Web de una sola página (one-page) para **DTMBIKE**, taller de bicicletas especializado en Cártama (Málaga). Construida con HTML, CSS y JavaScript puros, sin frameworks ni build.

## Estructura del proyecto

```
DTMBIKE/
├── index.html              → Página principal (todas las secciones)
├── css/
│   └── style.css           → Estilos (paleta oscura + acento amarillo eléctrico)
├── js/
│   └── main.js             → Menú móvil, contadores animados, scroll reveal, cookies
├── img/                    → Imágenes (placeholders a sustituir, ver más abajo)
├── legal/
│   ├── aviso-legal.html
│   ├── privacidad.html
│   └── cookies.html
└── README.md
```

## Fotos pendientes de sustituir

Ya se han incorporado 2 fotos reales del local (mostrador/taller y una bici Ridley en el soporte), usadas en el hero, la imagen de Open Graph, la sección "Sobre nosotros" y la galería. El resto siguen siendo **placeholders en SVG** marcados con el texto "FOTO PENDIENTE". Sustitúyelas por fotos reales manteniendo el mismo nombre de archivo (o actualiza la ruta en `index.html`):

| Archivo | Descripción | Tamaño recomendado |
|---|---|---|
| `img/galeria-taller-01.svg` | Banco de trabajo con herramientas | 1000×750px |
| `img/galeria-taller-02.svg` | Detalle de transmisión/cadena SRAM | 1000×750px |
| `img/galeria-taller-03.svg` | Suspensión Fox/RockShox en revisión | 1000×750px |
| `img/galeria-taller-05.svg` | Mostrador con componentes y accesorios | 1000×750px |
| `img/galeria-taller-06.svg` | Mecánico realizando una puesta a punto | 1000×750px |

Ya sustituidos con fotos reales: `img/hero-taller-dtmbike.jpg`, `img/og-image-dtmbike.jpg` y `img/galeria-bici-ridley.jpg` (esta última se usa dos veces: en la galería y en "Sobre nosotros").

No se nombra a ninguna persona concreta del equipo en los textos; todo está redactado en plural genérico ("reparamos", "trabajamos con", etc.).

`img/favicon.svg`, `img/favicon-dtmbike.png` y `img/logo-dtmbike.png` son el icono/logo de marca ya diseñado — no necesitan sustitución.

**Recomendación:** al sustituir, exporta las fotos en `.jpg` (calidad ~75-80%) o `.webp` para que pesen poco, y actualiza las rutas `src` en `index.html` de `.svg` a la nueva extensión.

## Datos pendientes de confirmar

- **Horario completo**: se ha usado "Lunes a viernes 10:00–14:00 y 16:30–20:00" como estimación a partir del dato de jornada partida (cierra 14:00, reabre 16:30). Falta confirmar el horario exacto y si abre sábados.
- **Razón social / NIF** del titular para el Aviso Legal y la Política de Privacidad (están marcados como `[pendiente de confirmar]`).

## Publicar con GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `dtmbike-web`), vacío, sin README.
2. En esta carpeta, conecta el repo remoto y sube el código:

   ```bash
   git remote add origin https://github.com/TU-USUARIO/dtmbike-web.git
   git branch -M main
   git push -u origin main
   ```

3. En GitHub, entra en **Settings → Pages**.
4. En "Build and deployment", selecciona **Source: Deploy from a branch**.
5. Elige la rama **main** y la carpeta **/ (root)**, y guarda.
6. Espera 1-2 minutos: la web quedará publicada en `https://TU-USUARIO.github.io/dtmbike-web/`.
7. Si más adelante conectas un dominio propio (por ejemplo `dtmbike.com`), añádelo en el mismo apartado de Pages ("Custom domain") y configura los registros DNS que te indique GitHub.
