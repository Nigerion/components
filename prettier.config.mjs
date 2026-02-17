const prettierConfig = {
  // Базовые настройки
  
  // Автоматически проставляет точки с запятой
  semi: true,
  // Единобразие ковычек (двойные ковычки)
  singleQuote: false,
  // Проставляет запятые. Пример: 
  // "none" - без запятых
  // const obj = {
  //  name: "Antonio",  // ❌ Запятая считается ошибкой
  //  age: 30           // ✅ Нет запятой
  // }

  // "es5" - с запятыми (наш выбор ✅)
  // const obj = {
  //  name: "Antonio",  // ✅ Можно запятую
  //  age: 30,         // ✅ Можно запятую
  // }

  // Почему: Чище git diff, легче добавлять новые поля
  trailingComma: "es5",
  // Размер отступа
  tabWidth: 2,
  // Длина строки
  printWidth: 80,
  // Использование пробелов вместо табов
  useTabs: false,
  
  // JSX/TSX
  // Использование двойных кавычек в JSX
  jsxSingleQuote: false,
  // Добавляет пробелы в скобках
  bracketSpacing: true,
  // Переносит закрывающую > нановую строчку
  bracketSameLine: false,
  // Использование скобок в стрелочных функциях
  arrowParens: "always",
  
  // Общие
  // Сохраняет перенос строк как в файле
  // Не ломает файлы при кроссплатформенной разработке
  endOfLine: "auto",
  proseWrap: "preserve",
  quoteProps: "as-needed",
  
  // Плагины (установите при необходимости)
  plugins: [
    // "prettier-plugin-tailwindcss", // для сортировки классов Tailwind
    "@trivago/prettier-plugin-sort-imports" // для сортировки импортов
  ],
  
  // Настройки плагинов
  importOrder: [
    "^react$",              // 1. React (точно react, не react-dom)
    "^next/(.*)$",         // 2. Next.js (next/router, next/link)
    "<THIRD_PARTY_MODULES>", // 3. Библиотеки (axios, lodash)
    "^@/(.*)$",            // 4. Абсолютные импорты (@/components)
    "^\\.\\./(.*)$",      // 5. Родительские импорты (../)
    "^\\./(.*)$"          // 6. Текущая папка (./)
  ],
  // Визуальное разделение групп импортов
  importOrderSeparation: true,
  // Сортировка внутри импорта
  importOrderSortSpecifiers: true,
  // tailwindConfig: "./tailwind.config.ts", // если используете Tailwind
};

export default prettierConfig;