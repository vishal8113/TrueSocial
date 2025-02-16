import { Outlet } from "react-router-dom";
const AuthLayout = () => {
    return(
        <>
        <h1>Hello from Auth Layout</h1>
        <Outlet />
        </>
    )
}

export default AuthLayout;