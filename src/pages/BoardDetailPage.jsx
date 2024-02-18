import avatar from "../assets/images/avatar.jpeg";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
function BoardDetailPage() {
    const params = useParams();
    const [board, setBoard] = useState([]);
    const [zoomLevel, setZoomLevel] = useState(100);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const zoomIn = () => {
        setZoomLevel(prevZoom => prevZoom + 10);
    }
    const zoomOut = () => {
        setZoomLevel(prevZoom => prevZoom - 10);
    }

    useEffect(() => {
        async function fetchBoard() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65c595dce5b94dfca2e01609.mockapi.io/boards/" + params.id
                );
                const data = await res.json();
                setBoard(data);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBoard();
    }, [params.id]);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <div className="board-detail">
            <div className="container">
                <Link to="/" className="back">
                    <span className="back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                    </span>
                </Link>
                <div className="board-detail-card">
                    <div className="board-detail-img-container">
                        <img src={board.imageUrl} alt={board.title} className="board-detail-img" style={{ transform: `scale(${zoomLevel / 100})` }}/>
                    </div>
                    <div className="zoom">
                        <button className="primary-button" onClick={zoomIn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-zoom-in" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                <path
                                    d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                <path fillRule="evenodd"
                                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </button>
                        <button className="danger-button" onClick={zoomOut}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-zoom-out" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                <path
                                    d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                <path fillRule="evenodd"
                                      d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </button>
                    </div>
                    <h1 className="board-detail-title">{board.title}</h1>
                    <h2 className="board-detail-subtitle">{board.category}</h2>
                    {board.price === "Договорная" || board.price === "Даром" ?
                        (<strong className="board-detail-price">{board.price}</strong>) :
                        (<strong className="board-detail-price">{board.price} &#8376;</strong>)
                    }
                    <div className="author-data">
                        <img src={avatar} alt="Avatar" className="author-avatar"/>
                        <div className="author-full">
                            <span className="author-name-number">{board.author}<br/>{board.phone}</span>
                        </div>
                    </div>
                    <p className="board-detail-description">{board.content}</p>
                    <p className="board-detail-date">{board.datePublished}</p>
                    <Link to="/chats" className="primary-button">Чат</Link>
                    <Link to="/favorites" className="danger-button">В избранное</Link>
                </div>
            </div>
        </div>
    )
}

export default BoardDetailPage;