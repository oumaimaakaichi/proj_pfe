import Footer from "../components/Footer";
import NavbarEntreprise from "../components/NavbarEntreprise";

const Layout = (Component) => (props) => {
  return (
    <>
      <NavbarEntreprise />
      <main className="mx-center relative overflow-y-auto overflow-x-hidden p-10 lg:ml-64">
        <Component {...props} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
