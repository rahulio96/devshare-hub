import postCardCSS from "./PostCard.module.css"
import { useEffect, useState } from 'react'

function PostCard({ title, body, tags, upvotes, time }) {

    const [diffTime, setDiffTime] = useState()

    const [isDay, setIsDay] = useState(true)

    const charLimit = 200

    const [preview, setPreview] = useState('')

    useEffect(() => {
        const curDate = new Date()
        const date = new Date(Date.parse(time));
        let diff = (curDate - date)/ (1000 * 60 * 60 * 24)
        if (diff < 1) {
            diff *= 24
            setIsDay(false)
        }
        setDiffTime(Math.ceil(diff))

        let string = body.substring(0, charLimit)
        string += '...'
        setPreview(string)

    }, [])

    return (
        <div className={postCardCSS.container}>
            { isDay ? <p>{diffTime} days ago</p> : <p>{diffTime} hours ago</p>}
            <h3>{title}</h3>
            <p>{preview}</p>
            <p>{tags}</p>
            <p>{upvotes} upvotes</p>
        </div>
    )
}

export default PostCard