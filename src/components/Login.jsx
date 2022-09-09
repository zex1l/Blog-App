import Form from "./Form";
import {useDispatch} from 'react-redux'
import {setUser} from '../store/slices/userSlices'
import { auth } from '../firebase/firebase'
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleLogin = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                })          
            )
        })
            .catch(console.error)
        navigate("/")
    }

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    );
};

export default Login;