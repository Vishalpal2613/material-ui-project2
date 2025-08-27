import Navbar from "./components/Navbar";
import DrawerComponent from "./components/DrawerComponent";

const linksArray = ["Products", "Services", "Overview", "Contact Us"]
function App() {
  return (
    <div>
      <Navbar links={linksArray} />
      <DrawerComponent />
    </div>
  );
};

export default App;