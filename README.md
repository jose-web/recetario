# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

# 🍽️ Recetario

Una aplicación web moderna para explorar recetas tradicionales españolas, construida con **Astro** y **Tailwind CSS**.

## ✨ Características

- 🔍 **Buscador avanzado** con filtros por dificultad y categorías
- 📱 **Diseño responsive** optimizado para móviles y escritorio
- 🎥 **Video sticky** que se mantiene visible durante el scroll en las recetas
- 📝 **Pasos numerados** con imágenes ilustrativas para cada paso
- 🎨 **Transiciones suaves** entre páginas usando View Transitions API
- ⚡ **Rendimiento optimizado** con carga lazy de imágenes
- 🎯 **Interfaz intuitiva** con diseño moderno y accesible

## 🚀 Tecnologías

- **Astro** - Framework web moderno
- **Tailwind CSS** - Framework de estilos utilitarios
- **TypeScript** - Tipado estático
- **View Transitions API** - Transiciones nativas entre páginas
- **Lucide React** - Iconos modernos

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd recetario
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 🏗️ Estructura del proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── recipes.ts          # Datos de las recetas
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal
│   ├── pages/
│   │   ├── index.astro         # Página principal con buscador
│   │   ├── recetas.astro       # Todas las recetas
│   │   └── receta/
│   │       └── [id].astro      # Página individual de receta
│   ├── styles/
│   │   └── global.css          # Estilos globales
│   └── types/
│       └── recipe.ts           # Tipos TypeScript
└── package.json
```

## 🍳 Funcionalidades principales

### Buscador de recetas
- Búsqueda en tiempo real por título, descripción y etiquetas
- Filtros por dificultad (Fácil, Intermedio, Difícil)
- Filtros por categorías (arroz, española, etc.)

### Páginas de recetas
- **Video explicativo sticky** que permanece visible al hacer scroll
- **Pasos numerados** con descripciones detalladas
- **Imágenes para cada paso** con fallbacks automáticos
- **Lista de ingredientes** organizada y fácil de seguir
- **Información nutricional** (tiempo, porciones, dificultad)

### Navegación
- **Transiciones suaves** entre páginas
- **Navegación intuitiva** con breadcrumbs
- **Diseño responsive** para todos los dispositivos

## 🎨 Paleta de colores

- **Naranja principal**: #f97316 (orange-500)
- **Naranja oscuro**: #ea580c (orange-600)
- **Fondo**: #fff7ed (orange-50)
- **Texto**: #374151 (gray-700)

## 📱 Responsive Design

- **Mobile**: Optimizado para pantallas pequeñas
- **Tablet**: Layout adaptado para pantallas medianas
- **Desktop**: Video sticky lateral y grid de 3 columnas

## 🚀 Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción
npm run astro        # CLI de Astro
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

¡Disfruta cocinando las mejores recetas españolas! 🇪🇸✨
