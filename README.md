# NUBA | Agencia Creativa

Primera versión funcional del sitio web de NUBA, creada con Next.js y lista para desplegar en Vercel.

## Ejecutar localmente

1. Instala Node.js 20.9 o superior.
2. En esta carpeta, ejecuta `npm install`.
3. Ejecuta `npm run dev`.
4. Abre `http://localhost:3000`.

## Subir a GitHub

Si el repositorio `nuba-web` ya existe y está vacío:

```bash
git init
git add .
git commit -m "Primera versión de la web de NUBA"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/nuba-web.git
git push -u origin main
```

Reemplaza `TU-USUARIO` por tu usuario de GitHub. Si el repositorio ya contiene archivos, intégralos antes de subir para evitar sobrescribir cambios.

## Desplegar en Vercel

1. Entra en [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. Selecciona **Add New → Project**.
3. Importa el repositorio `nuba-web`.
4. Vercel detectará Next.js automáticamente; deja la configuración predeterminada.
5. Presiona **Deploy**.

Los enlaces de WhatsApp, Instagram y correo ya están configurados. Antes de publicar, puedes reemplazar los proyectos conceptuales por casos reales de NUBA.
