"use client";
import { useMemo } from "react";

import { usePathname } from "next/navigation";

// Пример конфигурации роутов - вам нужно адаптировать под вашу структуру
const routeConfig: Record<string, { breadcrumb: string; disabled?: boolean }> =
  {
    "/": { breadcrumb: "Главная" },
    "/profile": { breadcrumb: "Профиль" },
    "/profile/settings": { breadcrumb: "Настройки" },
    "/profile/messages": { breadcrumb: "Сообщения" },
    "/profile/notifications": { breadcrumb: "Уведомления" },
    "/help": { breadcrumb: "Помощь" },
    "/documentation": { breadcrumb: "Документация" },
    "/analytics": { breadcrumb: "Аналитика" },
    "/users": { breadcrumb: "Пользователи" },
  };

export const useBreadcrumbs = () => {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const paths = pathname.split("/").filter(Boolean);

    const crumbs = paths.reduce<
      Array<{ path: string; label: string; disabled?: boolean }>
    >(
      (acc, path, index) => {
        const currentPath = `/${paths.slice(0, index + 1).join("/")}`;
        const config = routeConfig[currentPath];

        if (config) {
          acc.push({
            path: currentPath,
            label: config.breadcrumb,
            disabled: config.disabled,
          });
        } else {
          // Fallback - используем последнюю часть пути как заголовок
          acc.push({
            path: currentPath,
            label: path.charAt(0).toUpperCase() + path.slice(1),
          });
        }

        return acc;
      },
      [{ path: "/", label: "Главная" }] // Всегда добавляем главную
    );

    return crumbs;
  }, [pathname]);

  return breadcrumbs;
};
