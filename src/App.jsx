import Navbar from "./components/Navbar";

const App = () => {

  const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <p>{publishableKey}</p>
      <p>hello world</p>
      {/* NAVBAR */}
      <Navbar />
      {/* BREADCRUMB */}
      {/* INTRODUCTION */}
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div>
  );
};

export default App;
