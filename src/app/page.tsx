/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

import { Download, Heart, Search, User } from "lucide-react";

import { Breadcrumbs } from "../ui/breadcrumbs/Breadcrumbs";
import { Button } from "../ui/button/Button";
import { Card } from "../ui/card/Card";
import { CardContent } from "../ui/card/ui/CardContent/CardContent";
import { CardFooter } from "../ui/card/ui/CardFooter/CardFooter";
import { CardHeader } from "../ui/card/ui/CardHeader/CardHeader";
import { Input } from "../ui/input/Input";
import { Select } from "../ui/select.ts/Select";
import Table from "../ui/table/Table";
import { Tabs } from "../ui/tabs/Tabs";
import { Tab } from "../ui/tabs/ui/Tab";

// Определяем типы
type Column = {
  key: string;
  value: string;
  width?: number;
  minWidth?: number;
  fixed?: "left" | "right";
};

type RowData = {
  [key: string]: any;
  id: string | number;
};

// // Генерация колонок на основе данных
// const generateColumns = (): Column[] => {
//     return Array.from({ length: 35 }, (_, i) => ({
//         key: `column${i + 1}`,
//         value: `Колонка ${i + 1}`,
//         width: 180,
//         minWidth: 150,
//         fixed: i === 0 ? "left" : undefined,
//     }));
// };

