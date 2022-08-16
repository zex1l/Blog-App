import {useDispatch} from 'react-redux'
import Form from './Form'
import {setUser} from '../store/slices/userSlices'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase/firebase'

const SignUp = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
            })
            .catch(console.error)

        navigate("/")
    }

    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    );
};

export default SignUp;