import postCardCSS from "./PostCard.module.css"
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Time from "../time/Time"

function PostCard({ title, body, tags, upvotes, time, id }) {

    const navigate = useNavigate()



    const charLimit = 200

    const [preview, setPreview] = useState('')

    const clickPost =() => {
        navigate(`/posts/${id}`)
    }

    useEffect(() => {
        let string = body.substring(0, charLimit)

        if (string.length != body.length) {
            string += '...'
        }
        setPreview(string)

    }, [])

    return (
        <button onClick={clickPost} className={postCardCSS.container}>
            <Time time={time} />
            <h3 className={postCardCSS.title}>{title}</h3>
            <p>{preview}</p>
            <p>{tags}</p>
            <p>{upvotes} upvotes</p>
        </button>
    )
}

export default PostCard