import { useParams } from "react-router-dom"
import { supabase } from "../../client"
import { useState, useEffect } from "react"
import postCardCSS from "../post-card/PostCard.module.css"
import managePostCSS from "../manage-post/ManagePost.module.css"
import postCSS from "./Post.module.css"
import Time from "../time/Time"
import Comments from "../comments/Comments"
import { useNavigate } from "react-router-dom"
import Spinner from "../spinner/Spinner"

function Post() {
    let params = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState(null)
    const [comments, setComments] = useState([])

    const [isEdit, setIsEdit] = useState(false)
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')
    const [img, setImg] = useState('')
    const [link, setLink] = useState('')

    const [upvote, setUpvote] = useState(0)
    let curUpvote = upvote

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from('posts')
                .select()
                .eq('id', params.id)

                setData(data[0])

                if (data[0].comments) {
                    setComments(data[0].comments.split(","))
                }
                setBody(data[0]?.body || '')
                setTitle(data[0]?.title || '')
                setTags(data[0]?.tags || '')
                setImg(data[0]?.image || '')
                setLink(data[0]?.link || '')
                setUpvote(data[0].upvotes)
        }
        fetchPost()
    }, [params.id])

    const updatePost = async () => {
        await supabase
          .from('posts')
          .update({
            title: title, body: body, tags: tags, link: link,
            image: img, upvotes: upvote
            })
          .eq('id', params.id)
    }

    const updateVote = async () => {
        await supabase
        .from('posts')
        .update({
            upvotes: curUpvote
          })
        .eq('id', params.id)
    }

    const deletePost = async () => {
        await supabase
            .from('posts')
            .delete()
            .eq('id', params.id);

        setTimeout(() => navigate('/'), 200)
    }
    
    const addUpvote = () => {
        setUpvote(curUpvote+=1)
        updateVote()
    }

    const saveEdit = () => {
        if (!isEdit) {
            setIsEdit(true)
        } else {
            setIsEdit(false)
            updatePost()
            setTimeout(() => window.location.reload(), 200)
        }
    }

    return (
        <>
        {data ? <div className={`${managePostCSS.center} ${postCSS.center}`}>
            <div className={postCardCSS.container}>
                <div className={postCSS.header}>
                    {isEdit ? <button onClick={deletePost} className={postCSS.delete}>Delete</button> : <Time time={data.created_at} />}
                    <div className={postCSS.manage}>
                        <button onClick={saveEdit}>{isEdit ? `Save` : `Edit`}</button>
                        {isEdit ? <button onClick={() => setIsEdit(false)}>Cancel</button> : <></>}
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
                            <button onClick={addUpvote} className={postCSS.upvote}>&uarr;</button>
                            <p>{upvote}</p>
                            <button className={postCSS.downvote}>&darr;</button>
                        </div>
                        {data.link ? <button onClick={() => window.location.href = `${link}`}>Project Link</button> : <></>}
                    </div>
                </div>
            </div>

            <div className={postCSS.comments}>
                <Comments commentsArr={comments} id={params.id}/>
            </div>


        </div> : <Spinner />}
        </>
    )
}

export default Post