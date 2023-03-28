import kiaOptima from '../../assets/img/kiaOptima.jpg';
import cherry from '../../assets/img/cherry.jpg';
import citroen from '../../assets/img/citroenC3.jpg';
import camera from '../../assets/img/camera_icon.png';
import discount from '../../assets/img/disc_icon.png';
import folder from '../../assets/img/folder_icon.png';
import money from '../../assets/img/icon_money.png';
import search from '../../assets/img/search_icon.png';
import shield from '../../assets/img/shield_icon.png';
import like from '../../assets/img/like_icon.png';
import logo from '../../assets/img/icon.png';

let data = {
    carousel: {
        title: 'Популярні варіанти для автолюбителів',
        cars: [
            {
                img: kiaOptima,
                title: 'Kia K5 (Optima)',
                millage: 'До 90тис. км.',
                year: 2018,
                power: 163,
                volume: 2.0,
                transmission: 'Автомат',
                price1: 25090,
                price2: 18000,
            },
            {
                img: cherry,
                title: 'Cherry Tiggo',
                millage: 'До 60тис. км.',
                year: 2022,
                power: 163,
                volume: 2.0,
                transmission: 'Автомат',
                price1: 25090,
                price2: 18000,
            },
            {
                img: citroen,
                title: 'Citroen C3',
                millage: 'До 70тис. км.',
                year: 2020,
                power: 163,
                volume: 2.0,
                transmission: 'Автомат',
                price1: 25090,
                price2: 18000,
            }
        ]
    },
    mainHeader:{
        banner:{
            title: 'аналізуємо світовий',
            span: 'авто-ринок',
            underTitle: 'в порівнянні з Українським і допомагаємо обрати кращий варіант не лише по вартості, але і по термінам.',
            list:[
                'Досвід роботи більше 30 років',
                'Допомога з вибором автівки та країною для купівлі',
                
            ],
            buttonText: 'Отримати консультацію'
        },
        navibar:{
            test: 'test',
            links:[
                {
                    name:'Авто із Казахстану',
                    path:'/DiegoCar-React/kaz'
                },
                {
                    name:'Авто із ОАЕ',
                    path:'/DiegoCar-React/oae'
                },
                {
                    name:'Авто із Китаю',
                    path:'/DiegoCar-React/ch'
                },
                {
                    name:'Про нас',
                    path:'/DiegoCar-React/about'
                },
                {
                    name:'Контакти',
                    path:'/DiegoCar-React/contacts'
                },
            ]
        },
    },
    proc:{
        title: 'Процес замовлення та покупки авто',
        underTitle: 'Із Південної Кореї в компанії Diego',
        items:['Попередня консультація',
               'Заключення договору',
               'Підбір авто за бюджетом',
               'Виїздна діагностика обраного автомобіля',
               'Фото/відео звіт на а/м обраного авто',
               'Оплата а/м в Корею',
               'Відправка а/м в порт',
               'Розмитнення авто та достака до Вашого дому',
            ]
    },
    help:{
        title: 'Допомога на усіх етапах покупки',
        underTitle: 'Залишіть заявку і наш менеджер вам зателефонує протягом 15 хвилин',
        items1:[
          {icon:like, text:'Підберемо найкращий варіант по найкращій ціні'}, 
          {icon:money, text:'Допоможемо купити валюту та перевести кошти за кордон'}, 
          {icon:folder, text:'Допоможемо зібрати усі потрібні документи'}, 
          {icon:shield, text:'Організуємо перевозку та страхування груза'}, 
        ],
        items2:[
            {icon:camera, text:'Відправимо фото та відео звіт автомобіля'},  
            {icon:search, text:'Наші експерти ретельно оглянуть вибраний автомобіль'},  
            {icon:discount, text:'Розрахуємо податки на купівлю авто'},  
          ],
        items:[
            {icon:like, text:'Підберемо найкращий варіант по найкращій ціні'}, 
            {icon:money, text:'Допоможемо купити валюту та перевести кошти за кордон'}, 
            {icon:folder, text:'Допоможемо зібрати усі потрібні документи'}, 
            {icon:shield, text:'Організуємо перевозку та страхування груза'},
            {icon:camera, text:'Відправимо фото та відео звіт автомобіля'},  
            {icon:search, text:'Наші експерти ретельно оглянуть вибраний автомобіль'},  
            {icon:discount, text:'Розрахуємо податки на купівлю авто'}, 
        ]

    },
    footer:{
        logo: logo,
        copyright: '© 2022 Diego. Усі права захищені, згідно  статті про авторське право. Будь-яке копіювання матеріалів сайту та елементів, включаючи зображення суворо заборонено.',
        phone: '+38(096)530-47-77',
        loc: 'м.Львів вул. Хуторівка 45',
        links1:[
            {
                name:'Авто із Казахстану',
                path:'/DiegoCar-React/kaz'
            },
            {
                name:'Авто із ОАЕ',
                path:'/DiegoCar-React/oae'
            },
            {
                name:'Авто із Китаю',
                path:'/DiegoCar-React/ch'
            },
        
        ],
        links2:[
            {
                name:'Про нас',
                path:'/DiegoCar-React/about'
            },
            {
                name:'Контакти',
                path:'/DiegoCar-React/contacts'
            },
        ]
    }

};





export default data;