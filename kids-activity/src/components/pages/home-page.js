import React from "react";
import { START_WORK_TIME, END_WORK_TIME } from "../../constants"; 

import "./home-page.css";

const HomePage = () => {
    return(
        <div className="main-container">
            <div className="about-center-container">
                <h2>Спортивный центр Ромашка</h2>
                <p>Спортивный центр "Ромашка" с 1990 года осуществляет работу по популяризации спортивного 
                    досуга для детей, начиная с 3-x летнего возраста. 
                    Наш спортивный центр предоставляет обширный выбор спортивного досуга 
                    для детей разного возраста - боевые искуства (самбо, дзюдо, тхэквондо, бокс), 
                    танцевальные занятия (бальные танцы, современные спортивные танцы), 
                    футбол, хоккей, баскетбол, мини-футбол, волейбол, а также бассейн.
                </p>
            </div>
            <div className="time-work-center">
                <p>Работаем с { START_WORK_TIME } - { END_WORK_TIME } без выходных</p>
            </div>
        </div>
    );
};

export default HomePage;