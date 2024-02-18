import {Link} from "react-router-dom";

function SearchPage() {
    return (
        <div className="search">

            <div className="container w-100">
                <Link to="/" className="back">
                    <span className="back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                    </span>
                </Link>
                <form>
                    <h1 className="search-title">Глобальный поиск</h1>
                    <div className="form-control d-flex align-items-center space-between">
                        <input type="text" className="form-input" placeholder="Название, ключевые слова"/>
                        <button className="primary-button">Найти</button>
                    </div>
                    <h2 className="search-title">Город</h2>
                    <div className="category-list">
                        <span className="category-item">Алматы</span>
                        <span className="category-item">Астана</span>
                        <span className="category-item">Актау</span>
                        <span className="category-item">Атырау</span>
                        <span className="category-item">Караганды</span>
                        <span className="category-item">Костанай</span>
                        <span className="category-item">Талдыкорган</span>
                        <span className="category-item">Семей</span>
                        <span className="category-item">Уральск</span>
                        <span className="category-item">Шымкент</span>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default SearchPage;