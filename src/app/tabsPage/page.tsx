import { Tabs } from "@/ui/tabs/Tabs";

const tabs = [
  {
    value: "profile",
    label: "Профиль",
    content: <div>Информация профиля</div>,
  },
  {
    value: "settings",
    label: "Настройки",
    content: <div>Настройки приложения</div>,
  },
  {
    value: "notifications",
    label: "Уведомления",
    content: <div>Нет уведомлений</div>,
  },
];
export default function TabsPage() {
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}
