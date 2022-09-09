import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import {useAuth} from "../hooks/useAuth";

import Picker from 'emoji-picker-react';

const AddPostPage = () => {
    const [post, setPost] = useState('')

    const {isAdmin} = useAuth()

    const admin = isAdmin()

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

    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setPost(prev =>  prev + emojiObject.emoji )
        setShowPicker(false)
    };

    return (admin ?
        <div className="addPost">
            <div className="container">
               <div className='addPost__inner'>
                       <form className='addPost__form' onSubmit={handleSubmit}>
                           <h1>Write post</h1>
                           <div className='form__items'>
                               <textarea
                                   rows="40" cols="60"
                                   className='form__input'
                                   type="text"
                                   placeholder="write your post"
                                   value={post}
                                   onChange={e => setPost(e.target.value)}
                               />
                               <div className='form__actions'>
                                   <button className='form__btn'>Add</button>
                                   <img
                                       className='addPost__img' src="https://openmoji.org/data/color/svg/1F60A.svg"
                                       alt=''
                                       onClick={() => setShowPicker(val => !val)}
                                   />
                               </div>
                           </div>
                       </form>


                       <div>
                           <div>
                               {showPicker && <Picker onEmojiClick={onEmojiClick} />}
                           </div>
                       </div>
               </div>
            </div>
        </div>
            :
            <div className='container'>
                <div>U are not admin</div>
            </div>
    );
};

export default AddPostPage;