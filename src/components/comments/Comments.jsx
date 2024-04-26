import { useState } from "react"
import commentsCSS from "./Comments.module.css"

function Comments({ commentsArr }) {
    return (
        <div className={commentsCSS.container}>
            <h4>Comments</h4>
            <div className={commentsCSS.commentContainer}>
                <div className={commentsCSS.addComment}>
                    <textarea className={commentsCSS.enterComment} placeholder="Add a comment"></textarea>
                    <div className={commentsCSS.buttons}>
                        <button>Cancel</button>
                        <button>Comment</button>
                    </div>
                </div>
                <hr></hr>
                {commentsArr && commentsArr.map((comment, i) => (
                    <p key={i} className={commentsCSS.userComment}>User commented: {comment}</p>
                ))}
            </div>
        </div>
    )

}

export default Comments