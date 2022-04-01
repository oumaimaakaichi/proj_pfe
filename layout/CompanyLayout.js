import CompanyNavbar from "../components/CompanyNavbar";

const CompanyLayout = (Component) => (props) => {
  return (
    <>
      <CompanyNavbar />
      <main className="bg-white relative overflow-y-auto overflow-x-hidden">
        <Component {...props} />
      </main>
    </>
  );
};

export default CompanyLayout;
