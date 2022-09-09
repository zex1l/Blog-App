import { Link } from "react-router-dom";
import Login from "../components/Login";
import {useAuth} from '../hooks/useAuth'

const AuthPage = () => {
    const {isAuth} = useAuth()

    return (
        <>
            <div className="container">
                <Login/>
                <div className="auth__register">
                    <span>if u dont have account, create here</span><br/>
                    <Link to="/register">create account</Link>
                </div>
            </div>
        </>
    );
};

export default AuthPage;