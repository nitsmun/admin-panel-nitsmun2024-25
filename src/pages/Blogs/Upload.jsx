import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { Toaster, toast } from "sonner";
const Upload = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [loading, setLoading] = useState("");
    const handleUpload = (e) => {
        e.preventDefault();

        async function upload() {
            setLoading("Loading...");
            try {
                const task = await axios.post(`${import.meta.env.VITE_API}/blog/add`, {
                    name: name.trim(), url: url.trim(), thumbnail: thumbnail.trim()
                });
                if (task) {
                    toast.success("Successfully uploaded!");
                    setLoading("");
                    navigate('/blogs');
                }
            }
            catch (err) {
                toast(err);
            }
        }
        upload();

    }
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link>
            {
                localStorage.getItem("email") ?
                    <form>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                        <FileBase64 type="file" multiple={false} onDone={({ base64 }) => {
                            setThumbnail(base64);
                        }} />
                        <button onClick={handleUpload}>Upload</button>
                        <h1>{loading}</h1>

                    </form> : <h1>You are not signed in!</h1>
            }
            <Toaster />
        </div>
    );
}

export default Upload;