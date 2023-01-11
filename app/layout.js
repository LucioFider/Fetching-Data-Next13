import "../styles/globals.css";
import Navbar from "./shared/navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-gray-900 max-w-6xl mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
