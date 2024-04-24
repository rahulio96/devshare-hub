import PostCard from "../post-card/PostCard"
import homeCSS from "./Home.module.css"
import { supabase } from "../../client"
import { useEffect, useState } from "react"

function Home({ search }) {

    const [data, setData] = useState()

    const [newBtnColor, setNewBtnColor] = useState(homeCSS.clicked)
    const [topBtnColor, setTopBtnColor] = useState()

    const sortByTop = () => {
        setData([...data].sort((a, b) => b.upvotes - a.upvotes))
        setTopBtnColor(homeCSS.clicked)
        setNewBtnColor(homeCSS)
    }

    const sortByNew = () => {
        setData([...data].sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)))
        setNewBtnColor(homeCSS.clicked)
        setTopBtnColor()
    }

    useEffect(() => {
        const fetchPosts = async() => {
            const { data } = await supabase
                .from('posts')
                .select()
            let sortedNew = data.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
            const filtered = sortedNew.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
            setData(filtered)
        }
        fetchPosts()
    }, [search])

    return (
        <div className={homeCSS.container}>
            <div className={homeCSS.filters}>
                <h3>Sort:</h3>
                <button className={newBtnColor} onClick={sortByNew}>New</button>
                <button className={topBtnColor} onClick={sortByTop}>Top</button>
            </div>
            <div className={homeCSS.cards}>
                {data && data.length != 0 ? (data.map((post) => (
                    <PostCard 
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        tags={post.tags}
                        upvotes={post.upvotes}
                        time={post.created_at}
                        link={post.link}
                    />
                ))) : <p>No results found {`:(`}</p>}
            </div>
        </div>
    )
}

export default Home