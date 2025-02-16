import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
    return(
        <>
        <h1>Hello from Dashboard Layout</h1>
        <Outlet />
        </>
    )
}

export default DashboardLayout;