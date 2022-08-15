import Form from "./Form";
import {useDispatch} from 'react-redux'
import {setUser} from '../store/slices/userSlices'
import { auth } from '../firebase/firebase'

import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch()

    const handleLogin = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    );
};

export default Login;