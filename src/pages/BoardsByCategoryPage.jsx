import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import BoardItem from "../components/Boards/BoardItem";
import SkeletonCard from "../components/Skeleton-card";
import Pagination from "../components/Pagination";

function BoardsByCategoryPage() {
    const params = useParams();
    const [category, setCategory] = useState([]);
    const [boards, setBoards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65c595dce5b94dfca2e01609.mockapi.io/categories/" + params.id
                );
                const data = await res.json();
                setCategory(data);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        async function fetchBoardsByCategory() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65c595dce5b94dfca2e01609.mockapi.io/boards/"
                );
                const data = await res.json();
                setBoards(data);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategory();
        fetchBoardsByCategory();
    }, [params.id]);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Error />;
    }
    return (
        <div className="boards">
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
                <h1 className="title">По категориям: {category.name}</h1>
                <div className={isLoading || isError ? "" : "boards-row"}>
                    {isLoading ? (
                        <SkeletonCard/>
                    ) : (boards.map((board) => {
                            return board.category === category.name ? (
                                <Link to={`/boards/detail/${board.id}`} key={board.id}>
                                    <BoardItem board={board} />
                                </Link>
                            ) : null}
                        )
                    )}
                    {isError && <Error/>}
                </div>
                <Pagination/>
            </div>
        </div>
    )
}

export default BoardsByCategoryPage;