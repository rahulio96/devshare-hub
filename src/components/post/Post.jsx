import { useParams } from "react-router-dom"
import { supabase } from "../../client"
import { useState, useEffect } from "react"
import postCardCSS from "../post-card/PostCard.module.css"
import managePostCSS from "../manage-post/ManagePost.module.css"
import postCSS from "./Post.module.css"
import Time from "../time/Time"
import Comments from "../comments/Comments"
import { useNavigate } from "react-router-dom"

function Post() {
    let params = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState(null)
    const [comments, setComments] = useState(null)

    const [isEdit, setIsEdit] = useState(false)
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')
    const [img, setImg] = useState('')
    const [link, setLink] = useState('')

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
                setBody(data[0]?.body || '')
                setTitle(data[0]?.title || '')
                setTags(data[0]?.tags || '')
                setImg(data[0]?.image || '')
                setLink(data[0]?.link || '')
        }
        fetchPost()
    }, [params.id])

    const updatePost = async () => {
        await supabase
          .from('posts')
          .update({
            title: title, body: body, tags: tags, link: link,
            image: img
            })
          .eq('id', params.id)
    }   

    const saveEdit = () => {
        if (!isEdit) {
            setIsEdit(true)
        } else {
            setIsEdit(false)
            updatePost()
            setTimeout(() => window.location.reload(), 500)
        }
    }

    return (
        <>
        {data && <div className={`${managePostCSS.center} ${postCSS.center}`}>
            <div className={postCardCSS.container}>
                <div className={postCSS.header}>
                    <Time time={data.created_at} />
                    <div className={postCSS.manage}>
                        <button onClick={saveEdit}>{isEdit ? `Save` : `Edit`}</button>
                        { isEdit ? <button onClick={() => setIsEdit(false)}>Cancel</button> : <button>Delete</button>}
                    </div>
                </div>
                {isEdit ? <div className={postCSS.edit}><textarea placeholder="Edit title" onChange={(e) => setTitle(e.target.value)} value={title}></textarea> 
                <textarea placeholder="Edit body" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                <textarea placeholder="Edit tags" onChange={(e) => setTags(e.target.value)} value={tags}></textarea>
                <textarea placeholder="Edit image URL" onChange={(e) => setImg(e.target.value)} value={img}></textarea>
                <textarea  placeholder="Edit project URL" onChange={(e) => setLink(e.target.value)} value={link}></textarea></div> : 

                <><h2>{data.title}</h2>
                <p>{data.body}</p>
                <p>Tags: {data.tags}</p>
                <img src={data.image} /></>}

                <div>
                    <div className={postCSS.regularButtons}>
                        <div className={postCSS.upvotes}>
                            <button className={postCSS.upvote}>&uarr;</button>
                            <p>{data.upvotes}</p>
                            <button className={postCSS.downvote}>&darr;</button>
                        </div>
                        {data.link ? <button>Project Link</button> : <></>}
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