import { ReactNode } from "react";
import "@/app/globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Home Page",
  description: "Template Home Page with Bootstrap",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-light">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
