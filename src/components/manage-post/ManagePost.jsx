import managePostCSS from './ManagePost.module.css'
import { useState } from 'react'
import { supabase } from '../../client'
import { useNavigate } from 'react-router-dom'

function ManagePost({ yesBtn, noBtn, isCreate, title, body, tags, link }) {

    const navigate = useNavigate()

    const [newTitle, setNewTitle] = useState(title)
    const [newBody, setNewBody] = useState(body)
    const [newTags, setNewTags] = useState(tags)
    const [newLink, setNewLink] = useState(link)

    const [titleBorder, setTitleBorder] = useState(managePostCSS.title)
    const [bodyBorder, setBodyBorder] = useState(managePostCSS.textarea)

    const changeTitle = (e) => {
        setNewTitle(e.target.value)
    }

    const changeBody = (e) => {
        setNewBody(e.target.value)
    }

    const changeTags = (e) => {
        setNewTags(e.target.value)
    }

    const changeLinks = (e) => {
        setNewLink(e.target.value)
    }

    const create = async (e) => {
        e.preventDefault()

        if (newTitle != '' && newBody != '') {         
            await supabase
            .from('posts')
            .insert({
                title: newTitle, body: newBody, tags: newTags, link: newLink
                })
            .select();

            navigate('/') 
        } 
        if (newBody == '') {
            setBodyBorder(`${bodyBorder} ${managePostCSS.red}`)
        } else {
            setBodyBorder(managePostCSS.textarea)
        }
        if (newTitle == '') {
            setTitleBorder(`${titleBorder} ${managePostCSS.red}`)
        } else {
            setTitleBorder(managePostCSS.title)
        }
    }

    const clear = () => {
        setNewLink('')
        setNewTitle('')
        setNewBody('')
        setNewTags('')
        setBodyBorder(managePostCSS.textarea)
        setTitleBorder(managePostCSS.title)
    }

    return (
        <div className={managePostCSS.center}>
        <div className={managePostCSS.container}>
            <h1>{isCreate ? `Create` : `Edit`} Post</h1>

            <div className={managePostCSS.mainText}>
                <input 
                    className={titleBorder}
                    type='text' placeholder='Title*' 
                    value={newTitle} onChange={changeTitle}>
                </input>

                <textarea 
                    className={bodyBorder}
                    placeholder='Body*' value={newBody} 
                    onChange={changeBody}>
                </textarea>

                <h2>{isCreate ? `Add` : `Edit`} Tags</h2>

                <input 
                    className={managePostCSS.input}
                    type='text' 
                    placeholder='ex. React, Figma, AWS'
                    value={newTags} 
                    onChange={changeTags}>
                </input>

                <h2>{isCreate ? `Add` : `Edit`} Image/Gif URL</h2>
                <input 
                    className={managePostCSS.input}
                    type='text' 
                    placeholder='ex. https://imgur.com/...' 
                    value={newLink} 
                    onChange={changeLinks}>
                </input>
            </div>

            <div className={managePostCSS.btnContainer}>
                {isCreate ? <button onClick={create} className={managePostCSS.post}>{yesBtn}</button>
                    : <button className={managePostCSS.post}>{yesBtn}</button>}
                {isCreate ? <button onClick={clear} className={managePostCSS.clear}>{noBtn}</button>
                : <button className={managePostCSS.clear}>{noBtn}</button>}
            </div>
        </div>
        </div>
    )
}

export default ManagePost