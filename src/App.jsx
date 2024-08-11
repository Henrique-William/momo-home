import Home from "./screen/home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />
  }
])

function App() {
  return (
    <div className="font-poppins max-w-full text-black text-base overflow">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
