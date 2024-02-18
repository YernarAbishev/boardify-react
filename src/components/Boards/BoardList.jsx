import BoardItem from "./BoardItem";
import SkeletonCard from "../Skeleton-card";
import Error from "../Error";
import Pagination from "../Pagination";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function BoardList() {
    const [boards, setBoards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchBoards() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65c595dce5b94dfca2e01609.mockapi.io/boards"
                );
                const data = await res.json();
                setBoards(data);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBoards();
    }, []);

    return (
        <>
            <div className={isLoading || isError ? "" : "boards-row"}>
                {isLoading ? (
                    <SkeletonCard/>
                ) : (boards.map((board) => <Link to={`/boards/detail/${board.id}`}>
                            <BoardItem board={board} key={board.id}/>
                        </Link>
                    )
                )}
                {isError && <Error/>}

            </div>
            <Pagination/>
        </>


    )
}


export default BoardList;
