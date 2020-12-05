const weekDayNames = [
    { label: "Понедельник", value: "1" },
    { label: "Вторник", value: "2" },
    { label: "Среда", value: "3"},
    { label: "Четверг", value: "4" },
    { label: "Пятница", value: "5" },
    { label: "Суббота", value: "6" },
    { label: "Воскресенье", value: "0" }
];

//Время работы спорт-центра
const START_WORK_TIME = 9;
const END_WORK_TIME = 21;

//Допустимый уровень тренерующихся
const MIN_KID_AGE = 0;
const MAX_KID_AGE = 18;

//Ценовой диапазон занятий
const MIN_ACTIVITY_PRICE = 300;
const MAX_ACTIVITY_PRICE = 1000;


export { weekDayNames, 
        START_WORK_TIME, END_WORK_TIME,
        MIN_KID_AGE, MAX_KID_AGE,
        MIN_ACTIVITY_PRICE, MAX_ACTIVITY_PRICE
     };