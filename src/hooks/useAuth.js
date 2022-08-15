import { useSelector } from 'react-redux'

export const useSelector = () => {
    const {email, token, id} = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}