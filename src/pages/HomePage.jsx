import CategoryList from "../components/Categories/CategoryList";
import BoardList from "../components/Boards/BoardList";

function HomePage() {
    return (
        <div className="container">
            <CategoryList />
            <h1 className="title">Бесплатные объявления в Казахстане</h1>
            <BoardList />
        </div>
    )
}

export default HomePage;