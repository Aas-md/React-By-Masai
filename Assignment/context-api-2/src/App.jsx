import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./q-2/Home";
import { AuthContextProvider } from "./q-2/AuthContext";
import { ThemeContextProvider } from "./q-2/ThemeContext";
import Navbar from "./q-3/Navbar";
import Sidebar from "./q-3/Sidebar";
import MainContent from "./q-3/MainContent";
import Footer from "./q-3/Footer";
import { ThemeProvider } from "./q-3/ThemeContext";
import { CounterProvider } from "./counter app/CounterContext";
import Counter from "./counter app/Counter";
import { NotificationProvider } from "./q-4/NotificationContext";
import NotificationList from "./q-4/NotificationList";


function App() {
  return <>
        <NotificationProvider>
              <NotificationList/>
        </NotificationProvider>
  </>;
}

export default App;
