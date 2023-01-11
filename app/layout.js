import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />

      <body>
        <h1>Dashboard</h1>
        {children}
      </body>
    </html>
  );
}
