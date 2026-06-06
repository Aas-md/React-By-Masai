import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  let [notification, setNotification] = useState([]);
  let [stop, setStop] = useState(false);

  let add = (message = "You have a new notificatoin") => {
    let curr = { id: Date.now(), message, read: false };
    setNotification((prev) => [...prev, curr]);
  };

  let markAllRead = () => {
    setNotification(notification.map((item) => ({ ...item, read: true })));
  };

  let stopNotifications = () => {
    setStop(true);
  };

  useEffect(() => {
    if (stop) {
      console.log("Notification Stoped..");
      return;
    }

    let idx = setInterval(() => {
      add();
    }, 2000);

    return () => {
      clearInterval(idx);
    };
  }, [stop]);

  return (
    <NotificationContext.Provider value={{ notification, add, markAllRead, stopNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
}
