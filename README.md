# Advice App

> Pequeña aplicación en React + Vite que muestra un consejo aleatorio consumiendo la API pública de Advice Slip.

## Tecnologías principales

<p align="left">
	<a href="https://skillicons.dev">
		<img src="https://skillicons.dev/icons?i=react,vite,tailwind,js,eslint" />
	</a>
</p>

- **React** — UI.
- **Vite** — Dev server y build.
- **@tanstack/react-query** — Fetching, caché y re-fetch del consejo.
- **Zustand** — Estado local mínimo (contador).
- **Tailwind CSS (v4)** — Estilos mediante utilidades.
- **lucide-react** — Iconos (dependencia instalada; úsala si añades iconos).

## Estructura principal

- `index.html` — Monta `#root` y define estilos base del `<body>`.
- `src/main.jsx` — Crea `QueryClient` y envuelve la app con `QueryClientProvider`.
- `src/App.jsx` — UI principal; llama a la API y hace `refetch()` al pulsar el botón.
- `src/Store/store.jsx` — Store de Zustand con `advice` e `incrementAdvice()`.
- `src/App.css` — Import global de Tailwind: `@import 'tailwindcss';`.

## Qué incluye

- Petición a la API pública: `https://api.adviceslip.com/advice`.
- Muestra un consejo aleatorio al cargar la página.
- Botón para pedir un nuevo consejo (re-fetch con React Query).
- Prevención de caché de la API añadiendo `?t=${Date.now()}` en la URL.

## Cómo ejecutar

Instala dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev

# o con bun (hay `bun.lock` en el repo)
bun install
bun run dev
```

## Notas importantes

- La UI usa `isLoading`, `isFetching` y `error` de React Query para estados de carga y error.
- El botón se deshabilita mientras se está pidiendo un nuevo consejo.
- El contador `advice` del store (Zustand) se incrementa al pedir un nuevo consejo y se muestra en pantalla.
