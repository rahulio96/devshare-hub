import { useState } from "react"
import commentsCSS from "./Comments.module.css"
import { supabase } from "../../client"

function Comments({ commentsArr, id }) {

    const [comment, setComment] = useState('')

    const addComment = async () => {
        commentsArr.push(comment)

        await supabase
          .from('posts')
          .update({
            comments: commentsArr.toString()
            })
          .eq('id', id)
          
        setTimeout(() => window.location.reload(), 500)
    }

    return (
        <div className={commentsCSS.container}>
            <h4>Comments</h4>
            <div className={commentsCSS.commentContainer}>
                <div className={commentsCSS.addComment}>

                    <textarea 
                        className={commentsCSS.enterComment} 
                        onChange={(e) => setComment(e.target.value)}
                        value={comment} 
                        placeholder="Add a comment">    
                    </textarea>

                    <div className={commentsCSS.buttons}>
                        <button onClick={() => setComment('')}>Clear</button>
                        <button onClick={addComment}>Comment</button>
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