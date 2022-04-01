import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = (Component) => (props) => {
  return (
    <>
      <Navbar />
      <main className="mx-center bg-white relative overflow-y-auto overflow-x-hidden lg:ml-64">
        <Component {...props} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
