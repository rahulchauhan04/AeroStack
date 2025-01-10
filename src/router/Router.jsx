//Router......................
import { BrowserRouter, Route, Routes } from "react-router-dom";


//Componentes..................
import Footer from "../components/Footer";
import Header from "../components/Header";




//Pages..................
import Home from '../pages/Home';
import Authors from '../pages/Authors';
import AuthorPost from '../pages/AuthorPost';
import CategoryPost from '../pages/CategoryPost';
import CreatePosts from '../pages/CreatePosts';
import Dashboard from '../pages/Dashboard';
import EditPost from '../pages/EditPost';
import DeletePost from '../pages/DeletePost';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import PostDetail from '../pages/PostDetail';
import Register from '../pages/Register';
import UserProfile from '../pages/UserProfile';

const Router = () => {
  return (
     <>   
          <BrowserRouter>
               <Header />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/authors" element={<Authors />} />
                    <Route path="/posts/user/:id" element={<AuthorPost />} />
                    <Route path="/posts/categories/:category" element={<CategoryPost />} />
                    <Route path="/create" element={<CreatePosts />} />
                    <Route path="/myposts/:id" element={<Dashboard />} />
                    <Route path="/posts/:id/edit" element={<EditPost />} />
                    <Route path="//posts/:id/delete" element={<DeletePost />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile/:id" element={<UserProfile />} />
                    <Route path="*" element={<ErrorPage />} />
               </Routes>
               <Footer />
          </BrowserRouter>
     </>
  )
};

export default Router;
