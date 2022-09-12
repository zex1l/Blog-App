import {useEffect, useState} from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import {useAuth} from "../hooks/useAuth";

const AddPostPage = () => {
    const [post, setPost] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const {email} = useAuth()

    const admins = ['abc@gmail.com']

    useEffect(() => {
        setIsAdmin(admins.includes(email))
    }, [])


    const handleSubmit = async(e) => {
        e.preventDefault()
        if(post !== '')
        {
            await addDoc(collection (db, "posts"), {
                post,
            })
            setPost('')
        }
    }

    return (isAdmin ?
        <div className="addPost">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="write your post"
                        value={post}
                        onChange={e => setPost(e.target.value)}    
                    />
                    <button>Add</button>
                </form>
            </div>
        </div>
            :
            <div className='container'>
                <div>U are not admin</div>
            </div>
    );
};

export default AddPostPage;