import { useEffect, useState } from "react"
import { MainLayout } from "../components/layout"
import { IBlog } from "../types/entity";
import { Link } from "react-router-dom";

export const Home = () => {
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                setBlogs(data);
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, []);

    return <MainLayout>
        <h1>Blogs</h1>
        <div>
            {blogs.map((blog) => {
                return <Link to={`/${blog.id}`} key={blog.id} style={{ display: "block" }}>{blog.title}</Link>
            })}
        </div>
    </MainLayout>
}
