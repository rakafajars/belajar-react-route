import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import Blog from "./pages/blog";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  )
}
