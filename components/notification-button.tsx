import { Bell } from "lucide-react";

export function NotificationButton() {
  return (
    <button
      type="button"
      title="notification"
      className="relative p-2 rounded-full hover:bg-gray-100 bg-white"
    >
      <Bell className="text-primary" />
      <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
    </button>
  );
}
