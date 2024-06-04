import { Link } from "react-router-dom";
import "./Header.css";
import { SlArrowRightCircle } from "react-icons/sl";
import ToComeIn from "../../pages/ToComeIn/ToComeIn";
import { useState } from "react";
function Header() {
    const [modal, setModal] = useState(false);
    function openModal() {
        setModal(true);
    }
    function closeModal() {
        setModal(false);
    }
    return (
        
              <div className="header">
                  <div className="container">
                    <div className="header__content">
                        <div className="header-logo">
                            <Link to="/">
                            <img
                                src="https://devkg.com/js/img/logo.458f2cd.svg"
                                alt=""
                            />
                            </Link>
                        </div>
                        <div className="header__nav">
                            <Link to="/vacancies">Вакансии</Link>
                            <Link to="/events">Мероприятия</Link>
                            <Link to="/video">Видео</Link>
                            <Link to="/organizatios">Организации</Link>
                            <Link to="/community">Сообщество</Link>
                        </div>
                        <div
                        style={{
                            display: modal ? "block" : "none",
                        }}
                    >
                        <ToComeIn closeModal={closeModal} />
                    </div>
                        <div className="header__enter">
                            {modal ? (
                                <button
                                    onClick={closeModal}
                                    className="products"
                                >
                                    close
                                </button>
                            ) : (
                                <button
                                    onClick={openModal}
                                    className="products"
                                    ><span>
                                    <SlArrowRightCircle />

                                    </span>
                                   Войти
                                </button>
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
        
    );
}

export default Header;