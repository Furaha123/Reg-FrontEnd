import NavBar from "@/components/shared/NavBar";
import SideBar from "@/components/shared/SideBar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <main className="h-screen flex overflow-hidden ">
      <aside>
        <SideBar />
      </aside>
      <section className="flex-1 h-screen bg-ground">
        <NavBar />
        <div className="overflow-y-auto h-[80vh] ">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default AdminLayout;
