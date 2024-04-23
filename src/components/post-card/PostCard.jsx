import postCardCSS from "./PostCard.module.css"
import { useEffect, useState } from 'react'

function PostCard({ title, body, tags, upvotes, time }) {

    const [diffTime, setDiffTime] = useState()
    const [timeUnit, setTimeUnit] = useState('days')

    const charLimit = 200

    const [preview, setPreview] = useState('')

    useEffect(() => {
        const curDate = new Date()
        const date = new Date(Date.parse(time));
        let diff = (curDate - date)/ (1000 * 60 * 60 * 24) // days
        if (diff < 1) {
            diff *= 24 // hours

            if (diff < 1) {
                diff *= 60 // minutes

                if (Math.floor(diff) == 1) {
                    setTimeUnit('minute')
                } else {
                    setTimeUnit('minutes')
                }

            } else if (Math.floor(diff) == 1) {
                setTimeUnit('hour')
            } else {
                setTimeUnit('hours')
            }

        } else if (Math.floor(diff) == 1) {
            setTimeUnit('day')
        } else {
            setTimeUnit('days')
        }
        
        setDiffTime(Math.floor(diff))

        let string = body.substring(0, charLimit)
        string += '...'
        setPreview(string)

    }, [])

    return (
        <div className={postCardCSS.container}>
            <p>{diffTime} {timeUnit} ago</p>
            <h3>{title}</h3>
            <p>{preview}</p>
            <p>{tags}</p>
            <p>{upvotes} upvotes</p>
        </div>
    )
}

export default PostCard