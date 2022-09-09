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
        const postsCollectionRef = collection(db, 'posts')
        getDocs(postsCollectionRef)
            // Getting from fireStore data
            .then(res => {
                const postsData = res.docs.map(doc => ({
                    data: doc.data(), 
                    id: doc.id
                }))
                setPosts(postsData)
            })
            .catch(err => console.log(err))
    }
    
    return (

        <div className="posts">
            <div className='posts__header'>My Posts</div>
            <div className='posts__inner'>
                    {
                        posts.map((post, index) => {
                            return (
                                <div key={post.id} className='post__item'>
                                    <div className='post__info'>{index+1}: {post.data.post}</div>
                                </div>
                            )
                        })
                    }
            </div>

        </div>
    );
};

export default PostsList;