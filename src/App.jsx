import Main from "./components/sidebar/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
