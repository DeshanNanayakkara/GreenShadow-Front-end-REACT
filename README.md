# React + TypeScript + Vite

This project is a modern setup to develop React applications with TypeScript using Vite. It provides fast development with HMR and includes ESLint for maintaining code quality.

## Key Features

- **Hot Module Replacement (HMR)** for efficient development.
- **TypeScript support** for type-safe coding.
- **Customizable ESLint configuration** to match your coding standards.

## Plugins

You can enhance your development experience with the following official plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Configuring ESLint

To enable advanced linting rules for production-grade applications, follow these steps:

1. **Update `parserOptions`:**

   ```js
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