// // Преобразование данных событий в формат для таблицы
// const transformEventsToTableData = (): RowData[] => {
//     // Возвращаем тестовые данные, если событий нет
//     return Array.from({ length: 100 }, (_, rowIndex) => {
//         const row: RowData = { id: rowIndex + 1 };
//         for (let i = 0; i < 35; i++) {
//             row[`column${i + 1}`] = `Значение ${rowIndex + 1}-${i + 1}`;
//         }
//         return row;
//     });
// };

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  // Определяем колонки на основе данных
  // const columns = generateColumns();

  // // Преобразуем данные событий для таблицы
  // const tableData = transformEventsToTableData();
  // // Состояние для пагинации
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(30);
  // // Обработчик изменения страницы
  // const handlePageChange = (page: number) => {
  //     setCurrentPage(page);
  // };

  // // Обработчик изменения количества элементов на странице
  // const handleItemsPerPageChange = (value: number) => {
  //     setItemsPerPage(value);
  //     setCurrentPage(1); // Сбрасываем на первую страницу при изменении размера
  // };

  // const options = [
  //   { key: "option1", label: "Первый вариант" },
  //   { key: "option2", label: "Второй вариант" },
  //   { key: "option3", label: "Третий вариант" },
  //   { key: "option4", label: "Четвертый вариант" },
  // ];

  // const handleChange = (value: string | string[]) => {
  //   console.log("Выбранный вариант:", value);
  // };

  // // const [selectedValue, setSelectedValue] = useState<string>("");

  // const cityOptions = [
  //   { key: "moscow", label: "Москва" },
  //   { key: "spb", label: "Санкт-Петербург" },
  //   { key: "kazan", label: "Казань" },
  //   { key: "ekb", label: "Екатеринбург" },
  //   { key: "novosibirsk", label: "Новосибирск" },
  // ];

  // const handleCityChange = (cityKey: string | string[]) => {
  //   // setSelectedValue(cityKey);
  //   // Здесь можно выполнить дополнительную логику,
  //   // например, загрузить данные для выбранного города
  // };

  // const statusOptions = [
  //   { key: "active", label: "Активный" },
  //   { key: "pending", label: "В ожидании", disabled: true },
  //   { key: "inactive", label: "Неактивный" },
  //   { key: "archived", label: "В архиве" },
  //   { key: "deleted", label: "Удален", disabled: true },
  // ];

  // const countryOptions = [
  //   { key: "ru", label: "Россия" },
  //   { key: "us", label: "США" },
  //   { key: "de", label: "Германия" },
  //   { key: "fr", label: "Франция" },
  //   { key: "jp", label: "Япония" },
  // ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "ceter",
        margin: " 30%",
      }}
    >
      <h1>Здесь будут появляться компоненты!</h1>
      {/* <div>
        <Select
          multiple
          options={options}
          placeholder="Выберите города"
          defaultValue={["option1", "option2"]}
          onChange={(value) => console.log(value)}
          maxTags={1}
        />
        <h2>Базовый селект</h2>
        <Select
          placeholder="Выберите вариант"
          options={options}
          onChange={handleChange}
        />
        <h2>Селекты разных размеров</h2>

        <div style={{ marginBottom: "20px" }}>
          <h4>Маленький (small)</h4>
          <Select size="small" placeholder="Выберите фрукт" options={options} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h4>Средний (medium) - по умолчанию</h4>
          <Select
            size="medium"
            placeholder="Выберите фрукт"
            options={options}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h4>Большой (large)</h4>
          <Select size="large" placeholder="Выберите фрукт" options={options} />
        </div>
        <div className="container">
          <h2>Управляемый селект</h2>

          <Select
            placeholder="Выберите город"
            options={cityOptions}
            defaultValue="kazan" // Значение по умолчанию
            onChange={handleCityChange}
            size="medium"
          />
          <div className="container">
            <h2>Селект с отключенными опциями</h2>

            <div style={{ marginBottom: "30px" }}>
              <h4>Обычный селект с disabled опциями</h4>
              <Select
                placeholder="Выберите статус"
                options={statusOptions}
                size="medium"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h4>Полностью отключенный селект</h4>
              <Select
                placeholder="Выберите статус"
                options={statusOptions}
                disabled={true}
                defaultValue="active"
                size="medium"
              />
            </div>
          </div>
          <h2>Селект с ошибкой</h2>

          <div style={{ marginBottom: "30px" }}>
            <h4>Селект с ошибкой валидации</h4>
            <Select
              placeholder="Выберите страну"
              options={countryOptions}
              error={true}
              size="medium"
              className="my-custom-select"
            />
            <p style={{ color: "#f44336", fontSize: "12px", marginTop: "5px" }}>
              Пожалуйста, выберите страну
            </p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h4>Селект с ошибкой и значением</h4>
            <Select
              placeholder="Выберите страну"
              options={countryOptions}
              defaultValue="ru"
              error={true}
              size="medium"
            />
          </div>
        </div>
      </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* Поле ввода Разные размеры */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Разные размеры</h3>
          <Input size="small" placeholder="Маленький" />
          <Input size="medium" placeholder="Средний" />
          <Input size="large" placeholder="Большой" />
        </div>

        {/* Разные варианты */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Базовые варианты</h3>
          <Input variant="outlined" placeholder="Outlined" />
          <Input variant="filled" placeholder="Filled" />
          <Input variant="underline" placeholder="Underline" />
        </div>

        {/* Medium размер с разными вариантами */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Medium размер</h3>
          <Input
            variant="outlined"
            size="medium"
            placeholder="Outlined Medium"
          />
          <Input variant="filled" size="medium" placeholder="Filled Medium" />
          <Input
            variant="underline"
            size="medium"
            placeholder="Underline Medium"
          />
        </div>

        {/* Large размер с разными вариантами */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Large размер</h3>
          <Input variant="outlined" size="large" placeholder="Outlined Large" />
          <Input variant="filled" size="large" placeholder="Filled Large" />
          <Input
            variant="underline"
            size="large"
            placeholder="Underline Large"
          />
        </div>

        {/* Разные статусы - базовые */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Базовые статусы</h3>
          <Input status="error" placeholder="Ошибка" />
          <Input status="warning" placeholder="Предупреждение" />
          <Input status="success" placeholder="Успех" />
        </div>

        {/* Статусы с разными вариантами */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Статусы с вариантами</h3>
          <Input
            status="error"
            variant="outlined"
            placeholder="Ошибка Outlined"
          />
          <Input
            status="warning"
            variant="outlined"
            placeholder="Предупреждение Outlined"
          />
          <Input
            status="success"
            variant="outlined"
            placeholder="Успех Outlined"
          />

          <Input status="error" variant="filled" placeholder="Ошибка Filled" />
          <Input
            status="warning"
            variant="filled"
            placeholder="Предупреждение Filled"
          />
          <Input status="success" variant="filled" placeholder="Успех Filled" />

          <Input
            status="error"
            variant="underline"
            placeholder="Ошибка Underline"
          />
          <Input
            status="warning"
            variant="underline"
            placeholder="Предупреждение Underline"
          />
          <Input
            status="success"
            variant="underline"
            placeholder="Успех Underline"
          />
        </div>

        {/* Статусы с разными размерами */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Статусы с размерами</h3>
          <Input status="error" size="small" placeholder="Ошибка Small" />
          <Input
            status="warning"
            size="small"
            placeholder="Предупреждение Small"
          />
          <Input status="success" size="small" placeholder="Успех Small" />

          <Input status="error" size="medium" placeholder="Ошибка Medium" />
          <Input
            status="warning"
            size="medium"
            placeholder="Предупреждение Medium"
          />
          <Input status="success" size="medium" placeholder="Успех Medium" />

          <Input status="error" size="large" placeholder="Ошибка Large" />
          <Input
            status="warning"
            size="large"
            placeholder="Предупреждение Large"
          />
          <Input status="success" size="large" placeholder="Успех Large" />
        </div>

        {/* Статусы с иконкой очистки */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Статусы с очисткой</h3>
          <Input clearable status="error" placeholder="Ошибка с очисткой" />
          <Input
            clearable
            status="warning"
            placeholder="Предупреждение с очисткой"
          />
          <Input clearable status="success" placeholder="Успех с очисткой" />
        </div>

        {/* Статусы с иконкой очистки и разными вариантами */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Статусы с очисткой и вариантами</h3>
          <Input
            clearable
            status="error"
            variant="outlined"
            placeholder="Ошибка Outlined"
          />
          <Input
            clearable
            status="warning"
            variant="outlined"
            placeholder="Предупреждение Outlined"
          />
          <Input
            clearable
            status="success"
            variant="outlined"
            placeholder="Успех Outlined"
          />

          <Input
            clearable
            status="error"
            variant="filled"
            placeholder="Ошибка Filled"
          />
          <Input
            clearable
            status="warning"
            variant="filled"
            placeholder="Предупреждение Filled"
          />
          <Input
            clearable
            status="success"
            variant="filled"
            placeholder="Успех Filled"
          />

          <Input
            clearable
            status="error"
            variant="underline"
            placeholder="Ошибка Underline"
          />
          <Input
            clearable
            status="warning"
            variant="underline"
            placeholder="Предупреждение Underline"
          />
          <Input
            clearable
            status="success"
            variant="underline"
            placeholder="Успех Underline"
          />
        </div>

        {/* Статусы с иконкой очистки и разными размерами */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Статусы с очисткой и размерами</h3>
          <Input
            clearable
            status="error"
            size="small"
            placeholder="Ошибка Small"
          />
          <Input
            clearable
            status="warning"
            size="small"
            placeholder="Предупреждение Small"
          />
          <Input
            clearable
            status="success"
            size="small"
            placeholder="Успех Small"
          />

          <Input
            clearable
            status="error"
            size="medium"
            placeholder="Ошибка Medium"
          />
          <Input
            clearable
            status="warning"
            size="medium"
            placeholder="Предупреждение Medium"
          />
          <Input
            clearable
            status="success"
            size="medium"
            placeholder="Успех Medium"
          />

          <Input
            clearable
            status="error"
            size="large"
            placeholder="Ошибка Large"
          />
          <Input
            clearable
            status="warning"
            size="large"
            placeholder="Предупреждение Large"
          />
          <Input
            clearable
            status="success"
            size="large"
            placeholder="Успех Large"
          />
        </div>

        {/* С иконкой очистки - базовые */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>С очисткой - базовые</h3>
          <Input clearable placeholder="Очищаемый" />
          <Input clearable variant="filled" placeholder="Очищаемый Filled" />
          <Input
            clearable
            variant="underline"
            placeholder="Очищаемый Underline"
          />
        </div>

        {/* С иконкой очистки - medium размер */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>С очисткой - Medium</h3>
          <Input clearable size="medium" placeholder="Очищаемый Medium" />
          <Input
            clearable
            size="medium"
            variant="filled"
            placeholder="Очищаемый Filled Medium"
          />
          <Input
            clearable
            size="medium"
            variant="underline"
            placeholder="Очищаемый Underline Medium"
          />
        </div>

        {/* С иконкой очистки - large размер */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>С очисткой - Large</h3>
          <Input clearable size="large" placeholder="Очищаемый Large" />
          <Input
            clearable
            size="large"
            variant="filled"
            placeholder="Очищаемый Filled Large"
          />
          <Input
            clearable
            size="large"
            variant="underline"
            placeholder="Очищаемый Underline Large"
          />
        </div>

        {/* Заблокированные */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Заблокированные</h3>
          <Input variant="filled" disabled placeholder="Заблокировано Filled" />
          <Input
            variant="outlined"
            disabled
            placeholder="Заблокировано Outlined"
          />
          <Input
            variant="underline"
            disabled
            placeholder="Заблокировано Underline"
          />
        </div>

        {/* Заблокированные со статусами */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3>Заблокированные со статусами</h3>
          <Input disabled status="error" placeholder="Ошибка (заблокировано)" />
          <Input
            disabled
            status="warning"
            placeholder="Предупреждение (заблокировано)"
          />
          <Input
            disabled
            status="success"
            placeholder="Успех (заблокировано)"
          />
        </div>
      </div>
      {/* <div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
				}}
			>
				<Button>Кликни меня!</Button>
				=== РАЗМЕРЫ ===
				<Button size="small">Маленькая</Button>
				<Button size="medium">Средняя</Button>
				<Button size="large">Большая</Button>
				=== ФОРМЫ ===
				<Button shape="default">Прямоугольная</Button>
				<Button shape="round">Скругленная</Button>
				<Button shape="circle" icon={<User />} />
				=== ЦВЕТА ===
				<Button color="primary">Основная</Button>
				<Button color="secondary">Вторичная</Button>
				<Button color="success">Успех</Button>
				<Button color="error">Ошибка</Button>
				<Button color="warning">Предупреждение</Button>
				<Button color="info">Инфо</Button>
				=== ВАРИАНТЫ ===
				<Button variant="solid">Заполненная</Button>
				<Button variant="outlined">Контурная</Button>
				<Button variant="dashed">Пунктирная</Button>
				<Button variant="text">Текстовая</Button>
				<Button variant="link">Ссылка</Button>
				=== С ИКОНКАМИ ===
				<Button icon={<Download />} positionIcon="start">
					Скачать
				</Button>
				<Button icon={<Heart />} positionIcon="end">
					В избранное
				</Button>
				=== КОМБИНАЦИИ ===
				<Button
					variant="outlined"
					color="success"
					size="large"
					icon={<Search />}
					shape="round"
				>
					Поиск
				</Button>
				=== СОСТОЯНИЯ ===
				<Button disabled>Заблокирована</Button>
				<Button loading>Загрузка...</Button>
				<Button loading icon={<Download />}>
					Скачивание
				</Button>
				=== ССЫЛКА ===
				<Button href="https://example.com" target="_blank">
					Открыть ссылку
				</Button>
				=== КРУГЛАЯ ИКОНОЧНАЯ ===
				<Button
					shape="circle"
					icon={<Heart />}
					variant="outlined"
					color="error"
				/>
				<Button
					shape="circle"
					icon={<User />}
					size="large"
					variant="solid"
					color="primary"
				/>
			</div> */}
      {/* <div>
				Поле ввода Разные размеры
				<Input size="small" placeholder="Маленький" />
				<Input size="medium" placeholder="Средний" />
				<Input size="large" placeholder="Большой" />
				Разные варианты
				<Input variant="outlined" placeholder="Outlined" />
				<Input variant="filled" placeholder="Filled" />
				<Input variant="underline" placeholder="Underline" />
				<Input
					variant="outlined"
					size="medium"
					placeholder="Outlined"
				/>
				<Input variant="filled" size="medium" placeholder="Filled" />
				<Input
					variant="underline"
					size="medium"
					placeholder="Underline"
				/>
				<Input variant="outlined" size="large" placeholder="Outlined" />
				<Input variant="filled" size="large" placeholder="Filled" />
				<Input
					variant="underline"
					size="large"
					placeholder="Underline"
				/>
				Разные статусы
				<Input status="error" placeholder="Ошибка" />
				<Input status="warning" placeholder="Предупреждение" />
				<Input status="success" placeholder="Успех" />
				С иконкой очистки
				<Input clearable value={inputValue} onChange={setInputValue} />
				<Input
					clearable
					variant="filled"
					value={inputValue}
					onChange={setInputValue}
				/>
				<Input
					clearable
					variant="underline"
					value={inputValue}
					onChange={setInputValue}
				/>
				<Input
					clearable
					size="medium"
					value={inputValue}
					onChange={setInputValue}
				/>
				<Input
					clearable
					size="medium"
					variant="filled"
					value={inputValue}
					onChange={setInputValue}
				/>
				<Input
					clearable
					size="medium"
					variant="underline"
					value={inputValue}
					onChange={setInputValue}
				/>
				<Input
					clearable
					size="large"
					value={inputValue}
					onChange={setInputValue}
				/>
				<Input
					clearable
					size="large"
					variant="filled"
					value={inputValue}
					onChange={setInputValue}
				/>
				<Input
					clearable
					size="large"
					variant="underline"
					value={inputValue}
					onChange={setInputValue}
				/>
				Заблокированный
				<Input variant="filled" disabled placeholder="Заблокировано" />
				<Input
					variant="outlined"
					disabled
					placeholder="Заблокировано"
				/>
				<Input
					variant="underline"
					disabled
					placeholder="Заблокировано"
				/>
			</div> */}
      {/* <div>
				Breadcrumbs
				<Breadcrumbs></Breadcrumbs>
			</div> */}
      {/* Карточки */}
      {/* <div style={{ display: "flex" }}>
				<Card>
					<CardHeader
						title="Title"
						subheader="subheader"
					></CardHeader>
					<CardContent>Здесь контен</CardContent>
					<CardFooter>Здесь футер</CardFooter>
				</Card>
				<Card>
					<CardHeader title="Бобо" subheader="Длдд"></CardHeader>
					<CardContent>Здесь контен</CardContent>
					<CardFooter>Здесь футер</CardFooter>
				</Card>
			</div>
			<div>
				Табы
				<Tabs>
					<Tab title="Первая" />
					<Tab title="Вторая" />
					<Tab title="Третья" />
				</Tabs>
			</div>
			<div
				style={{
					flex: "1 1 auto",
					display: "flex",
					flexDirection: "column",
					height: "600px",
					// height: "100%",
					minHeight: 0,
					background: "white",
					padding: "10px",
					borderRadius: "10px",
					boxSizing: "border-box",
					// width: "100%",
					width: "700px",
					overflow: "hidden",
				}}
			>
				<h1 style={{ margin: "0 0 16px 0", fontSize: "24px" }}>
					Список мероприятий
				</h1>

				<div
					style={{
						marginBottom: "16px",
						display: "flex",
						alignItems: "center",
						gap: "8px",
					}}
				>
					<label htmlFor="itemsPerPage" style={{ fontSize: "14px" }}>
						Элементов на странице:
					</label>
					<select
						id="itemsPerPage"
						value={itemsPerPage}
						onChange={(e) =>
							handleItemsPerPageChange(Number(e.target.value))
						}
						style={{
							padding: "6px 12px",
							border: "1px solid #ced4da",
							borderRadius: "4px",
							fontSize: "14px",
						}}
					>
						<option value={10}>10</option>
						<option value={20}>20</option>
						<option value={30}>30</option>
						<option value={50}>50</option>
						<option value={100}>100</option>
					</select>
				</div>

				<div
					style={{
						flex: "1",
						display: "flex",
						flexDirection: "column",
						minHeight: 0,
						height: "100%",
						overflow: "hidden",
					}}
				>
					<Table
						columns={columns}
						data={tableData}
						sortable={true}
						pagination={true}
						itemsPerPage={itemsPerPage}
						currentPage={currentPage}
						totalPages={0}
						onPageChange={handlePageChange}
					/>
				</div>
			</div> */}
    </div>
  );
}
