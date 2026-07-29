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

Todas las imágenes de `img/` son **placeholders en SVG** claramente marcados con el texto "FOTO PENDIENTE", ya que no se encontraron fotos reales del taller en las carpetas del equipo. Sustitúyelas por fotos reales manteniendo el mismo nombre de archivo (o actualiza la ruta en `index.html`):

| Archivo | Descripción | Tamaño recomendado |
|---|---|---|
| `img/hero-taller-dtmbike.svg` | Foto panorámica del taller o una bici premium en el mostrador (imagen de portada) | 1920×1080px horizontal |
| `img/torre-fundador-dtmbike.svg` | Retrato de Torre trabajando o con una bici | 900×1100px vertical |
| `img/galeria-taller-01.svg` | Banco de trabajo con herramientas | 1000×750px |
| `img/galeria-taller-02.svg` | Detalle de transmisión/cadena SRAM | 1000×750px |
| `img/galeria-taller-03.svg` | Suspensión Fox/RockShox en revisión | 1000×750px |
| `img/galeria-taller-04.svg` | Bici de carretera o MTB terminada | 1000×750px |
| `img/galeria-taller-05.svg` | Mostrador con componentes y accesorios | 1000×750px |
| `img/galeria-taller-06.svg` | Torre realizando una puesta a punto | 1000×750px |
| `img/og-image-dtmbike.svg` | Imagen para compartir en redes sociales (Open Graph) | 1200×630px |

`img/favicon.svg` es un icono de marca ya diseñado (no es una foto) — no necesita sustitución salvo que quieras cambiar el logo.

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
