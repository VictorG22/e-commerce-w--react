import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books} from './data'
import BooksInfo from "./pages/BooksInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books books={books}/>}/>
        <Route path="/books/1" element={<BooksInfo books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
