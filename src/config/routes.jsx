import { createBrowserRouter } from "react-router-dom";
import { Home, PostDetail, PostForm } from "../pages";
import { PostItem } from "../components";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/post-form",
    element: <PostForm />
  },
  {
    path: "/post-detail",
    element: <PostDetail />
  },
  //DEBUG
  {
    path: "/post-item",
    element: <PostItem 
    image="https://picsum.photos/800"
    title="Image Title"
    name="Aryo Yonatan"
    date="25 November 2024"
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero."
    />
  }
])