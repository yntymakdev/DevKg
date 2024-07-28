import React, { useState } from "react";
import Footer from "../../Companent/Footer/Footer";
import ".//addVacancy.css";
import { Link, useNavigate } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import axios from "axios";


function AddVacancy() {
  const [data, setData] = useState({
    position: "",
    description: "",
    telegram: "",
    skype: "",
    email: "",
    phone: "",
    // type:"",
    // fullTime: "",
    // partTime: "",
    // remote: "",

  });

  document.addEventListener("DOMContentLoaded", () => {
    const description = document.getElementById(
      "description"
    ) as HTMLTextAreaElement;
    const descriptionLength = document.getElementById(
      "description-length"
    ) as HTMLSpanElement;
    const saveButton = document.getElementById(
      "save-button"
    ) as HTMLButtonElement;
    const form = document.getElementById("vacancy-form") as HTMLFormElement;

    description.addEventListener("input", () => {
      descriptionLength.textContent = `Длина текста: ${description.value.length} символов, минимально допустимое значение 200 символов`;
    });

    saveButton.addEventListener("click", () => {
      alert("Сохранено");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (description.value.length < 200) {
        alert("Описание вакансии должно быть не менее 200 символов.");
      } else {
        alert("Форма отправлена");
        form.reset();
        descriptionLength.textContent =
          "Длина текста: 0 символов, минимально допустимое значение 200 символов";
      }
    });
  });
  const navigate = useNavigate();

  function logoHeader() {
    navigate("/");
  }

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function toggleBurgerMenu() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  async function  handleAddVacancy () {

    try {
      const response = await axios.post("http://3.38.98.134/jobs", {
        type: "fulltime",
        slug:"ssss",
        currency:"1223",
        price_from:"dads",
        price_to: "asdaf",
        position:"asff",
        city:"wwfwef",
        salary:"efsf",
        created_at:"sdf",
        updated_at:"asfsd",
        is_archived:"awrew",
        gradient:"awfs",
        workday:"sfwe",
        organization_name:"afaf",
      })
      if (response.data.success){
        console.log(response.data);
        
        navigate('/');
      }
      alert(response.data.message);
    }
    catch (error) {
      console.error('Login kilganda error chikti', error);
      alert("Login bolbodu");
    }
  }
  console.log(data);
  

  return (
    <>
      <div className="container">
        <div className="add-content">
          <div className="header-addVacancy">
            <div className="header-logo-add">
              <img className="img-logo"
                onClick={logoHeader}
                src="https://devkg.com/js/img/logo.458f2cd.svg"
                alt=""
              />
            </div>
            <div className="header__nav-add">
              <Link className="LinkNav" to="/vacancies">
                Вакансии
              </Link>
              <Link className="LinkNav" to="/events">
                Мероприятия
              </Link>
              <Link className="LinkNav" to="/video">
                Видео
              </Link>
            </div>
            <div className="header__menu-and-clicker">
            <div className="header__burger" onClick={toggleBurgerMenu}>
              <div className={`hamburger ${isBurgerOpen ? "is-active" : ""}`}>
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
            <div className={`burger-menu ${isBurgerOpen ? "active" : ""}`}>
              <nav className="burger-menu__list">
                <Link to="/" onClick={toggleBurgerMenu}>
                  <VscClose />
                </Link>
                <Link to="/vacancies" onClick={toggleBurgerMenu}>
                  Вакансии
                </Link>
                <Link to="/events" onClick={toggleBurgerMenu}>
                  Мероприятия
                </Link>
                <Link to="/video" onClick={toggleBurgerMenu}>
                  Видео
                </Link>
                <Link to="/organizations" onClick={toggleBurgerMenu}>
                  Организации
                </Link>
                <Link to="/community" onClick={toggleBurgerMenu}>
                  Сообщество
                </Link>
              </nav>
            </div>
          </div>
            <Link className="LinkNav goOut" to="/">
              <span>Выйти</span>
            </Link>
          </div>
          <div className="addVacancy-content">
            <h1 className="addVacancy-title">Добавить новую вакансию</h1>
            <p className="addVacancy-text">
              Вакансия должна относиться к сфере информационных технологий и
              будет опубликована после проверки модератором
            </p>

            <form id="vacancy-form">
              <label htmlFor="position">Должность*</label>
              <input
                type="text"
                id="position"
                value={data.position}
                onChange={(e) => 
                  setData({
                    ...data,
                    position: e.target.value
                  })
                }
                placeholder='Например "QA Manager / QA Engineer"'
                required
              />

              <label htmlFor="description">Описание вакансии*</label>
              <textarea
                id="description"
                placeholder="Здесь необходимо указать условия труда, требования и обязанности. Также вы можете указать краткое описание компании, например: 'В дружный отдел дизайна игровой студии 'Bloody Fun' требуется проект менеджер со стажем'"
                required
                value={data.description}
                onChange={(e) => 
                  setData({
                    ...data,
                    description: e.target.value
                  })
                }
              ></textarea>
              <span id="description-length">
                Длина текста: 0 символов, минимально допустимое значение 200
                символов
              </span>

              <label htmlFor="telegram">Telegram</label>
              <input className="add-input" 
                type="text" 
                id="telegram" 
                placeholder="uzenbaevaa"
                value={data.telegram}
                onChange={(e) => 
                  setData({
                    ...data,
                    telegram: e.target.value
                  })
                }
              />

              <label htmlFor="skype">Skype</label>
              <input className="add-input" 
                type="text" 
                id="skype"
                value={data.skype}
                onChange={(e) => 
                  setData({
                    ...data,
                    skype: e.target.value
                  })
                }
                />

              <label htmlFor="email">E-Mail</label>
              <input className="add-input" 
                type="email" 
                id="email" 
                value={data.email}
                onChange={(e) => 
                  setData({
                    ...data,
                    email: e.target.value
                  })
                }
                />

              <label htmlFor="phone">Телефон</label>
              <input className="add-input" 
                type="tel" 
                id="phone"
                value={data.phone}
                onChange={(e) => 
                  setData({
                    ...data,
                    phone: e.target.value
                  })
                }
                />

              <label htmlFor="type">Тип*</label>
              <select id="type" required>
                <option value="" disabled selected>
                  Выберите тип работы
                </option>
                <option value="full-time">Полная занятость</option>
                <option value="part-time">Частичная занятость</option>
                <option value="remote">Удаленная работа</option>
              </select>

              <div className="buttons">
                <button onClick={handleAddVacancy} className="btn1" type="button" id="save-button">
                  Сохранить
                </button>
                {/* <button className="btn1" type="submit" onClick={AddVacancy}>Продолжить</button> */}
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddVacancy;