import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import Upload from "./pages/Blogs/Upload";
import EachBlog from "./pages/Blogs/EachBlog";
import UpdateBlog from "./pages/Blogs/UpdateBlog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/upload' element={<Upload />} />
        <Route path='/blogs/:id' element={<EachBlog />} />
        <Route path='/update/:id' element={<UpdateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;