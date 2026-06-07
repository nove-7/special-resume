import { createBrowserRouter } from "react-router-dom";
import Editor from "@/pages/Editor";
const router = createBrowserRouter([{ path: "/", element: <Editor /> }], {
  basename: "/special-resume",
});

export default router;
