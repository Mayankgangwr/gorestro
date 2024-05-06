import { Outlet } from "react-router-dom";
import { Login, SignUp } from "./Pages";

export default function App() {
  return (
    <>
      <header>Hello</header>
      <Outlet />
    </>
  )
}

