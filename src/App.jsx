import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Body from "./Components/Body";
import { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Watch from "./Components/Watch";
export const context = createContext({});
function App() {
  const [isSidebar, setIsSideBar] = useState(false);
  const sidebarHandler = () => {
    setIsSideBar(!isSidebar);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "watch", element: <Watch /> },
      ],
    },
  ]);

  return (
    <>
      <div>
        <context.Provider value={{ isSidebar, sidebarHandler }}>
          <RouterProvider router={router} />
        </context.Provider>
      </div>
    </>
  );
}

export default App;
