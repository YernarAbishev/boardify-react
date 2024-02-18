function BoardItem({ board }) {
    return (
        <div className="board-card">
            <img src={board.imageUrl} alt={board.title} className="board-img"/>
            <h3 className="board-title">{board.title}</h3>
            {board.price === "Договорная" || board.price === "Даром" ?
                (<strong className="board-price">{board.price}</strong>) :
                (<strong className="board-price">{board.price} &#8376;</strong>)
            }
            <p className="board-city-date">{board.city}, {board.datePublished}</p>
        </div>
    )
}

export default BoardItem;