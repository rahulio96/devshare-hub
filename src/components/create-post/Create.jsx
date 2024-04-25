import createCSS from './Create.module.css'

function Create() {
    return (

        <div className={createCSS.container}>
            <h1>Create Post</h1>

            <div className={createCSS.mainText}>
                <input type='text' placeholder='Title*'></input>
                <textarea placeholder='Body*'></textarea>
                <h2>Add Tags</h2>
                <input type='text' placeholder='ex: React, Figma, AWS'></input>
                <h2>Add Project Link</h2>
                <input type='text' placeholder='GitHub or Deployed Link'></input>
            </div>
            <div className={createCSS.btnContainer}>
                <button className={createCSS.post}>Post</button>
                <button className={createCSS.clear}>Clear</button> 
            </div>
        </div>
    )
}

export default Create