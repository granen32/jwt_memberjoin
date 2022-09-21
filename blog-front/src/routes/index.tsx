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
    path: "/:username",
    element: <PostListPage />,
  },
  {
    path: "/:username/:postId",
    element: <PostPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <BlogPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/write",
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
