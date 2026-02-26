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
      </div>
    </>
  );
}
