import styles from "./Blogs.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, Toaster } from "sonner";
const BlogList = ({ data, loading, setLoading }) => {
    return (
        <div>
            {loading ? <h1>Loading....</h1> : null}
            <>
                <Link to='/blogs/upload'>Upload Blog</Link>
                {
                    data.map((item) => (
                        <Link to={`/blogs/${item.id}`}>
                            <img src={item.thumbnail} alt={item.name} />
                            <h1>{item.name}</h1>
                        </Link>
                    ))
                }
            </>
        </div>
    );
}

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await axios.get(`${import.meta.env.VITE_API}/blog/read`);
                if (data) {
                    setBlogs(data.data);
                    setLoading(false);
                }
            }
            catch (err) {
                toast.error(err);
            }
        }

        fetchData();
    }, [blogs]);
    return (
        <div className={styles.blogs}>
            <Link to='/'>Home</Link>
            {
                localStorage.getItem("email") ?
                    <div className={styles.innerCont}>
                        {!blogs ?
                            <h1 className={styles.h1}>
                                <p className={styles.p}>You have not uploaded any blogs yet</p>
                                <Link to='/blogs/upload'>Upload Blog</Link>
                            </h1> : <BlogList data={blogs} loading={loading} setLoading={setLoading} />
                        }
                    </div>
                    : <h1>Not Signed in</h1>
            }
            <Toaster />
        </div>
    );
}
export default Blogs;