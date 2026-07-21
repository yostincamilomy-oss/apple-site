# ARC — Apple Premium Reseller Colombia

Sitio de una sola página construido con Next.js 15 (App Router), Tailwind CSS,
Framer Motion y Lenis. El hero es una secuencia de 193 frames pre-renderizados
que se dibujan en un `<canvas>` y se controlan directamente con el scroll.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Deploy en Vercel

1. Sube este repositorio a GitHub, GitLab o Bitbucket.
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Vercel detecta Next.js automáticamente — no se necesita configuración
   adicional (build command, output directory e install command quedan
   por defecto).
4. Deploy.

También puedes desplegar directamente desde la terminal con la
[Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel
```

### Notas

- No hay variables de entorno requeridas.
- Las imágenes del hero (`public/frames`, ~40 MB) y de producto
  (`public/products`) se sirven como assets estáticos de Next.js.
- Node.js >= 20 (ver `engines` en `package.json`).
