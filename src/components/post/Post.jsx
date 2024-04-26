import { useParams } from "react-router-dom"
import { supabase } from "../../client"
import { useState, useEffect } from "react"
import postCardCSS from "../post-card/PostCard.module.css"
import managePostCSS from "../manage-post/ManagePost.module.css"
import postCSS from "./Post.module.css"
import Time from "../time/Time"
import Comments from "../comments/Comments"

function Post() {
    let params = useParams()

    const [data, setData] = useState(null)
    const [comments, setComments] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from('posts')
                .select()
                .eq('id', params.id)

                setData(data[0])

                if (data[0].comments) {
                    setComments(data[0].comments.split(", "))
                }
        }
        fetchPost()
    }, [params.id])


    return (
        <>
        {data && <div className={`${managePostCSS.center} ${postCSS.center}`}>
            <div className={postCardCSS.container}>
                <div className={postCSS.header}>
                    <Time time={data.created_at} />
                    <div className={postCSS.manage}>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
                <p>Tags: {data.tags}</p>
                <img src={data.image} />
                <div>
                    <div className={postCSS.regularButtons}>
                        <div className={postCSS.upvotes}>
                            <button className={postCSS.upvote}>&uarr;</button>
                            <p>{data.upvotes}</p>
                            <button className={postCSS.downvote}>&darr;</button>
                        </div>
                        <button>Project Link</button>
                    </div>
                </div>
            </div>

            <div className={postCSS.comments}>
                <Comments commentsArr={comments} />
            </div>


        </div>}
        </>
    )
}

export default Post