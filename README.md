# Habibit - React + shadcn/ui Project

A modern React application built with TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- ⚡️ **Vite** - Fast build tool and development server
- ⚛️ **React 18** with TypeScript for type safety
- 🎨 **Tailwind CSS** for utility-first styling
- 🧩 **shadcn/ui** - Beautiful, accessible component library
- 🌗 **Dark/Light Mode** support ready
- 📱 **Responsive Design** with mobile-first approach

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Package Manager:** npm

## 📦 Installed Components

The following shadcn/ui components are available:

- `Button` - Various button styles and variants
- `Card` - Container component with header, content sections
- `Input` - Form input component
- `Label` - Accessible form labels

## 🎯 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. The project is already set up! Just run:

```bash
npm run dev
```

2. Open your browser and navigate to the displayed local URL (usually `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🧩 Adding More Components

To add more shadcn/ui components, use:

```bash
npx shadcn@latest add [component-name]
```

Popular components to try:
- `dialog` - Modal dialogs
- `dropdown-menu` - Dropdown menus
- `select` - Select dropdowns
- `checkbox` - Checkboxes
- `textarea` - Text areas
- `toast` - Notifications
- `accordion` - Collapsible content
- `tabs` - Tab navigation

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}
```

### Tailwind Configuration

Modify `tailwind.config.js` to:
- Add custom colors
- Extend spacing scale
- Add custom fonts
- Configure breakpoints

## 📁 Project Structure

```
habibit/
├── @/                      # shadcn/ui components (auto-generated)
│   └── components/
│       └── ui/
├── src/
│   ├── lib/
│   │   └── utils.ts       # Utility functions (cn helper)
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles + Tailwind
├── components.json         # shadcn/ui configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.ts         # Vite configuration
```

## 🎭 Component Examples

The main App component demonstrates:

1. **Counter Example** - State management with buttons
2. **Form Example** - Input handling with labels
3. **Component Showcase** - Different button variants
4. **Responsive Grid** - Mobile-first responsive layout

## 🌟 Next Steps

1. **Add Routing** - Install React Router for navigation
2. **State Management** - Add Zustand or Redux for complex state
3. **API Integration** - Add Axios or Fetch for data fetching
4. **Testing** - Set up Jest and React Testing Library
5. **Deployment** - Deploy to Vercel, Netlify, or similar platforms

## 📚 Useful Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Happy coding! 🎉
