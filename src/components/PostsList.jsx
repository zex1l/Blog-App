import { collection,doc,getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";

const PostsList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        console.log(posts)
    }, [posts])

    const getPosts = () => {
        const postsCollictionRef = collection(db, 'posts')
        getDocs(postsCollictionRef)
            // Getting from fireStore data
            .then(responce => {
                const postsData = responce.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id
                }))
                setPosts(postsData)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div className="posts">
            Posts Lists
            <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}>{post.data.post}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default PostsList;