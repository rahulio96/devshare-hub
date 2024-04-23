import PostCard from "../post-card/PostCard"
import homeCSS from "./Home.module.css"

function Home() {
    return (
        <div className={homeCSS.container}>
            <div className={homeCSS.filters}>
                <h3>Filters:</h3>
                <button>New</button>
                <button>Top</button>
            </div>
            <div className={homeCSS.cards}>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}

export default Home