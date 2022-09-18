import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import LayoutPage from "../layout";
// 페이지 분류
const LoginPage = lazy(() => import("../pages/blog/loginpage"));
const RegisterPage = lazy(() => import("../pages/blog/registerpage"));
const WritePage = lazy(() => import("../pages/blog/writepage"));
const PostPage = lazy(() => import("../pages/blog/postpage"));
const PostListPage = lazy(() => import("../pages/blog/postlistpage"));
const BlogPage = lazy(() => import("../pages/blog/"));

const blogRoute = [
  {
    path: "blog/:username",
    element: <PostListPage />,
  },
  {
    path: "blog/:username/:postId",
    element: <PostPage />,
  },
  {
    path: "blog/login",
    element: <LoginPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "blog/register",
    element: <RegisterPage />,
  },
  {
    path: "blog/write",
    element: <WritePage />,
  },
];

const RenderRouter = () =>
  useRoutes([
    {
      path: "/",
      element: <LayoutPage />,
      children: [...blogRoute],
    },
  ]);

export default RenderRouter;
