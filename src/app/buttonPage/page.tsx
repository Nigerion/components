import { Download, Heart, Search, User } from "lucide-react";

import { Button } from "@/ui/button/Button";

export default function ButtonPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <h2>Button</h2>
        <h3> === РАЗМЕРЫ ===</h3>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Button size="small">Маленькая</Button>
          <Button size="medium">Средняя</Button>
          <Button size="large">Большая</Button>
        </div>
        <h3>=== ФОРМЫ ===</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button shape="default">Прямоугольная</Button>
          <Button shape="round">Скругленная</Button>
          <Button shape="circle" icon={<User />} />
        </div>
        <h3>=== ЦВЕТА ===</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button color="primary">Основная</Button>
          <Button color="secondary">Вторичная</Button>
          <Button color="success">Успех</Button>
          <Button color="error">Ошибка</Button>
          <Button color="warning">Предупреждение</Button>
          <Button color="info">Инфо</Button>
        </div>
        <h3>=== ВАРИАНТЫ ===</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="solid">Заполненная</Button>
          <Button variant="outlined">Контурная</Button>
          <Button variant="dashed">Пунктирная</Button>
          <Button variant="text">Текстовая</Button>
          <Button variant="link">Ссылка</Button>
        </div>
        <h3>=== С ИКОНКАМИ ===</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button icon={<Download />} positionIcon="start">
            Скачать
          </Button>
          <Button icon={<Heart />} positionIcon="end">
            В избранное
          </Button>
        </div>
        <h3>=== КОМБИНАЦИИ ===</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            variant="outlined"
            color="success"
            size="large"
            icon={<Search />}
            shape="round"
          >
            Поиск
          </Button>
        </div>
        <h3>=== СОСТОЯНИЯ ===</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button disabled>Заблокирована</Button>
          <Button loading>Загрузка...</Button>
          <Button loading icon={<Download />}>
            Скачивание
          </Button>
        </div>
        <h3>=== ССЫЛКА ===</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button href="https://example.com" target="_blank">
            Открыть ссылку
          </Button>
        </div>
        <h3>=== КРУГЛАЯ ИКОНОЧНАЯ ===</h3>
        <div style={{ display: "flex", gap: "10px" }}>
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
        </div>
      </div>
    </>
  );
}
