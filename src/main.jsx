import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Home from './Components/Home.jsx';
import AboutUs from './Components/About.jsx';
import RecipeDetail from './Components/RecipeDetail.jsx';
import ErrorPage from './Components/Error.jsx';


const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/recipe/:recipeId",
      element: <RecipeDetail/> 
    },
    {
      path:"/about",
      element: <AboutUs/>
    }
  
  ]
  },
])

root.render(<RouterProvider router={appRouter} />);
