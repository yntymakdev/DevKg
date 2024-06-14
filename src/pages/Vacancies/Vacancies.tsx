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
                <Link to={""}>
                  <button className="add_vacancies">Добавить вакансию</button>
                </Link>
              </div>
              <div data-v-3fc4231a className="jobs-list">
                <article data-v-0cfa5cf6 className="item">
                  <a
                    data-v-0cfa5cf6
                    href="/ru/jobs/kontent-menedzher-kivano-14156"
                    className="link"
                  >
                    <div data-v-6dc437e8 className="jobs-item-field icon">
                      <div data-v-7ad410c8 data-v-6dc437e8 className="preview image contain white image">
                          <img data-v-7ad410c8 src="https://devkg.com/images/organizations/10a76a0" alt="" />
                      </div>
                    </div>
                    <div data-v-6dc437e8 data-v-0cfa5cf6 className="jobs-item content">
                    <div data-v-6dc437e8 className="information">
                      <div data-v-6dc437e8 className="jobs-item-field company">
                          <span data-v-6dc437e8 className="label">Kомпания</span>
                            Kivano
                        </div>
                        <div data-v-6dc437e8 className="jobs-item-field position">
                          <span data-v-6dc437e8 className="label">Должность</span>
                            Контент менеджер
                        </div>
                        <div data-v-6dc437e8 className="jobs-item-field price">
                          <span data-v-6dc437e8 className="label">Оклад</span>
                            35000 40000 KGS в месяц
                        </div>
                        <div data-v-6dc437e8 className="jobs-item-field type">
                          <span data-v-6dc437e8 className="label">Тип</span>
                            Офис / Бишкек
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
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
