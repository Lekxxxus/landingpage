import { Route, Routes, Router } from "react-router-dom";
import "./App.css";
import Book from "./component/Book";
import Library from "./component/Library";
import Profile from "./component/Profile";
import Rent from "./component/Rent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>

      {/* <Book />
      <Rent /> */}
      <Profile />
    </div>
  );
}

export default App;
