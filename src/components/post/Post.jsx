import { useParams } from "react-router-dom"
import { supabase } from "../../client"
import { useState, useEffect } from "react"

function Post() {
    let params = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from('posts')
                .select()
                .eq('id', params.id)

                setData(data[0])
        }
        fetchPost()
    }, [params.id])


    return (
        <>
            <div>{data && data.title}</div>
        </>
    )
}

export default Post