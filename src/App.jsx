import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Homepage from "./Components/Homepage";
import Banner from "./Components/Banner";
import Catagories from "./Components/Catagories";
import Footer from "./Components/Footer";
import SpecialDishes from "./Components/SpecialDishes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Homepage />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Banner></Banner>
      <Catagories></Catagories>
      <SpecialDishes></SpecialDishes>
      <Footer></Footer>
    </div>
  );
}

export default App;
