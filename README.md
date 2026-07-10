# 🍽️ Planificador Semanal de Comidas

Aplicación web hecha con **Vue 3 + Vite** para buscar recetas y organizar un
menú semanal (lunes a domingo) de forma visual. Las recetas se obtienen de la
API pública [TheMealDB](https://www.themealdb.com/api.php).

## Funcionalidades

- 🔎 **Buscador de recetas**: por primera letra o por nombre del plato.
- 📅 **Planificador semanal**: asigna cada receta encontrada a un día de la
  semana desde un desplegable, y consulta el menú completo en la vista de
  planificación.
- 📖 **Detalle de receta**: ingredientes e instrucciones en vistas anidadas
  (`/recipe/:category/ingredients/:mealId` e `.../instructions/:meal`).
- 🎨 Interfaz estilizada con **Tailwind CSS**.

## Stack técnico

- [Vue 3](https://vuejs.org/) (Composition/Options API) + `<script setup>`
- [Vite](https://vitejs.dev/) como bundler y servidor de desarrollo
- [Vue Router](https://router.vuejs.org/) con `createWebHashHistory`
- [Pinia](https://pinia.vuejs.org/) para el estado global del planificador semanal
- [Tailwind CSS](https://tailwindcss.com/) para los estilos
- API externa: [TheMealDB](https://www.themealdb.com/api.php)

## Estructura del proyecto

```
src/
├── main.js               # Punto de entrada de la app
├── App.vue                # Componente raíz
├── router/
│   └── router.js          # Definición de rutas
├── stores/
│   └── planner.js          # Store Pinia con el planning semanal
├── views/
│   ├── HomeView.vue
│   ├── SearchView.vue      # Buscador de recetas
│   ├── PlannerView.vue     # Vista del menú semanal
│   ├── RecipeLayout.vue    # Layout con rutas anidadas de receta
│   └── recipe/
│       ├── RecipeIngredients.vue
│       └── RecipeInstructions.vue
├── components/
│   ├── NavBar.vue
│   ├── RecipeCard.vue
│   ├── PlanerDayCard.vue
│   ├── Loading.vue
│   └── Error.vue
└── utils/
    └── theme.js
```

## Instalación y uso

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build       # build de producción
npm run preview     # previsualizar el build
```

## 🚀 Mejoras a futuro

- Persistir el planificador semanal (actualmente vive solo en memoria del
  store de Pinia y se pierde al recargar la página); se podría guardar en
  `localStorage` o en un backend propio.
- Manejar estados de carga y error visibles en `SearchView.vue` (las
  variables `loading`/`error` existen pero los bloques del template están
  vacíos).
- Añadir tests de componentes (Vitest + Vue Testing Library).
- Permitir quitar una receta ya asignada a un día sin tener que
  sobrescribirla con otra.
- Añadir variables de entorno para la URL base de la API en vez de tenerla
  fija dentro de los componentes.
