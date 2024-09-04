import { useParams } from "react-router-dom"
import { MainLayout } from "../components/layout"
import { useEffect, useState } from "react";
import { IBlog } from "../types/entity";


export default function Blog() {
    const [blog, setBlog] = useState<IBlog | null> (null)

    const params = useParams();

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
                const data = await res.json();
                setBlog(data);
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [params]);


    return <MainLayout>
        <h1>{blog?.title}</h1>
        <p>{blog?.body}</p>
    </MainLayout>
}

