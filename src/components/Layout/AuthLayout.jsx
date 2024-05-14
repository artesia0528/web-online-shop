/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


export default function AuthLayout(props) {
    const {children, title, type} = props
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="w-full max-w-xs">
                <h1 className="mb-2 text-3xl font-bold text-blue-600">{title}</h1>
                <p className="mb-8 font-medium text-slate-500">
                Welcome, please enter your details
                </p>
                {children}
                <Navigation type={type}/>
            </div>
        </div>
    )
}

const Navigation = ({type}) => { 
    if(type === "login"){
        return (
            <p className="mt-5 text-sm text-center">
                Don&apos;t have an account?{" "}
                <Link className="font-bold text-blue-500" to="/register">
                    Register
                </Link>
            </p>
        )
    } else {
        return (
            <p className="mt-5 text-sm text-center">
                Already have an account?{" "}
                <Link className="font-bold text-blue-500" to="/login">
                    Login
                </Link>
            </p>
        )
    }
 }
