import BoardList from "../components/Boards/BoardList";
import {Link} from "react-router-dom";

function BoardsPage() {
    return (
        <div className="boards container">
            <Link to="/" className="back">
                    <span className="back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                    </span>
            </Link>
            <h1 className="title">Все объявления</h1>
            <BoardList />
        </div>
    )
}

export default BoardsPage;