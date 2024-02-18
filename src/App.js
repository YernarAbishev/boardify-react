import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/css/style.css";
import HomePage from "./pages/HomePage";
import BoardsPage from "./pages/BoardsPage";
import BoardDetailPage from "./pages/BoardDetailPage";
import { Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import AddBoardPage from "./pages/AddBoardPage";
import ChatsPage from "./pages/ChatsPage";
import CabinetPage from "./pages/CabinetPage";
import BoardsByCategoryPage from "./pages/BoardsByCategoryPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/boards" element={<BoardsPage />} />
            <Route path="/boards/detail/:id" element={<BoardDetailPage />} />
            <Route path="/boards/category/:id" element={<BoardsByCategoryPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/boards/add" element={<AddBoardPage />} />
            <Route path="/chats" element={<ChatsPage />} />
            <Route path="/cabinet" element={<CabinetPage />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;
