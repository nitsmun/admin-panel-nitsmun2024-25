import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { toast, Toaster } from "sonner";

const UpdateBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [loading, setLoading] = useState("");
    const handleUpdate = (e) => {
        e.preventDefault();
        setLoading("Loading");
        async function upd() {
            try {
                const upd = await axios.patch(`${import.meta.env.VITE_API}/blog/update/${id}`, {
                    name: name ? name.trim() : undefined, url: url ? url.trim() : undefined, thumbnail: thumbnail ? thumbnail.trim() : undefined
                });
                if (upd) {
                    toast.success("Successfully updated!!");
                    setLoading("");
                    navigate(`/blogs/${id}`);
                }
            }
            catch (err) {
                toast.error(err);
            }
        }
        upd();
    }
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="text" onChange={(e) => setUrl(e.target.value)} value={url} />
                <FileBase64 type="file" multiple={false} onDone={({ base64 }) => {
                    setThumbnail(base64);
                }} />
                <button onClick={handleUpdate}>Update</button>
                <h1>{loading}</h1>
                <Toaster />
            </form>
        </>
    );
}
export default UpdateBlog;