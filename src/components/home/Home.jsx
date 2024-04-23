import PostCard from "../post-card/PostCard"
import homeCSS from "./Home.module.css"
import { supabase } from "../../client"
import { useEffect, useState } from "react"

function Home() {

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
            const sortedNew = data.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
            setData(sortedNew)
        }
        fetchPosts()
    }, [])


    return (
        <div className={homeCSS.container}>
            <div className={homeCSS.filters}>
                <h3>Filters:</h3>
                <button className={newBtnColor} onClick={sortByNew}>New</button>
                <button className={topBtnColor} onClick={sortByTop}>Top</button>
            </div>
            <div className={homeCSS.cards}>
                {data && Object.entries(data).map(([post]) => (
                    <PostCard 
                        key={data[post].id}
                        title={data[post].title}
                        body={data[post].body}
                        tags={data[post].tags}
                        upvotes={data[post].upvotes}
                        time={data[post].created_at}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home