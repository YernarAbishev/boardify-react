import {Link} from "react-router-dom";

function CabinetPage() {
    return (
        <div className="cabinet">
            <div className="container w-100">
                <form>
                    <h1 className="title">Авторизация</h1>
                    <div className="form-control">
                        <label className="label-control" for="phone-number">Номер телефона</label>
                        <input className="form-input" type="text" id="phone-number" placeholder="+7 XXX XXX XX XX" />
                    </div>
                    <div className="form-control">
                        <label for="checkbox" className="label-checkbox">Запомнить меня</label>
                        <input type="checkbox" id="checkbox" />
                    </div>
                    <button className="primary-button">Войти</button>
                    <p className="message">Если у Вас нет аккаунта, пройдите регистрационной <Link to="/" className="link">cсылке</Link></p>
                </form>
            </div>
        </div>
    )
}

export default CabinetPage;