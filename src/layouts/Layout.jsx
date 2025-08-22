// src/layout/Layout.jsx
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Topbar />
        <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
