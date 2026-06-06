import { useContext } from "react";
import { NotificationContext } from "./NotificationContext";

export default function NotificationList() {
  let { notification, add, markAllRead,stopNotifications } = useContext(NotificationContext);

  return (
    <div>
      <ul>
        {notification.map((item, idx) => (
          <li key={idx}>
            <h4 style={{ fontWeight: item.read ? "bold" : "normal" }}>{item.message}</h4>
          </li>
        ))}
      </ul>
      <button onClick={() => add()}>Add Notification</button>
      <button onClick={() => markAllRead()}>Mark All Read</button>
      <button onClick={() => stopNotifications()}>Stop Notifixcation</button>
    </div>
  );
}
