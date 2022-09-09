import { useSelector } from 'react-redux'

export const useAuth = () => {
    const {email, token, id} = useSelector(state => state.user)

    const admin = ["abc@gmail.com"]

    const isAdmin = () => {
        return admin.includes(email)
    }

    return {
        isAuth: !!email,
        email,
        token,
        id,
        isAdmin
    }
}