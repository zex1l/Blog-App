import {useAuth} from "../hooks/useAuth"
import { removeUser } from "../store/slices/userSlices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const {email} = useAuth()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(removeUser({
            email: null,
            id: null,
            token: null
        }))
        navigate("/auth")
    }

    return (
        <div className="container">
            Your profile  {email}

            <div className="profile__logout">
                <button onClick={handleLogout} className="btn__logout">Log out</button>
            </div>
        </div>
    );
};

export default Profile;