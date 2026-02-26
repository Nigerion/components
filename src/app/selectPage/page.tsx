"use client";
import { Select } from "@/ui/select.ts/Select";

const options = [
  { key: "option1", label: "Первый вариант" },
  { key: "option2", label: "Второй вариант" },
  { key: "option3", label: "Третий вариант" },
  { key: "option4", label: "Четвертый вариант" },
];
export default function SelectPage() {
  const handleChange = (value: string | string[]) => {
    console.log("Выбранный вариант:", value);
  };
  const cityOptions = [
    { key: "moscow", label: "Москва" },
    { key: "spb", label: "Санкт-Петербург" },
    { key: "kazan", label: "Казань" },
    { key: "ekb", label: "Екатеринбург" },
    { key: "novosibirsk", label: "Новосибирск" },
  ];

  const handleCityChange = (cityKey: string | string[]) => {
    // setSelectedValue(cityKey);
    // Здесь можно выполнить дополнительную логику,
    // например, загрузить данные для выбранного города
  };

  const statusOptions = [
    { key: "active", label: "Активный" },
    { key: "pending", label: "В ожидании", disabled: true },
    { key: "inactive", label: "Неактивный" },
    { key: "archived", label: "В архиве" },
    { key: "deleted", label: "Удален", disabled: true },
  ];

  const countryOptions = [
    { key: "ru", label: "Россия" },
    { key: "us", label: "США" },
    { key: "de", label: "Германия" },
    { key: "fr", label: "Франция" },
    { key: "jp", label: "Япония" },
  ];
  return (
    <div>
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
        <Select size="medium" placeholder="Выберите фрукт" options={options} />
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
    </div>
  );
}
