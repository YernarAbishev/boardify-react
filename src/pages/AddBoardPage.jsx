function AddBoardPage() {
    return (
        <div className="error">
            <div className="container">
                <div className="grey-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor"
                         className="bi bi-person-fill-slash" viewBox="0 0 16 16">
                        <path
                            d="M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465m-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                    </svg>
                </div>
                <h1 className="error-title">Анонимный пользователь</h1>
                <p className="error-description">Чтобы подать объявление, пройдите авторизацию. Если у Вас нет учетной
                    записи, пройдите регистрацию</p>
                <button className="primary-button">Регистрация</button>
                <button className="danger-button">Авторизация</button>
            </div>
        </div>
    )
}

export default AddBoardPage;