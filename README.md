# Sitio portafolio — Jose Alexander Salamanca Lozano

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build step) generado a partir del CV,
con estética de "consola de desarrollador": pestañas de editor, terminal, git log de experiencia
y skills en formato JSON. 100% responsive.

## Estructura

```
site/
├── index.html
├── README.md
└── assets/
    ├── style.css
    ├── script.js
    └── CV_Jose_Alexander_Salamanca_Lozano.pdf   ← CV descargable (botón "Descargar CV")
```

## 1. Antes de publicar: completa tus datos de contacto

Abre `assets/script.js` y edita el objeto `CONTACT` al principio del archivo:

```js
const CONTACT = {
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  linkedinDisplay: "/in/tu-usuario",
  github: "https://github.com/tu-usuario",
  githubDisplay: "@tu-usuario",
};
```

Por privacidad, el sitio **no publica correo ni número de celular** — solo enlaces a tus
perfiles de LinkedIn y GitHub. Si en algún momento quieres agregar un canal de contacto directo,
lo más seguro es un formulario (ej. Formspree, Getform) en vez de exponer el dato en texto plano.

Tampoco se mencionan los nombres de las empresas en las que has trabajado ni de los clientes de
cada proyecto; cada rol se describe por sector/país para dar contexto sin revelar esa información.

Si además reemplazas el PDF en `assets/CV_Jose_Alexander_Salamanca_Lozano.pdf` por una versión
más nueva, mantén el mismo nombre de archivo (o actualiza el `href` del botón de descarga en
`index.html`, sección `.hero-actions`).

## 2. Publicar en GitHub Pages (gratis)

1. Crea un repositorio nuevo en GitHub, por ejemplo `tu-usuario.github.io` (para que quede en la
   raíz de tu dominio de usuario) o cualquier otro nombre, ej. `portafolio`.
2. Sube el **contenido de esta carpeta** (`index.html`, `README.md` y `assets/`) a la raíz del
   repositorio:
   ```bash
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages**.
4. En "Build and deployment", selecciona **Source: Deploy from a branch**, rama `main`,
   carpeta `/ (root)`. Guarda.
5. Espera 1–2 minutos. Tu sitio quedará publicado en:
   - `https://tu-usuario.github.io/tu-repositorio/` (repos normales), o
   - `https://tu-usuario.github.io/` (si el repo se llama `tu-usuario.github.io`).

## 3. Alternativas de publicación (igual de gratis)

- **Netlify / Vercel**: arrastra la carpeta a [app.netlify.com/drop](https://app.netlify.com/drop)
  o conecta el repositorio de GitHub — despliegue automático en cada push.
- **Cloudflare Pages**: conecta el repo, sin configuración de build necesaria (es un sitio estático).

## 4. Dominio propio (opcional)

Cualquiera de las opciones anteriores permite conectar un dominio propio (ej. `josesalamanca.dev`)
desde su panel de configuración, sin tocar el código del sitio.

## Notas técnicas

- No requiere `npm install` ni build: son archivos estáticos.
- Tipografías: JetBrains Mono + IBM Plex Sans, vía Google Fonts (requiere conexión a internet
  para cargar; si prefieres que funcione 100% offline, puedes auto-hospedar las fuentes).
- Accesibilidad: navegación por teclado, foco visible, `prefers-reduced-motion` respetado.
- El menú móvil aparece automáticamente por debajo de 640px de ancho.
