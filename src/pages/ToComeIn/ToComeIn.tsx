import "./ToComeIn.css"
import tmeIcon from "../../assets/Images/telegramIcons.svg"
import tmeNoot from "../../assets/Images/tmeNot.svg"
interface ToComeInProps {
  closeModal: () => void;
}
const ToComeIn: React.FC<ToComeInProps> = ({ closeModal }) => {

  return (
    <>
    <div id="toComeIn">
        <div className="container">
            <div className="toComeIn">
              <div className="toComeIn-block">
                  <h3>Войти через Telegram:</h3>
                <div className="toComeIn-tme">
                  <button className="tme-btn">
            
                    <img src={tmeIcon} alt="" />
                    Войти через Telegram
                  </button>
                  <div className="tme-not-img">
                    <img src={tmeNoot} alt="" />
                  </div>
                </div>
                <p>*Если в вашей стране заблокирован телеграм, используйте VPN</p>

              </div>
            </div>  
        </div>
    </div>
    </>
  )
}

export default ToComeIn