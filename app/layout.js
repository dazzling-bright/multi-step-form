"use client";

import Sidebar from "@/app/components/Sidebar";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store/store";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en" className="font-sans">
        <body className="h-screen flex flex-col md:flex-row justify-center items-center md:bg-light-blue">
          <section className=" md:rounded-3xl md:w-[80%] flex flex-col md:flex-row overflow-hidden bg-white md:p-4">
            <Sidebar />
            <main className="w-full text-marine-blue">{children}</main>
          </section>
        </body>
      </html>
    </Provider>
  );
}
