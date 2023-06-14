import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUpForm></SignUpForm>,
    },
    {
      path: "/login",
      element: <LoginForm></LoginForm>,
    },
  ]);
  return (
    <div className="min-h-screen  bg-blue-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
