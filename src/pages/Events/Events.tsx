import Footer from "../../Companent/Footer/Footer"
import Header from "../../Companent/Header/Header"
import "./Events.css"
import useFetch from "../../hooks/useFetch."


function Events() {
  const{ data, isLoading } = useFetch({
    API_URL: "https://3.34.200.34/events"
  })
  console.log("data: ", data);
  
  return (
    <>
      <Header/>
        <div id="events">
            <div className="container">
                <div className="events">
                  <div className="events__button">
                    <button >Добавить мероприятие</button>
                  </div>
                </div>

                <article className="events-item">
                    <a href="dev.kg">
                        <div className="events-date">
                            <span>
                                <time dateTime="2024-06-10T12:30:00.000z">
                                    8 инюя 2024 
                                    <span> 13:00</span>
                                </time>
                            </span>
                        </div>
                        <div className="events-info">
                            <div className="events-title">
                                <h1>Баттл «Стартап-Нация»</h1>
                            </div>

                            <div className="events-mate">
                                <div className="events-organizer">
                                    <span className="events-label">Организатор</span> <br />
                                    CodifyLab
                                </div>

                                <div className="events-locate">
                                    <span className="events-label">
                                        Локация
                                    </span>
                                    <address>Дасмия, Анкара 2, юрта «Хан Тенир»</address>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Events