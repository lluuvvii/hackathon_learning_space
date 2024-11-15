import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Home Page",
  description: "Template Home Page with Bootstrap",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
