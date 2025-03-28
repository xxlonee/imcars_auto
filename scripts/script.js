'use strict'

document.addEventListener("DOMContentLoaded", () => {

    /* Динамическое перелистывание карточек выгодных товаров */

    const sliderLeft = document.querySelector('.slider_Left');             // создаем переменную находя блок по классу
    const sliderRight = document.querySelector('.slider_Right');
    const car = document.querySelector('.popular__list');
    /*

       *   Алгоритм
       *
       * 1. Начало
       * 2. Имеем 2 иконки: стрелка влево и стрелка вправо
       * 3. Нажимаем на кнопки и ожидаем перелистывание карточек товаров
       *  3.1. Нажимаем на кнопку вправо
       *   3.1.1 Происходит листание карточек справа налево поочередно одна за другой
       *  3.2. Нажимаем на кнопку влево 
       *   3.2.1. Происходит листание карточек слева направо поочередно одна за другой 
       * 4. Конец
       * 
       *   Блок-схема: /images/block_schema.png
       */
    if (sliderLeft) {                                                       // проверяем существование элемента в DOM
        console.log('Константа sliderLeft существует');
        sliderLeft.addEventListener('click', () => {
            console.log('Кнопка sliderLeft нажимается');
            let left = car.style.getPropertyValue('left');
            if (left) {
                left = left.replace('px', '');
                left = parseInt(left);
            }
            else {
                left = 0;
            }
            if (left>=0)
            {
                left = 0; 
            } else {
                left = left + 360;
            }
            console.log('left', left + 'px')
            car.style.setProperty('left', left + 'px');

        })
    }
    if (sliderRight) {                                                       // проверяем существование элемента в DOM
        console.log('Константа sliderRight существует');
        sliderRight.addEventListener('click', () => {
            console.log('Кнопка sliderRight нажимается');
            let width = 360*4;
            console.log('width' + width);
            /* let left = car.style.getPropertyValue('left);
            if (left) {
                left = left.replace('px', '');
            }
            else {
                left = 0;
            }
            left = parseInt(left) - 350;
            console.log('left' + left);
            car.style.setProperty ('left', left + 'px');*/
            let left = car.style.getPropertyValue('left');
            if (left) {
                left = left.replace('px', '');
                left = parseInt(left);
            }
            else {
                left = 0;
            }
            if (left >= width - 360)
            {
                left = width - 360;
            } else {
                left = left - 360;
            }
            console.log('left' + left);
            car.style.setProperty('left', left + 'px');

        })
    }
    console.log('Скрипт отработал корректно')
});