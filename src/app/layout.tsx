import React from "react";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <Header />
    
      <main className="flex-grow">{children}</main>

      <Footer />

      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#014e3a]/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default Layout;
