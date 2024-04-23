import PostCard from "../post-card/PostCard"
import homeCSS from "./Home.module.css"
import { supabase } from "../../client"
import { useEffect, useState } from "react"

function Home() {

    const [data, setData] = useState()

    useEffect(() => {
        const fetchPosts = async() => {
            const { data } = await supabase
                .from('posts')
                .select()
            //console.log(data[0]title)
            setData(data)
        }
        fetchPosts()
    }, [])


    return (
        <div className={homeCSS.container}>
            <div className={homeCSS.filters}>
                <h3>Filters:</h3>
                <button>New</button>
                <button>Top</button>
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