import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DOMNER | Discover Cambodia",
  description:
    "Discover Cambodia's destinations, culture, history and hidden gems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
