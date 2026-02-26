import { Input } from "@/ui/input/Input";

export default function InputPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Разные размеры</h3>
        <Input size="small" placeholder="Маленький" />
        <Input size="medium" placeholder="Средний" />
        <Input size="large" placeholder="Большой" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Базовые варианты</h3>
        <Input variant="outlined" placeholder="Outlined" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="underline" placeholder="Underline" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Medium размер</h3>
        <Input variant="outlined" size="medium" placeholder="Outlined Medium" />
        <Input variant="filled" size="medium" placeholder="Filled Medium" />
        <Input
          variant="underline"
          size="medium"
          placeholder="Underline Medium"
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Large размер</h3>
        <Input variant="outlined" size="large" placeholder="Outlined Large" />
        <Input variant="filled" size="large" placeholder="Filled Large" />
        <Input variant="underline" size="large" placeholder="Underline Large" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Базовые статусы</h3>
        <Input status="error" placeholder="Ошибка" />
        <Input status="warning" placeholder="Предупреждение" />
        <Input status="success" placeholder="Успех" />
      </div>

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

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Заблокированные со статусами</h3>
        <Input disabled status="error" placeholder="Ошибка (заблокировано)" />
        <Input
          disabled
          status="warning"
          placeholder="Предупреждение (заблокировано)"
        />
        <Input disabled status="success" placeholder="Успех (заблокировано)" />
      </div>
    </div>
  );
}
