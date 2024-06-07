import { Link } from "react-router-dom";
import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import "./Vacancies.css";

function Vacancies() {
  return (
    <>
      <Header />
      <div id="vacancies">
        <div className="container">
          <div className="vacancies">
            <div className="vacancies__content">
              <div className="filter">
                <Link to={"/addvacancie"}>
                  <button className="add_vacancies">Добавить вакансию</button>
                </Link>
              </div>
              <div className="jobs-list">
                <div className="jobs">
                  <a
                    href="https://devkg.com/ru/jobs/backend-c-developer-ooo-altideyta-12830"
                    className="link-vacancies"
                  >
                    <div className="information-vacancies">
                      <div className="company-icons">
                        <div className="icon"></div>
                      </div>
                      <div className="jobs-item-filed">
                        <span className="label">Компания</span> ООО АЛТИДЭЙТА
                      </div>
                      <div className="jobs-item-filed">
                        <span className="label">Должность</span>
                        Backend C# Developer
                      </div>
                      <div className="jobs-item-filed">
                        <span className="label">Оклад</span>
                        100000 - 200000 KGS в месяц
                      </div>
                      <div className="jobs-item-filed">
                        <span className="label">Тип</span>
                        Удаленная работа
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vacancies;
