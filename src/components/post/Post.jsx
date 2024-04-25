import { useParams } from "react-router-dom"
import { supabase } from "../../client"
import { useState, useEffect } from "react"
import postCardCSS from "../post-card/PostCard.module.css"
import managePostCSS from "../manage-post/ManagePost.module.css"
import postCSS from "./Post.module.css"
import Time from "../time/Time"

function Post() {
    let params = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from('posts')
                .select()
                .eq('id', params.id)

                setData(data[0])
        }
        fetchPost()
    }, [params.id])


    return (
        <div className={managePostCSS.center}>{data && 
            <div className={postCardCSS.container}>
                <Time time={data.created_at} />
                <h2>{data.title}</h2>
                <p>{data.body}</p>
                <p>Tags: {data.tags}</p>
                <p>Link: <a href={data.link}>{data.link}</a></p> 
            </div>}
        </div>
    )
}

export default Post