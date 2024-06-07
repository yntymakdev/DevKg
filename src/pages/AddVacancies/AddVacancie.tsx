import React from "react";
import "../AddVacancies/AddVacancie.css";
import { Link } from "react-router-dom";

function AddVacancie() {
  return (
    <>
      <div id="addVacancies">
        <div className="container">
          <div className="overlay" id="overlay">
            <div className="popup">
              <div className="popup-header">
                <h2>Войти через Telegram:</h2>
                <Link to={"/vacancies"}>back </Link>
              </div>
              <div className="popup-body">
                <button className="telegram-button">
                  Войти через Telegram
                </button>
                <p className="note">
                  *Если в вашей стране заблокирован телеграм, используйте VPN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddVacancie;
