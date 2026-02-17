// Функция-обёртка для создания конфига с автодополнением
// Делает конфиг "умнее" в редакторах кода
import { defineConfig } from "eslint/config";
// Плагин Next.js с правилами для App Router и Pages Router
// Содержит правила типа @next/next/no-img-element
import nextPlugin from "@next/eslint-plugin-next";
// Плагин TypeScript для ESLint
// Добавляет TypeScript-специфичные правила
import typescript from "@typescript-eslint/eslint-plugin";
// Парсер, который понимает TypeScript синтаксис
// Превращает TS код в AST (Abstract Syntax Tree)
import typescriptParser from "@typescript-eslint/parser";
// Плагин с правилами для React
// Проверяет правильность JSX, PropTypes и т.д.
import react from "eslint-plugin-react";
// Правила для React Hooks
// Проверяет правила хуков (не вызывать в циклах, условиях)
import reactHooks from "eslint-plugin-react-hooks";
// Отключает ВСЕ правила ESLint, которые конфликтуют с Prettier
// Должен быть ПОСЛЕДНИМ в массиве
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    // Применять правила ТОЛЬКО к файлам в папке src
    // Расширения: .js, .jsx, .ts, .tsx
    // ** - любая вложенность папок
    files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    // Не проверять эти файлы/папки
    // **/*.config.* - все конфиги (next.config.ts, prettier.config.mjs)
    // Системные папки (.next, node_modules)
    // Статика (public/**)
    // Git хуки (.husky/**)
    // TypeScript декларации (next-env.d.ts)
    ignores: [
      "**/*.config.*",
      ".next/**",
      "node_modules/**",
      "public/**",
      ".husky/**",
      "next-env.d.ts",
    ],
    languageOptions: {
      // Использовать TypeScript парсер вместо стандартного
      parser: typescriptParser,
      parserOptions: {
        // Поддерживать последний стандарт ECMAScript
        ecmaVersion: "latest",
        // Использовать ES Modules (import/export)
        // Не CommonJS (require/module.exports)
        sourceType: "module",
        // Поддерживать JSX синтаксис React
        ecmaFeatures: { jsx: true },
        // Путь к TypeScript конфигу
        // Нужен для правил с типами
        project: "./tsconfig.json", // Убедитесь, что путь правильный
        // Корневая директория для tsconfig.json
        tsconfigRootDir: import.meta.dirname, 
      },
    },
    settings: {
      react: {
        // Автоопределение версии React из package.json
        // Чтобы правила React знали версию API
        version: "detect",
      },
      next: {
        // Корень Next.js проекта
        // Нужен для правил типа @next/next/no-html-link-for-pages
        // ** Правило @next/next/no-html-link-for-pages проверяет, что вы не используете обычные <a> ссылки для внутренних страниц вашего сайта.
        rootDir: import.meta.dirname,
      },
    },
    plugins: {
      // Регистрируем плагин Next.js с алиасом @next/next
      // Правила будут с префиксом @next/next/
      "@next/next": nextPlugin,
      // Плагин TypeScript с алиасом @typescript-eslint
      // Правила: @typescript-eslint/no-unused-vars
      "@typescript-eslint": typescript,
      // Плагин React
      // Правила: react/jsx-key
      "react": react,
      // Плагин React Hooks
      // Правила: react-hooks/rules-of-hooks
      "react-hooks": reactHooks,
    },
    rules: {
      // Next.js
      // Базовые правила Next.js (безопасность, производительность)
      // Оператор ... распаковывает объект с правилами
      ...nextPlugin.configs.recommended.rules,
      // Дополнительные правила для Core Web Vitals
      // LCP, FID, CLS оптимизации
      // Core Web Vitals - это показатели скорости и удобства сайта, по которым Google оценивает ваш сайт.
      ...nextPlugin.configs["core-web-vitals"].rules,
      
      // TypeScript
      // Рекомендуемые правила TypeScript
      // Отключает конфликтующие с TS правила ESLint
      ...typescript.configs["recommended"].rules,

      // React
      // Базовые правила React
      // PropTypes, безопасность, best practices
      ...react.configs.recommended.rules,
      // Правила для нового JSX трансформа (React 17+)
      // Не требует import React from 'react'
      ...react.configs["jsx-runtime"].rules,

      // React Hooks
      // Проверка правил хуков
      // Не вызывать хуки в условиях, циклах, nested функциях
      ...reactHooks.configs.recommended.rules,
      
      // Ваши правила
      // Предупреждать (warn) о console.log
      // Разрешить (allow) console.warn и console.error
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // Предупреждать о неиспользуемых переменных
      // Игнорировать если начинаются с _ (пример: _unused)
      "@typescript-eslint/no-unused-vars": ["warn", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_" 
      }],
      // ОТКЛЮЧИТЬ (off) обязательное указание return type
      // TypeScript сам выводит тип, не нужно писать вручную
      "@typescript-eslint/explicit-function-return-type": "off",
      // ОТКЛЮЧИТЬ обязательные типы для export функций
      // Экономит время, TypeScript сам выводит типы
      "@typescript-eslint/explicit-module-boundary-types": "off",
      
      // Next.js специфичные
      // Предупреждать об использовании <img>
      // Рекомендует <Image /> компонент Next.js
      "@next/next/no-img-element": "warn",
      // ОШИБКА при использовании <a> для внутренних ссылок
      // Рекомендует <Link> компонент
      // Указываем папку со страницами (src/app)
      "@next/next/no-html-link-for-pages": ["error", "src/app"],
    },
  },
  // Отключаем конфликтующие правила Prettier
  // ДОЛЖЕН БЫТЬ ПОСЛЕДНИМ!
  // Отключает ВСЕ правила форматирования
  // Prettier сам форматирует код, ESLint только проверяет логику
  prettier,
]);