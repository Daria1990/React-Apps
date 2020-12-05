import React from "react";

import "./contact-page.css";

const ContactPage = () => {
    return(
        <div className="main-container">
            <div className="contact-container">
                <h2>Контакты</h2>
                <div>
                    <h5>Телефон</h5>
                    <p>+7 (000) 000-00-00</p>
                </div>
                <div>
                    <h5>Адрес</h5>
                    <p>г.Москва улица Обручева дом 999</p>
                </div>
            </div>
            <div className="time-work-center">
                
            </div>
        </div>
    );
};

export default ContactPage;