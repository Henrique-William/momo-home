import Home from "./screen/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./screen/signin";
import Signup from "./screen/signup";
import NotFound404 from "./screen/notFound404";

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound404/>
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path:'/signin',
    element: <Signin/>
  },
  {
    path: '/signup',
    element: <Signup/>
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
