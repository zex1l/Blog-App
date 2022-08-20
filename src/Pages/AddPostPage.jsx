import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const AddPostPage = () => {
    const [post, setPost] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(post !== '')
        {
            await addDoc(collection(db, "posts"), {
                post,
            })
            setPost('')
        }
    }

    return (
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
    );
};

export default AddPostPage;