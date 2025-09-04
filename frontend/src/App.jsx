import { HashRouter, Routes, Route } from "react-router-dom"
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Users } from "@/pages/Users";

function App() {
  return (
    <HashRouter>
       <div> {/* Едноставен div наместо Layout */}
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/users" element={<Users />}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
