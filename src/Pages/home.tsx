import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="ml-64 mt-16">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>This is the home page content.</p>
      <p>Visit Admin Dashboard</p>
      <Link className="border-b text-blue-600" to="/signup">
        Admin Dashboard
      </Link>
    </div>
  );
};

export default Home;
