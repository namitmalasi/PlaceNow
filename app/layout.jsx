import "@/assets/styles/globals.css";

export const metadata = {
  title: "Rentals",
  keywords: "rental, property, real estate",
  description: "Find the perfect rental property to live in",
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
