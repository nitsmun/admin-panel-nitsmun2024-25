import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";

const EachBlog = () => {
    const { id } = useParams();
    const [val, setVal] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await axios.get(`${import.meta.env.VITE_API}/blog/read`);
                if (data) {
                    setVal(data.data.filter(function (item) {
                        return item.id === id
                    })[0]);
                    setLoading(false);
                }
            }
            catch (err) {
                toast.error(err);
            }
        }
        fetchData();
    }, [val]);

    const handleDelete = (e) => {
        e.preventDefault();
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (confirmDelete) {
            async function del() {
                try {
                    const del = await axios.delete(`${import.meta.env.VITE_API}/blog/delete/${id}`);
                    if (del) {
                        toast.success("Blog has been successfully deleted!");
                        navigate('/blogs');
                    }
                }
                catch (err) {
                    toast.error(err);
                }
            }
            del();
        }
    }

    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link>
            {loading ?
                <h1>Loading....</h1> :
                <>
                    {val.name}
                    Visit:<a href={val.url} target="_blank">Blog</a>
                    <img src={val.thumbnail} />
                    <button onClick={handleDelete}>Delete Blog</button>
                    <Link to={`/update/${id}`}>Update Blog</Link>
                    <Toaster />
                </>
            }
        </div>
    );
}

export default EachBlog;