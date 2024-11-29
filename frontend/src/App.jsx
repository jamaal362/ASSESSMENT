import React from "react";
import Blog from "./Blog";
import Posts from "./Posts";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Add Blog</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;