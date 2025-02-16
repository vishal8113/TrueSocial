import {useRoutes , Navigate} from "react-router-dom"
import { Suspense,lazy } from "react"

import DashboardLayout from "../layouts/dashboard"

import LoadingScreen from "../components/LoadingScreen"
import AuthLayout from "../layouts/authentication"

import { DEFAULT_PATH } from "../config"

const Loadable = (Component) => (props) => {
    return(
        <Suspense fallback={<LoadingScreen/>}>
            <Component {...props} />
        </Suspense>
    )
}

const Router = () => {
    return useRoutes([
        {
            path:"/auth",
            element: <AuthLayout/>,
            children:[
                {path:"login",element:<LoginPage/>},
                {path:"register",element:<RegisterPage/>},
                {path:"verify-otp",element:<VerifyOtpPage/>},
                {path:"reset-password",element:<ResetPasswordPage/>},
                {path:"new-password",element:<NewPasswordPage/>},
                {path:"create-profile",element:<CreateProfilePage/>}
            ]
        },
        {
            path:"/",
            element: <DashboardLayout/>,
            children:[
                {element: <Navigate to={DEFAULT_PATH} replace />, index: true},
                {path:"404",element:<InvalidPage/>},
                {path:"*",element:<Navigate to="/404" replace/>}
            ]
        },
        {
            path:"*",
            element: <Navigate to="/404" replace />
        }
    ])
}

const LoginPage = Loadable(
    lazy(() => import("../pages/authentication/LoginPage"))
);

const RegisterPage = Loadable(
    lazy(() => import("../pages/authentication/RegisterPage"))
);

const VerifyOtpPage = Loadable(
    lazy(() => import("../pages/authentication/VerifyOTPPage"))
);

const ResetPasswordPage = Loadable(
    lazy(() => import("../pages/authentication/ResetPasswordPage"))
);

const NewPasswordPage = Loadable(
    lazy(() => import("../pages/authentication/NewPasswordPage"))
);

const CreateProfilePage = Loadable(
    lazy(() => import("../pages/authentication/CreateProfilePage"))
);

const InvalidPage = Loadable(
    lazy(() => import("../pages/page404"))
)

export default Router;
