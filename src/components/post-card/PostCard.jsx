import postCardCSS from "./PostCard.module.css"

function PostCard() {
    return (
        <div className={postCardCSS.container}>
            <p>Posted 21 hours ago</p>
            <h3>Check out my new project!</h3>
            <p>11 upvotes</p>
        </div>
    )
}

export default PostCard