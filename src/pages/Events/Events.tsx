import Footer from "../../Companent/Footer/Footer"
import Header from "../../Companent/Header/Header"
import Battle from "./Battle/battle"
import Expo from "./Expo/expo"
import Kitforum from "./KitForum/kitforum"

import "./Events.css"

function Events() {
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
            </div>
        </div>
        <Battle/>
        <Kitforum/>
        <Expo/>
        <Footer/>
    </>
  )
}

export default Events