const translations = {
    hy: {
        home: 'Գլխավոր',
        services: 'Ծառայություններ',
        masters: 'Մասնագետներ',
        prices: 'Գներ',
        reviews: 'Կարծիքներ',
        about: 'Մեր մասին',
        book: 'Գրանցվել',
        call: 'Զանգահարել',
        bookNow: 'Գրանցվել հիմա',
        register: 'Գրանցվեք հիմա և ստացեք 10% զեղչ',
        phone: 'Հեռախոսահամար',
        viewWorks: 'Տեսնել աշխատանքները',
        viewPrices: 'Տեսնել գները',
        filter: 'Ֆիլտր',
        customers: 'Գոհ հաճախորդներ',
        experience: 'Տարի փորձ',
        rating: 'Միջին գնահատական',
        position: 'Լավագույն տեղադրություն #',
        heroTitle: 'Ձեր',
        heroGradient: 'Գեղեցկության',
        heroSubtitle: 'Պրեմիում Սալոն',
        heroSubtitle2: '16+ տարվա փորձ և 170,000+ բավարարված հաճախորդ',
        heroSubtitle3: 'Բարձրակարգ ծառայություններ յուրաքանչյուրի համար',
        premiumQuality: 'Պրեմիում որակ',
        specialists: 'Մասնագետներ',
        relaxation: 'Հանգիստ',
        stats: '170,000+ հաճախորդներ | 16+ տարի փորձ',
        address: ' 60/2 Կոմիտաս պողոտա, Երևան (Yerevan City)',
        copyright: '© 2011 Դիանա Գևորգյան: Բոլոր իրավունքները պաշտպանված են:',



        service1_title: 'Վարսահարդարում',
        service1_desc: 'Վարսահարդարում և խնամք',
        item1_1: 'Կանանց Վարսահարդարում',
        item1_2: 'Տղամարդկանց Վարսահարդարում'
    },
    ru: {
        home: 'Главная',
        services: 'Услуги',
        masters: 'Мастера',
        prices: 'Цены',
        reviews: 'Отзывы',
        about: 'О нас',
        book: 'Записаться',
        call: 'Позвонить',
        bookNow: 'Записаться сейчас',
        register: 'Запишитесь сейчас и получите 10% скидку',
        phone: 'Телефон',
        viewWorks: 'Посмотреть работы',
        viewPrices: 'Посмотреть цены',
        filter: 'Фильтр',
        customers: 'Довольных клиентов',
        experience: 'Лет опыта',
        rating: 'Средний рейтинг',
        position: 'Лучшее место',
        heroTitle: 'Ваш',
        heroGradient: 'Красоты',
        heroSubtitle: 'Премиум Салон',
        heroSubtitle2: '16+ лет опыта и 170,000+ довольных клиентов',
        heroSubtitle3: 'Высококлассные услуги для каждого',
        premiumQuality: 'Премиум качество',
        specialists: 'Специалисты',
        relaxation: 'Релаксация',
        stats: '170,000+ клиентов | 16+ лет опыта',
        address: '60/2 Комитас проспект, Ереван (Yerevan City)',
        copyright: '© 2011 Диана Геворгян. Все права защищены.',


        service1_title: 'Парикмахерские услуги',
        service1_desc: 'Стрижка и уход за волосами',
        item1_1: 'Женская стрижка',
        item1_2: 'Мужская стрижка'
    },
    en: {
        home: 'Home',
        services: 'Services',
        masters: 'Masters',
        prices: 'Prices',
        reviews: 'Reviews',
        about: 'About',
        book: 'Book',
        call: 'Call',
        bookNow: 'Book Now',
        register: 'Register now and get 10% discount',
        phone: 'Phone',
        viewWorks: 'See works',
        viewPrices: 'See prices',
        filter: 'Filter',
        customers: 'Satisfied customers',
        experience: 'Years of Experience',
        rating: 'Average Rating',
        position: 'Best Position',
        heroTitle: 'Your',
        heroGradient: 'Beauty',
        heroSubtitle: 'Premium Salon',
        heroSubtitle2: '16+ years experience and 170,000+ satisfied customers',
        heroSubtitle3: 'High-quality services for everyone',
        premiumQuality: 'Premium Quality',
        specialists: 'Specialists',
        relaxation: 'Relaxation',
        stats: '170,000+ customers | 16+ years experience',
        address: '60/2 Komitas Ave, Yerevan (Yerevan City)',
        copyright: '© 2011 Diana Gevorgyan. All rights reserved.',


        service1_title: 'Hairdressing',
        service1_desc: 'Hair styling and care',
        item1_1: 'Women\'s haircut',
        item1_2: 'Men\'s haircut'
    }
};

let currentLang = 'hy';

const services = [
    {
        id: 1,
        icon: 'fa-scissors',
        name: {
            hy: 'Վարսահարդարում',
            ru: 'Парикмахерские услуги',
            en: 'Hairdressing'
        },
        description: {
            hy: 'ներկ, կտրվածք, խնամք, ուղղացում',
            ru: 'Окрашивание, стрижка, уход, выпрямление',
            en: 'Coloring, haircut, care, straightening'
        },
        items: [
            {
                name: { hy: 'վարսահարդարում', ru: 'Укладка волос', en: 'Hair styling' },
                price: { hy: '2000 - 5000 դրամ', ru: '2000 - 5000 драм', en: '2000 - 5000 AMD' }
            },
            {
                name: { hy: 'կտրվածք', ru: 'Стрижка', en: 'Haircut' },
                price: { hy: '3000 - 5000 դրամ', ru: '3000 - 5000 драм', en: '3000 - 5000 AMD' }
            },
            {
                name: { hy: 'ներկում', ru: 'Окрашивание', en: 'Hair coloring' },
                price: { hy: '2000 - 5000 դրամ', ru: '2000 - 5000 драм', en: '2000 - 5000 AMD' }
            },
            {
                name: { hy: 'ալիքներ', ru: 'Локоны / Завивка', en: 'Waves / Curls' },
                price: { hy: '5000 - 15000 դրամ', ru: '5000 - 15000 драм', en: '5000 - 15000 AMD' }
            }
        ]
    },
    {
        id: 2,
        icon: 'Svg/Untitled.svg',
        name: {
            hy: 'Մատնահարդարում',
            ru: 'Маникюр',
            en: 'Manicure'
        },
        description: {
            hy: 'Գել-լաք, լիցք, ճապոնական մատնահարդարում',
            ru: 'Гель-лак, наращивание, японский маникюр',
            en: 'Gel polish, extension, Japanese manicure'
        },
        items: [
            {
                name: { hy: 'մատնահարդարում', ru: 'Классический маникюр', en: 'Classic manicure' },
                price: { hy: '3000 - 5000 դրամ', ru: '3000 - 5000 драм', en: '3000 - 5000 AMD' }
            },
            {
                name: { hy: 'Գելային մատնահարդարում', ru: 'Маникюр с гель-лаком', en: 'Gel polish manicure' },
                price: { hy: '6000 - 8000 դրամ', ru: '6000 - 8000 драм', en: '6000 - 8000 AMD' }
            },
            {
                name: { hy: 'Լիցք', ru: 'Наращивание ногтей', en: 'Nail extension' },
                price: { hy: '8000 - 15000 դրամ', ru: '8000 - 15000 драм', en: '8000 - 15000 AMD' }
            },
            {
                name: { hy: 'Տղամարդկանց մատնահարդարում', ru: 'Мужской маникюр', en: "Men's manicure" },
                price: { hy: '5000 - 10000 դրամ', ru: '5000 - 10000 драм', en: '5000 - 10000 AMD' }
            },
            {
                name: { hy: 'SPA մատնահարդարում', ru: 'SPA маникюр', en: 'SPA manicure' },
                price: { hy: '3000 - 5000 դրամ', ru: '3000 - 5000 драм', en: '3000 - 5000 AMD' }
            }
        ]
    },
    {
        id: 3,
        icon: 'Svg/foot.svg',
        name: {
            hy: 'Ոտնահարդարում',
            ru: 'Педикюр',
            en: 'Pedicure'
        },
        description: {
            hy: 'Գել-լաք, պոլիգել, Խնամք',
            ru: 'Гель-лак, полигель, уход',
            en: 'Gel polish, polygel, care'
        },
        items: [
            {
                name: { hy: 'Ոտնահարդարում', ru: 'Классический педикюр', en: 'Classic pedicure' },
                price: { hy: '8000 - 10000 դրամ', ru: '8000 - 10000 драм', en: '8000 - 10000 AMD' }
            },
            {
                name: { hy: 'Գել լաքով ոտնահարդարում', ru: 'Педикюр с гель-лаком', en: 'Gel polish pedicure' },
                price: { hy: '10000 - 15000 դրամ', ru: '10000 - 15000 драм', en: '10000 - 15000 AMD' }
            },
            {
                name: { hy: 'SPA ոտնահարդարում', ru: 'SPA педикюр', en: 'SPA pedicure' },
                price: { hy: '5000 դրամ', ru: '5000 драм', en: '5000 AMD' }
            }
        ]
    },
    {
        id: 4,
        icon: 'Svg/eye.svg',
        name: {
            hy: 'Դիմահարդարում',
            ru: 'Макияж',
            en: 'Makeup'
        },
        description: {
            hy: 'Հոնքեր, թարթիչներ, փոշեդրում',
            ru: 'Брови, ресницы, пудровое напыление',
            en: 'Brows, lashes, powder brows / ombre brows'
        },
        items: [
            {
                name: { hy: 'Հոնքերի ձևավորում', ru: 'Оформление бровей', en: 'Eyebrow shaping' },
                price: { hy: '2000 - 5000 դրամ', ru: '2000 - 5000 драм', en: '2000 - 5000 AMD' }
            },
            {
                name: { hy: 'Ականջի դակում', ru: 'Прокол ушей', en: 'Ear piercing' },
                price: { hy: '4000 դրամ', ru: '4000 драм', en: '4000 AMD' }
            },
            {
                name: { hy: 'Թարթիչների լիցք', ru: 'Наращивание ресниц', en: 'Eyelash extensions' },
                price: { hy: '10000 - 20000 դրամ', ru: '10000 - 20000 драм', en: '10000 - 20000 AMD' }
            },
            {
                name: { hy: 'Դիմահարդարում', ru: 'Дневной макияж', en: 'Day makeup' },
                price: { hy: '8000 - 20000 դրամ', ru: '8000 - 20000 драм', en: '8000 - 20000 AMD' }
            }
        ]
    },
    {
        id: 5,
        icon: 'fa-feather-pointed',
        name: {
            hy: 'Մազահեռացում',
            ru: 'Эпиляция / Депиляция',
            en: 'Hair removal'
        },
        description: {
            hy: 'Էլոս, ոսկ, ասեղային',
            ru: 'Элос, воск, электроэпиляция (игольчатая)',
            en: 'Elos, wax, electrolysis'
        },
        items: [
            {
                name: { hy: 'Էլոս մազահեռացում', ru: 'Элос-эпиляция', en: 'Elos hair removal' },
                price: { hy: '3000 - 25000 դրամ', ru: '3000 - 25000 драм', en: '3000 - 25000 AMD' }
            },
            {
                name: { hy: 'Ասեղային էպիլյացիա', ru: 'Электроэпиляция (игольчатая)', en: 'Electrolysis hair removal' },
                price: { hy: '5000 դրամ', ru: '5000 драм', en: '5000 AMD' }
            },
            {
                name: { hy: 'Ոսկով մազահեռացում', ru: 'Депиляция воском', en: 'Waxing' },
                price: { hy: '3000 - 20000 դրամ', ru: '3000 - 20000 драм', en: '3000 - 20000 AMD' }
            }
        ]
    },
    {
        id: 6,
        icon: 'Svg/Unit1.svg',
        name: {
            hy: 'Բարբեր',
            ru: 'Барбер',
            en: 'Barber'
        },
        description: {
            hy: 'թաց-չոր սափրում, ներկ, ոսկ',
            ru: 'Влажное и сухое бритье, окрашивание, воск',
            en: 'Wet & dry shave, coloring, wax'
        },
        items: [
            {
                name: { hy: 'Մազերի կտրվածք', ru: 'Мужская стрижка', en: "Men's haircut" },
                price: { hy: '3000 - 4000 դրամ', ru: '3000 - 4000 драм', en: '3000 - 4000 AMD' }
            },
            {
                name: { hy: 'Թաց սափրում', ru: 'Влажное бритье', en: 'Wet shave' },
                price: { hy: '4000 դրամ', ru: '4000 драм', en: '4000 AMD' }
            },
            {
                name: { hy: 'Չոր սափրում', ru: 'Сухое бритье', en: 'Dry shave' },
                price: { hy: '3000 - 4000 դրամ', ru: '3000 - 4000 драм', en: '3000 - 4000 AMD' }
            },
            {
                name: { hy: 'Ներկում', ru: 'Камуфляж седины / Окрашивание', en: 'Beard/Hair coloring' },
                price: { hy: '4000 - 5000 դրամ', ru: '4000 - 5000 драм', en: '4000 - 5000 AMD' }
            },
            {
                name: { hy: 'Ոսկով մազահեռացում', ru: 'Удаление волос воском', en: 'Waxing' },
                price: { hy: '1000 - 5000 դրամ', ru: '1000 - 5000 драм', en: '1000 - 5000 AMD' }
            }
        ]
    }
];



const masters = [
    {
        id: 1,
        name: { hy: 'Դիանա Գևորգյան', ru: 'Диана Геворгян', en: 'Diana Gevorgyan' },
        photo: 'master_photo/master_photo.jpg',
        gallery: [
            'master_work_photo/Diana/image_r_6.jpg',
            'master_work_photo/Diana/image_r_7.jpg',
            'master_work_photo/Diana/image_r_8.jpg',
            'master_work_photo/Diana/image_r_9.jpg',
            'master_work_photo/Diana/image_r_10.jpg',
            'master_work_photo/Diana/image_r_11.jpg',
            'master_work_photo/Diana/image_r_12.jpg',
        ],
        
        isExpert: true,
        services: [1],
        specialization: {
            hy: 'Վարսահարդար',
            ru: 'Парикмахер',
            en: 'Hairdresser'
        },
        contacts: {
            phone: '+37498201662',
            telegram: 'dianagev86'
        },
        servicePrices: [
            {
                name: { hy: 'Հարդարում (Ուղիղ, օվալ, ալիքներ)', ru: 'Укладка (Прямые, овал, волны)', en: 'Styling (Straight, oval, waves)' },
                price: { hy: '5000 դրամ', ru: '5000 драм', en: '5000 AMD' }
            },
            {
                name: { hy: 'Կտրվածք', ru: 'Стрижка', en: 'Haircut' },
                price: { hy: '5000 դրամ', ru: '5000 драм', en: '5000 AMD' }
            },
            {
                name: { hy: 'Հոլիվուդյան ալիքներ', ru: 'Голливудские волны', en: 'Hollywood waves' },
                price: { hy: '20000 - 30000 դրամ', ru: '20000 - 30000 драм', en: '20000 - 30000 AMD' }
            },
            {
                name: { hy: 'Արմատի ներկում', ru: 'Окрашивание корней', en: 'Root coloring' },
                price: { hy: '5000 դրամ', ru: '5000 драм', en: '5000 AMD' }
            },
            {
                name: { hy: 'Ամբողջական ներկում', ru: 'Полное окрашивание', en: 'Full hair coloring' },
                price: { hy: '10000 - 20000 դրամ', ru: '10000 - 20000 драм', en: '10000 - 20000 AMD' }
            },
            {
                name: { hy: 'Գունային հպում (Color Touch)', ru: 'Тонирование Color Touch', en: 'Color Touch toning' },
                price: { hy: '10000 - 15000 դրամ', ru: '10000 - 15000 драм', en: '10000 - 15000 AMD' }
            },
            {
                name: { hy: 'Օդային հպում (Airtouch)', ru: 'Окрашивание Airtouch', en: 'Airtouch coloring' },
                price: { hy: '20000 - 30000 դրամ', ru: '20000 - 30000 драм', en: '20000 - 30000 AMD' }
            },
            {
                name: { hy: 'Դիագնոստիկա', ru: 'Диагностика волос', en: 'Hair diagnostics' },
                price: { hy: '0 դրամ', ru: '0 драм', en: '0 AMD' }
            },
            {
                name: { hy: 'Սառը խնամք (Խոնավեցում, սնուցում, թաղանթապատում)', ru: 'Холодный уход (Увлажнение, питание, ламинирование)', en: 'Cold care (Hydration, nutrition, lamination)' },
                price: { hy: '20000 դրամ', ru: '20000 драм', en: '20000 AMD' }
            },
            {
                name: { hy: 'Կոլագենային խնամք', ru: 'Коллагеновый уход', en: 'Collagen treatment' },
                price: { hy: '40000 - 60000 դրամ', ru: '40000 - 60000 драм', en: '40000 - 60000 AMD' }
            },
            {
                name: { hy: 'Օդային խնամք', ru: 'Воздушный уход', en: 'Air care' },
                price: { hy: '10000 դրամ', ru: '10000 драм', en: '10000 AMD' }
            },
            {
                name: { hy: 'Գլխամաշկի պիլինգ', ru: 'Пилинг кожи головы', en: 'Scalp peeling' },
                price: { hy: '10000 դրամ', ru: '10000 драм', en: '10000 AMD' }
            },
            {
                name: { hy: 'Տաք բոտոքս', ru: 'Горячий ботокс', en: 'Hot Botox' },
                price: { hy: '40000 դրամ', ru: '40000 драм', en: '40000 AMD' }
            },
            {
                name: { hy: 'Կերատինային ուղղացում', ru: 'Кератиновое выпрямление', en: 'Keratin straightening' },
                price: { hy: '50000 - 100000 դրամ', ru: '50000 - 100000 драм', en: '50000 - 100000 AMD' }
            },
            {
                name: { hy: 'Ամինաթթվային ուղղացում', ru: 'Аминокислотное выпрямление', en: 'Amino acid straightening' },
                price: { hy: '50000 - 120000 դրամ', ru: '50000 - 120000 драм', en: '50000 - 120000 AMD' }
            }
        ]
    },
    {
        id: 2,
        name: { hy: 'Լուսինե Թովմասյան', ru: 'Лусине Товмасян', en: 'Lusine Tovmasyan' },
        photo: 'master_photo/master_5.jpg',
        gallery: [
            'master_work_photo/Lusine/image_r_31.jpg',
            'master_work_photo/Lusine/image_r_32.jpg',
            'master_work_photo/Lusine/image_r_33.jpg',
            'master_work_photo/Lusine/image_r_34.jpg',
            'master_work_photo/Lusine/image_r_35.jpg',
            'master_work_photo/Lusine/image_r_36.jpg',
            'master_work_photo/Lusine/image_r_37.jpg'

        ],
        specialization: {
            hy: 'Վարսահարդար',
            ru: 'Парикмахер',
            en: 'Hairdresser'
        },
        contacts: {
            phone: '+37455088020',
            telegram: 'lusine601'
        },
        services: [1],
        servicePrices: [
            {
                name: { hy: 'Հարդարում', ru: 'Укладка волос', en: 'Hair styling' },
                price: { hy: '3000 - 5000 դրամ', ru: '3000 - 5000 драм', en: '3000 - 5000 AMD' }
            },
            {
                name: { hy: 'Կտրվածք', ru: 'Стрижка', en: 'Haircut' },
                price: { hy: '3000 - 4000 դրամ', ru: '3000 - 4000 драм', en: '3000 - 4000 AMD' }
            },
            {
                name: { hy: 'Արմատի ներկում', ru: 'Окрашивание корней', en: 'Root coloring' },
                price: { hy: '5000 - 8000 դրամ', ru: '5000 - 8000 драм', en: '5000 - 8000 AMD' }
            },
            {
                name: { hy: 'Ամբողջական ներկում', ru: 'Полное окрашивание', en: 'Full hair coloring' },
                price: { hy: '8000 - 12000 դրամ', ru: '8000 - 12000 драм', en: '8000 - 12000 AMD' }
            },
            {
                name: { hy: 'Գունաբացում տեխնիկայով', ru: 'Осветление в техниках', en: 'Hair bleaching with techniques' },
                price: { hy: '30000 - 50000 դրամ', ru: '30000 - 50000 драм', en: '30000 - 50000 AMD' }
            },
            {
                name: { hy: 'Խնամք', ru: 'Уход за волосами', en: 'Hair care' },
                price: { hy: '20000 - 40000 դրամ', ru: '20000 - 40000 драм', en: '20000 - 40000 AMD' }
            },
            {
                name: { hy: 'Բոտոքս, կերատինային հարթեցում', ru: 'Ботокс, кератиновое выпрямление', en: 'Botox and keratin straightening' },
                price: { hy: '30000 - 50000 դրամ', ru: '30000 - 50000 драм', en: '30000 - 50000 AMD' }
            },
            {
                name: { hy: 'Նանոուղղացում', ru: 'Нанопластика волос', en: 'Nanoplastia straightening' },
                price: { hy: '40000 - 60000 դրամ', ru: '40000 - 60000 драм', en: '40000 - 60000 AMD' }
            }
        ]
    },
    {
        id: 3,
        name: { hy: 'Նաիրա Մաշինյան', ru: 'Наира Машинян', en: 'Naira Mashinyan' },
        photo: 'master_photo/master_4.jpg',
        gallery: [
            'master_work_photo/Naira/image_r_38.jpg',
            'master_work_photo/Naira/image_r_39.jpg',
            'master_work_photo/Naira/image_r_40.jpg',
            'master_work_photo/Naira/image_r_41.jpg',
            'master_work_photo/Naira/image_r_42.jpg'
        ],
        specialization: {
            hy: 'Վարսահարդար',
            ru: 'Парикмахер',
            en: 'Hairdresser'
        },
        contacts: {
            phone: '+37491915931',
            telegram: 'Naira300'
        },
        services: [1],
        servicePrices: [
            {
                name: { hy: 'Վարսահարդարում և կտրվածք', ru: 'Стрижка и укладка', en: 'Haircut and styling' },
                price: { hy: '3000 - 5000 դրամ', ru: '3000 - 5000 драм', en: '3000 - 5000 AMD' }
            },
            {
                name: { hy: 'Ֆեն', ru: 'Укладка феном', en: 'Blowdry' },
                price: { hy: '2000 - 5000 դրամ', ru: '2000 - 5000 драм', en: '2000 - 5000 AMD' }
            },
            {
                name: { hy: 'Արմատների ներկում', ru: 'Окрашивание корней', en: 'Root coloring' },
                price: { hy: '2000 - 5000 դրամ', ru: '2000 - 5000 драм', en: '2000 - 5000 AMD' }
            },
            {
                name: { hy: 'Գունաներկում', ru: 'Колорирование / Окрашивание', en: 'Hair coloring' },
                price: { hy: '4000 - 8000 դրամ', ru: '4000 - 8000 драм', en: '4000 - 8000 AMD' }
            },
            {
                name: { hy: 'Տոնաներկում տեխնիկաներով', ru: 'Тонирование в техниках', en: 'Hair toning with techniques' },
                price: { hy: '10000 - 40000 դրամ', ru: '10000 - 40000 драм', en: '10000 - 40000 AMD' }
            }
        ]
    },
    {
        id: 4,
        name: { hy: 'Նարեկ Ալեքսանյան', ru: 'Нарек Алексанян', en: 'Narek Aleksanyan' },
        photo: 'master_photo/master_8.jpg',
        gallery: [
           
            'master_work_photo/Narek/image_r_43.jpg',
            'master_work_photo/Narek/image_r_44.jpg',
            'master_work_photo/Narek/image_r_45.jpg',
            'master_work_photo/Narek/image_r_46.jpg',
            'master_work_photo/Narek/image_r_47.jpg',
            'master_work_photo/Narek/image_r_48.jpg',
            'master_work_photo/Narek/image_r_49.jpg'
        ],
        specialization: {
            hy: 'Վարսահարդար',
            ru: 'Парикмахер',
            en: 'Hairdresser'
        },
        contacts: {
            phone: '+37444177710',
            telegram: 'Az02701'
        },
        services: [1],
        servicePrices: [
            {
                name: { hy: 'Հարդարում', ru: 'Укладка волос', en: 'Hair styling' },
                price: { hy: '4000 - 8000 դրամ', ru: '4000 - 8000 драм', en: '4000 - 8000 AMD' }
            },
            {
                name: { hy: 'Կտրվածք', ru: 'Стрижка', en: 'Haircut' },
                price: { hy: '6000 դրամ', ru: '6000 драм', en: '6000 AMD' }
            },
            {
                name: { hy: 'Արմատի ներկում (Ներկը ներառված)', ru: 'Окрашивание корней (включая краску)', en: 'Root coloring (dye included)' },
                price: { hy: '12000 դրամ', ru: '12000 драм', en: '12000 AMD' }
            },
            {
                name: { hy: 'Ամբողջական ներկում (Ներկը ներառված)', ru: 'Полное окрашивание (включая краску)', en: 'Full hair coloring (dye included)' },
                price: { hy: '20000 դրամ', ru: '20000 драм', en: '20000 AMD' }
            },
            {
                name: { hy: 'Գունաթափ', ru: 'Осветление / Обесцвечивание волос', en: 'Hair bleaching' },
                price: { hy: '35000 - 70000 դրամ', ru: '35000 - 70000 драм', en: '35000 - 70000 AMD' }
            },
            {
                name: { hy: 'Տեխնիկայով ներկում', ru: 'Сложное окрашивание в техниках', en: 'Hair coloring with techniques' },
                price: { hy: '35000 - 70000 դրամ', ru: '35000 - 70000 драм', en: '35000 - 70000 AMD' }
            },
            {
                name: { hy: 'Ուղղացում', ru: 'Выпрямление волос', en: 'Hair straightening' },
                price: { hy: '45000 - 80000 դրամ', ru: '45000 - 80000 драм', en: '45000 - 80000 AMD' }
            }
        ]
    },
    {
        id: 5,
        name: { hy: 'Ռոման Գասպարյան', ru: 'Роман Гаспарян', en: 'Roman Gasparyan' },
        photo: 'master_photo/master_9.jpg',
        gallery: [
            'master_photo/master_photo.jpg',
            'master_photo/master_1.jpg',
            'master_photo/master_2.jpg',
            'master_photo/master_3.jpg',
            'master_photo/master_4.jpg'
        ],
        specialization: {
            hy: 'Բարբեր',
            ru: 'Барбер',
            en: 'Barber'
        },
        contacts: {
            phone: '+37477161996'
            
        },
        services: [6],
        servicePrices: [
            {
                name: { hy: 'Կտրվածք', ru: 'Мужская стрижка', en: 'Haircut' },
                price: { hy: '4000 դրամ', ru: '4000 драм', en: '4000 AMD' }
            },
            {
                name: { hy: 'Սափրում', ru: 'Бритье', en: 'Shaving' },
                price: { hy: '3000 դրամ', ru: '3000 драм', en: '3000 AMD' }
            },
            {
                name: { hy: 'Վզի սափրում', ru: 'Бритье шеи', en: 'Neck shaving' },
                price: { hy: '1000 դրամ', ru: '1000 драм', en: '1000 AMD' }
            },
            {
                name: { hy: 'Հոնքերի շտկում', ru: 'Коррекция бровей', en: 'Eyebrow correction' },
                price: { hy: '1000 դրամ', ru: '1000 драм', en: '1000 AMD' }
            },
            {
                name: { hy: 'Թաց սափրում', ru: 'Влажное бритье (королевское)', en: 'Wet shaving' },
                price: { hy: '4000 դրամ', ru: '4000 драм', en: '4000 AMD' }
            },
            {
                name: { hy: 'Մազահեռացում ոսկով', ru: 'Депиляция воском', en: 'Waxing' },
                price: { hy: '2000 - 5000 դրամ', ru: '2000 - 5000 драм', en: '2000 - 5000 AMD' }
            },
            {
                name: { hy: 'Ներկում', ru: 'Окрашивание волос / камуфляж', en: 'Hair coloring' },
                price: { hy: '4000 - 5000 դրամ', ru: '4000 - 5000 драм', en: '4000 - 5000 AMD' }
            }
        ]
    },
    {
        id: 6,
        name: { hy: 'Գագիկ Ստեփանյան', ru: 'Гагик Степанян', en: 'Gagik Stepanyan' },
        photo: 'master_photo/master_6.jpg',
        gallery: [
            'master_work_photo/Gagik/image_r_13.jpg',
            'master_work_photo/Gagik/image_r_14.jpg',
            'master_work_photo/Gagik/image_r_15.jpg',
            'master_work_photo/Gagik/image_r_16.jpg',
            'master_work_photo/Gagik/image_r_17.jpg',
            'master_work_photo/Gagik/image_r_18.jpg',
        ],
        specialization: {
            hy: 'Բարբեր',
            ru: 'Барбер',
            en: 'Barber'
        },
        contacts: {
            phone: '+37494382830',
            telegram: 'gagbarber'
        },
        services: [6],
        servicePrices: [
            {
                name: { hy: 'Կտրվածք', ru: 'Мужская стрижка', en: 'Haircut' },
                price: { hy: '3000 դրամ', ru: '3000 драм', en: '3000 AMD' }
            },
            {
                name: { hy: 'Սափրում', ru: 'Бритье', en: 'Shaving' },
                price: { hy: '2000 դրամ', ru: '2000 драм', en: '2000 AMD' }
            },
            {
                name: { hy: 'Վզի սափրում', ru: 'Бритье шеи', en: 'Neck shaving' },
                price: { hy: '1000 դրամ', ru: '1000 драм', en: '1000 AMD' }
            },
            {
                name: { hy: 'Հոնքերի շտկում', ru: 'Коррекция бровей', en: 'Eyebrow correction' },
                price: { hy: '1000 դրամ', ru: '1000 драм', en: '1000 AMD' }
            },
            {
                name: { hy: 'Թաց սափրում', ru: 'Влажное бритье (королевское)', en: 'Wet shaving' },
                price: { hy: '4000 դրամ', ru: '4000 драм', en: '4000 AMD' }
            },
            {
                name: { hy: 'Մազահեռացում ոսկով', ru: 'Депиляция воском', en: 'Waxing' },
                price: { hy: '1000 - 4000 դրամ', ru: '1000 - 4000 драм', en: '1000 - 4000 AMD' }
            },
            {
                name: { hy: 'Ներկում', ru: 'Окрашивание волос / камуфляж', en: 'Hair coloring' },
                price: { hy: '3000 - 4000 դրամ', ru: '4000 - 5000 драм', en: '4000 - 5000 AMD' }
            }
        ]
    },
    {
        id: 7,
        name: { hy: 'Գոհար Գևորգյան', ru: 'Гохар Геворгян', en: 'Gohar Gevorgyan' },
        photo: 'master_photo/master_7.jpg',
        gallery: [
            'master_work_photo/Gohar_G/image_r_19.jpg',
            'master_work_photo/Gohar_G/image_r_20.jpg',
            'master_work_photo/Gohar_G/image_r_21.jpg',
            'master_work_photo/Gohar_G/image_r_22.jpg',
            'master_work_photo/Gohar_G/image_r_23.jpg',
            'master_work_photo/Gohar_G/image_r_24.jpg',
            'master_work_photo/Gohar_G/image_r_25.jpg'
            

        ],
        specialization: {
            hy: 'Մատնահարդար',
            ru: 'Мастер маникюра',
            en: 'Nail Master'
        },
        contacts: {
            phone: '+37455015907',
            telegram: 'gognail'
        },
        services: [2, 3],
        servicePrices: [
            {
                name: { hy: 'Մատնահարդարում լաքապատումով', ru: 'Маникюр с покрытием лаком', en: 'Manicure with nail polish' },
                price: { hy: '3000 դրամ', ru: '3000 драм', en: '3000 AMD' }
            },
            {
                name: { hy: 'Լաքապատում', ru: 'Покрытие лаком', en: 'Nail polishing' },
                price: { hy: '1500 դրամ', ru: '1500 драм', en: '1500 AMD' }
            },
            {
                name: { hy: 'Ճապոնական մատնահարդարում', ru: 'Японский маникюр', en: 'Japanese manicure' },
                price: { hy: '4000 դրամ', ru: '4000 драм', en: '4000 AMD' }
            },
            {
                name: { hy: 'Սառը պարաֆին սպա', ru: 'Холодный парафин / Спа-уход', en: 'Cold paraffin SPA' },
                price: { hy: '3000 դրամ', ru: '3000 драм', en: '3000 AMD' }
            },
            {
                name: { hy: 'Գելով ամրացում', ru: 'Укрепление гелем', en: 'Gel nail strengthening' },
                price: { hy: '6000 - 7000 դրամ', ru: '6000 - 7000 драм', en: '6000 - 7000 AMD' }
            },
            {
                name: { hy: 'Լիցք գելով', ru: 'Наращивание гелем', en: 'Gel nail extension' },
                price: { hy: '8000 - 15000 դրամ', ru: '8000 - 15000 драм', en: '8000 - 15000 AMD' }
            },
            {
                name: { hy: 'Ոտնահարդարում լաքապատումով', ru: 'Педикюр с покрытием лаком', en: 'Pedicure with nail polish' },
                price: { hy: '8000 - 10000 դրամ', ru: '8000 - 10000 драм', en: '8000 - 10000 AMD' }
            },
            {
                name: { hy: 'Ոտնաթաթի հարդարում', ru: 'Обработка стоп', en: 'Foot treatment' },
                price: { hy: '5000 դրամ', ru: '5000 драм', en: '5000 AMD' }
            },
            {
                name: { hy: 'Բարդ Ոտնահարդարում', ru: 'Сложный (проблемный) педикюр', en: 'Advanced pedicure' },
                price: { hy: '12000 դրամ', ru: '12000 драм', en: '12000 AMD' }
            },
            {
                name: { hy: 'Գելով ոտնահարդարում', ru: 'Педикюр с покрытием гелем', en: 'Gel pedicure' },
                price: { hy: '10000 - 12000 դրամ', ru: '10000 - 12000 драм', en: '10000 - 12000 AMD' }
            },
            {
                name: { hy: 'Գելով ոտնաթաթ', ru: 'Обработка стоп с покрытием гелем', en: 'Gel foot treatment' },
                price: { hy: '8000 դրամ', ru: '8000 драм', en: '8000 AMD' }
            }
        ]
    },
    {
        id: 8,
        name: { hy: 'Ռոզա Քոչունց', ru: 'Роза Кочунц', en: 'Roza Kochunts' },
        photo: 'master_photo/master_3.jpg',
        gallery: [
            'master_work_photo/Ruzanna/image_r_50.jpg',
            'master_work_photo/Ruzanna/image_r_51.jpg',
            'master_work_photo/Ruzanna/image_r_52.jpg',
            'master_work_photo/Ruzanna/image_r_53.jpg',
            'master_work_photo/Ruzanna/image_r_54.jpg',
            'master_work_photo/Ruzanna/image_r_55.jpg'
        ],
        specialization: {
            hy: 'Մատնահարդար',
            ru: 'Мастер маникюра',
            en: 'Nail Master'
        },
        contacts: {
            phone: '+37493244773',
            telegram: 'rozinail8'
        },
        services: [2, 3], // (id 1 и 6)
        servicePrices: [
            {
                name: { hy: 'Մատնահարդարում', ru: 'Маникюр', en: 'Manicure' },
                price: { hy: '3000 դրամ', ru: '3000 драм', en: '3000 AMD' }
            },
            {
                name: { hy: 'Գելային մատնահարդարում', ru: 'Гель-лак (шеллак)', en: 'Gel manicure' },
                price: { hy: '6000 դրամ', ru: '6000 драм', en: '6000 AMD' }
            },
            {
                name: { hy: 'Պոլիգելային մատնահարդարում', ru: 'Маникюр с полигелем', en: 'Polygel manicure' },
                price: { hy: '7000 - 8000 դրամ', ru: '7000 - 8000 драм', en: '7000 - 8000 AMD' }
            },
            {
                name: { hy: 'Եղունգների լիցք', ru: 'Наращивание ногтей', en: 'Nail extension' },
                price: { hy: '13000 - 15000 դրամ', ru: '13000 - 15000 драм', en: '13000 - 15000 AMD' }
            },
            {
                name: { hy: 'Գելային ոտնահարդարում', ru: 'Гелевый педикюр', en: 'Gel pedicure' },
                price: { hy: '10000 - 12000 դրամ', ru: '10000 - 12000 драм', en: '10000 - 12000 AMD' }
            },
            {
                name: { hy: 'Ոտնահարդարում լաքով', ru: 'Педикюр с обычным лаком', en: 'Pedicure with regular polish' },
                price: { hy: '8000 - 10000 դրամ', ru: '8000 - 10000 драм', en: '8000 - 10000 AMD' }
            },
            {
                name: { hy: 'Ոտնաթաթի գելային հարդարում', ru: 'Гелевое покрытие пальцев ног', en: 'Toe nail gel polish' },
                price: { hy: '8000 դրամ', ru: '8000 драм', en: '8000 AMD' }
            },
            {
                name: { hy: 'Ոտնաթաթի հարդարում', ru: 'Обработка пальцев ног', en: 'Toe nail care' },
                price: { hy: '5000 դրամ', ru: '5000 драм', en: '5000 AMD' }
            },
            {
                name: { hy: 'Ճապոնական մատնահարդարում', ru: 'Японский маникюр', en: 'Japanese manicure' },
                price: { hy: '5000 դրամ', ru: '5000 драм', en: '5000 AMD' }
            }
        ]
    },
    {
        id: 9,
        name: { hy: 'Ամալիա Խաչինյան', ru: 'Амалия Хачинян', en: 'Amalia Khachinyan' },
        photo: 'master_photo/master_2.jpg',
        gallery: [
            'master_work_photo/Amalia/image_r_1.jpg',
            'master_work_photo/Amalia/image_r_2.jpg',
            'master_work_photo/Amalia/image_r_3.jpg',
            'master_work_photo/Amalia/image_r_4.jpg',
            'master_work_photo/Amalia/image_r_5.jpg',
        ],
        specialization: {
            hy: 'Մատնահարդար',
            ru: 'Мастер маникюра',
            en: 'Nail Master'
        },
        contacts: {
            phone: '+37493270713',
             telegram: 'amalynail'

           
        },
        services: [2, 3],
        servicePrices: [
            {
                name: { hy: 'Մատնահարդարում', ru: 'Маникюр', en: 'Manicure' },
                price: { hy: '3000 դրամ', ru: '3000 драм', en: '3000 AMD' }
            },
            {
                name: { hy: 'Մատնահարդարում լաքապատումով', ru: 'Маникюр с покрытием лаком', en: 'Manicure with nail polish' },
                price: { hy: '4000 դրամ', ru: '4000 драм', en: '4000 AMD' }
            },
            {
                name: { hy: 'Գելային մատնահարդարում', ru: 'Гелевый маникюр', en: 'Gel manicure' },
                price: { hy: '7000 դրամ', ru: '7000 драм', en: '7000 AMD' }
            },
            {
                name: { hy: 'Ոտնահարդարում', ru: 'Педикюр', en: 'Pedicure' },
                price: { hy: '8000 դրամ', ru: '8000 драм', en: '8000 AMD' }
            },
            {
                name: { hy: 'Ոտնահարդարում լաքապատումով', ru: 'Педикюр с покрытием лаком', en: 'Pedicure with nail polish' },
                price: { hy: '10000 դրամ', ru: '10000 драм', en: '10000 AMD' }
            },
            {
                name: { hy: 'Ոտնահարդարում գելով', ru: 'Педикюр с гелем', en: 'Gel pedicure' },
                price: { hy: '12000 դրամ', ru: '12000 драм', en: '12000 AMD' } // Было 120000 — исправлен лишний ноль
            },
            {
                name: { hy: 'Ոտնաթաթի հարդարում', ru: 'Обработка стоп', en: 'Foot treatment' },
                price: { hy: '4000 - 5000 դրամ', ru: '4000 - 5000 драм', en: '4000 - 5000 AMD' }
            },
            {
                name: { hy: 'Տղամարդու մատնահարդարում', ru: 'Мужской маникюр', en: "Men's manicure" },
                price: { hy: '5000 - 7000 դրամ', ru: '5000 - 7000 драм', en: '5000 - 7000 AMD' }
            },
            {
                name: { hy: 'Տղամարդու ոտնահարդարում', ru: 'Мужской педикюр', en: "Men's pedicure" },
                price: { hy: '10000 - 12000 դրամ', ru: '10000 - 12000 драм', en: '10000 - 12000 AMD' }
            },
            {
                name: { hy: 'Ճապոնական մատնահարդարում', ru: 'Японский маникюр', en: 'Japanese manicure' },
                price: { hy: '4000 - 6000 դրամ', ru: '4000 - 6000 драм', en: '4000 - 6000 AMD' }
            },
            {
                name: { hy: 'Ճապոնական մատնահարդարում', ru: 'Японский маникюр', en: 'Japanese manicure' },
                price: { hy: '12000 - 15000 դրամ', ru: '4000 - 6000 драм', en: '4000 - 6000 AMD' }
            }
        ]
    },
    {
        id: 10,
        name: { hy: 'Գոհար Սարգսյան', ru: 'Гоар Саргсян', en: 'Gohar Sargsyan' },
        photo: 'master_photo/master_1.jpg',
        gallery: [
            'master_work_photo/Gohar_S/image_r_26.jpg',
            'master_work_photo/Gohar_S/image_r_27.jpg',
            'master_work_photo/Gohar_S/image_r_28.jpg',
            'master_work_photo/Gohar_S/image_r_29.jpg',
            'master_work_photo/Gohar_S/image_r_30.jpg'
        ],
        specialization: {
            hy: 'Կոսմետոլոգ',
            ru: 'Косметолог',
            en: 'Cosmetologist'
        },
        contacts: {
            phone: '+3797551154'
        },
        services: [4,5],
        servicePrices: [
            {
                name: { hy: 'Հոնքերի շտկում', ru: 'Коррекция бровей', en: 'Eyebrow correction' },
                price: { hy: '3000 դրամ', ru: '3000 драм', en: '3000 AMD' }
            },
            {
                name: { hy: 'Հոնքերի լամինացիա', ru: 'Ламинирование бровей', en: 'Eyebrow lamination' },
                price: { hy: '8000 դրամ', ru: '8000 драм', en: '8000 AMD' }
            },
            {
                name: { hy: 'Ականջի դակում', ru: 'Прокол ушей', en: 'Ear piercing' },
                price: { hy: '4000 դրամ', ru: '4000 драм', en: '4000 AMD' }
            },
            {
                name: { hy: 'Թարթիչների լիցք', ru: 'Наращивание ресниц', en: 'Eyelash extension' },
                price: { hy: '10000 - 18000 դրամ', ru: '10000 - 18000 драм', en: '10000 - 18000 AMD' }
            },
            {
                name: { hy: 'Անկյունային լիցք', ru: 'Наращивание уголков ресниц', en: 'Corner eyelash extension' },
                price: { hy: '7000 դրամ', ru: '7000 драм', en: '7000 AMD' }
            },
            {
                name: { hy: 'Դասական լիցք (C, D, L, M)', ru: 'Классическое наращивание (C, D, L, M)', en: 'Classic eyelash extension (C, D, L, M)' },
                price: { hy: '10000 դրամ', ru: '10000 драм', en: '10000 AMD' }
            },
            {
                name: { hy: '2D / 3D լիցք (C, D, L, M)', ru: 'Наращивание ресниц 2D / 3D (C, D, L, M)', en: '2D / 3D eyelash extension (C, D, L, M)' },
                price: { hy: '12000 դրամ', ru: '12000 драм', en: '12000 AMD' }
            },
            {
                name: { hy: '4D լիցք (C, D, L, M)', ru: 'Наращивание ресниц 4D (C, D, L, M)', en: '4D eyelash extension (C, D, L, M)' },
                price: { hy: '15000 դրամ', ru: '15000 драм', en: '15000 AMD' }
            },
            {
                name: { hy: 'Mega խտություն', ru: 'Мега объемное наращивание', en: 'Mega volume eyelash extension' },
                price: { hy: '18000 դրամ', ru: '18000 драм', en: '18000 AMD' }
            },
            {
                name: { hy: 'Դեմքի մաքրում', ru: 'Чистка лица', en: 'Facial cleansing' },
                price: { hy: '10000 դրամ', ru: '10000 драм', en: '10000 AMD' }
            },
            {
                name: { hy: 'Դեմքի պիլինգ', ru: 'Пилинг лица', en: 'Facial peeling' },
                price: { hy: '8000 դրամ', ru: '8000 драм', en: '8000 AMD' }
            },
            {
                name: { hy: 'Դեմքի մերսում (20 ր)', ru: 'Массаж лица (20 мин)', en: 'Facial massage (20 min)' },
                price: { hy: '5000 դրամ', ru: '5000 драм', en: '5000 AMD' }
            },
            {
                name: { hy: 'Դեմքի խնամք', ru: 'Уход за кожей лица', en: 'Facial care' },
                price: { hy: '7000 դրամ', ru: '7000 драм', en: '7000 AMD' }
            },
            {
                name: { hy: 'Միկրոբլեյդինգ', ru: 'Микроблейдинг бровей', en: 'Eyebrow microblading' },
                price: { hy: '25000 դրամ', ru: '25000 драм', en: '25000 AMD' }
            },
            {
                name: { hy: 'Փոշեդրում', ru: 'Пудровое напыление бровей', en: 'Powder brow shading' },
                price: { hy: '30000 դրամ', ru: '30000 драм', en: '30000 AMD' }
            },
            {
                name: { hy: 'Դիմահարդարում', ru: 'Макияж (Визаж)', en: 'Makeup' },
                price: { hy: '8000 - 20000 դրամ', ru: '8000 - 20000 драм', en: '8000 - 20000 AMD' }
            }
        ]
    }
];





const reviews = [
    {
        text: 'Անհավատալի ծառայություն: Մասնագետները շատ պրոֆեսիոնալ են, միշտ գալիս եմ ուրախությամբ:',
        author: 'Անի Հ.',
        initials: 'ԱՀ'
    },
    {
        text: 'Լավագույն սալոնը Երևանում: Վարսահարդարումը միշտ կատարյալ է դուրս գալիս: Խորհուրդ եմ տալիս բոլորին:',
        author: 'Մարիամ Գ.',
        initials: 'ՄԳ'
    },
    {
        text: '16 տարի եմ հաճախում այս սալոն: Որակը և սպասարկումը միշտ բարձր մակարդակի վրա են:',
        author: 'Սուսաննա Մ.',
        initials: 'ՍՄ'
    },
    {
        text: 'Շնորհակալություն գեղեցկության համար: Մատնահարդարումը պարզապես հրաշալի է:',
        author: 'Նարե Կ.',
        initials: 'ՆԿ'
    }
];


function scrollToServices() {
    const target = document.getElementById('services');
    if (target) {
        // target.scrollIntoView({ behavior: 'smooth' });
        const offset = -70;

        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}


function renderServices(currentLang = 'hy') {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return; // Защита от ошибок, если элемента нет на странице

    grid.innerHTML = services.map((service, index) => `
        <div class="service-card fade-in" data-service-id="${service.id}" data-original-order="${index}" style="order: ${index};" onclick="toggleServiceCard(${service.id})">
            <button class="expand-btn" onclick="event.stopPropagation(); toggleServiceCard(${service.id})">
                <i class="fas fa-plus"></i>
            </button>
            <div class="service-card-content">
                <div class="service-icon">
                    ${service.icon.includes('.svg') ?
            `<img src="${service.icon}" alt="" style="width: 80px !important; height: 80px !important; object-fit: contain; ${service.icon.includes('black') ? 'filter: brightness(0) invert(1);' : 'filter: none;'} ${service.icon.includes('foot.svg') ? 'transform: translate(14px, -1px); width: 100px !important; height: 100px !important' : ''}">` :
            `<i class="fas ${service.icon}" style="font-size: 40px; ${service.icon === 'fa-specific' ? 'transform: translate(14px, -1px);' : ''}"></i>`
        }
                </div>
                <!-- Прямое чтение языка из объекта услуги -->
                <h3 class="service-name">${service.name[currentLang] || service.name['hy']}</h3>
                <p class="service-description">${service.description[currentLang] || service.description['hy']}</p>
            </div>
            <div class="service-details">
                ${service.items.map(item => `
                    <div class="service-item" onclick="event.stopPropagation(); filterByService(${service.id})">
                        <!-- Прямое чтение языка для подпунктов и цен -->
                        <span class="service-item-name">${item.name[currentLang] || item.name['hy']}</span>
                        <span class="service-item-price">${item.price[currentLang] || item.price['hy']}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

let a = 0;

const masterSliderState = {};

function getMasterGallery(master) {
    if (Array.isArray(master.gallery) && master.gallery.length) {
        return master.gallery;
    }

    return [
        master.photo,
        'master_photo/master_1.jpg',
        'master_photo/master_2.jpg'
    ];
}

function stopMasterSliderProgress(masterId) {
    const state = masterSliderState[masterId];
    if (!state) return;
    if (state.interval) {
        clearInterval(state.interval);
        delete state.interval;
    }
}

function setMasterSlide(masterId, index, restart = true) {
    const card = document.querySelector(`[data-master-id="${masterId}"]`);
    if (!card) return;
    const worksView = card.querySelector('.master-works-view');
    if (!worksView) return;
    const track = worksView.querySelector('.master-slider-track');
    if (!track) return;

    const slideCount = parseInt(track.dataset.slideCount, 10) || 0;
    if (slideCount === 0) return;

    let targetIndex = index;
    if (targetIndex < 0) {
        targetIndex = slideCount - 1;
    }

    const isCloneSlide = targetIndex === slideCount;
    const realIndex = isCloneSlide ? 0 : ((targetIndex % slideCount) + slideCount) % slideCount;

    if (!masterSliderState[masterId]) {
        masterSliderState[masterId] = {};
    }
    masterSliderState[masterId].index = realIndex;
    masterSliderState[masterId].isAnimating = true;

    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.transform = `translateX(-${targetIndex * 100}%)`;

    if (isCloneSlide) {
        const onTransitionEnd = (e) => {
            if (e.target !== track || e.propertyName !== 'transform') return;
            track.removeEventListener('transitionend', onTransitionEnd);
            track.style.transition = 'none';
            track.style.transform = 'translateX(0%)';
            masterSliderState[masterId].isAnimating = false;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                });
            });
        };
        track.addEventListener('transitionend', onTransitionEnd);
    } else {
        setTimeout(() => {
            masterSliderState[masterId].isAnimating = false;
        }, 500);
    }

    const progressFill = worksView.querySelector('.master-slider-progress-fill');
    if (progressFill) {
        progressFill.style.width = '0%';
    }

    if (restart) {
        startMasterSliderProgress(masterId);
    }
}

function startMasterSliderProgress(masterId) {
    stopMasterSliderProgress(masterId);

    const card = document.querySelector(`[data-master-id="${masterId}"]`);
    if (!card) return;

    const worksView = card.querySelector('.master-works-view');
    if (!worksView || !worksView.classList.contains('active')) return;

    const slides = worksView.querySelectorAll('.master-slide');
    if (!slides.length) return;

    const progressFill = worksView.querySelector('.master-slider-progress-fill');
    if (progressFill) {
        progressFill.style.width = '0%';
    }

    const durationMs = 4500;
    const intervalMs = 50;
    const step = 100 / (durationMs / intervalMs);
    let progress = 0;
    const state = masterSliderState[masterId] || { index: 0 };
    masterSliderState[masterId] = state;

    state.interval = setInterval(() => {
        progress += step;
        if (progressFill) {
            progressFill.style.width = `${Math.min(progress, 100)}%`;
        }
        if (progress >= 100) {
            progress = 0;
            setMasterSlide(masterId, (state.index || 0) + 1, false);
            if (progressFill) {
                progressFill.style.width = '0%';
            }
        }
    }, intervalMs);
}

function changeMasterSlide(masterId, direction) {
    const state = masterSliderState[masterId] || { index: 0 };
    if (state.isAnimating) return;
    setMasterSlide(masterId, (state.index || 0) + direction, true);
}

function animateToggleText(toggle, newText) {
    const textEl = toggle.querySelector('.master-view-toggle-text');
    if (!textEl) {
        toggle.textContent = newText;
        return;
    }

    textEl.classList.add('fade-out');
    setTimeout(() => {
        textEl.textContent = newText;
        textEl.classList.remove('fade-out');
    }, 180);
}

function toggleMasterView(masterId) {
    const card = document.querySelector(`[data-master-id="${masterId}"]`);
    if (!card) return;
    const details = card.querySelector('.master-details');
    const worksView = card.querySelector('.master-works-view');
    const pricesView = card.querySelector('.master-prices-view');
    const toggle = card.querySelector('.master-view-toggle');
    if (!worksView || !pricesView || !toggle) return;

    const showWorks = !worksView.classList.contains('active');
    if (showWorks) {
        worksView.classList.add('active');
        pricesView.classList.remove('active');
        animateToggleText(toggle, translations[currentLang].viewPrices);
        setMasterSlide(masterId, masterSliderState[masterId]?.index || 0, true);
    } else {
        worksView.classList.remove('active');
        pricesView.classList.add('active');
        animateToggleText(toggle, translations[currentLang].viewWorks);
        stopMasterSliderProgress(masterId);
    }

    if (details && details.style.maxHeight && details.style.maxHeight !== 'none') {
        requestAnimationFrame(() => syncDetailsPanelHeight(details));
    }
}

function resetMasterView(masterId) {
    const card = document.querySelector(`[data-master-id="${masterId}"]`);
    if (!card) return;
    const worksView = card.querySelector('.master-works-view');
    const pricesView = card.querySelector('.master-prices-view');
    const toggle = card.querySelector('.master-view-toggle');
    if (worksView && pricesView && toggle) {
        worksView.classList.remove('active');
        pricesView.classList.add('active');
        toggle.textContent = translations[currentLang].viewWorks;
    }
    stopMasterSliderProgress(masterId);
}

function renderMasters(filterServiceId = null, currentLang = 'hy') {
    const grid = document.getElementById('mastersGrid');
    if (!grid) return; // Защита от ошибок

    let filteredMasters = masters;

    if (filterServiceId) {
        filteredMasters = masters.filter(master => master.services.includes(filterServiceId));
        const service = services.find(s => s.id === filterServiceId);

        document.getElementById('filterBadge').classList.add('active');
        // ИСПРАВЛЕНО: Теперь корректно выводим имя сервиса под текущий язык
        const serviceName = service ? (service.name[currentLang] || service.name['hy']) : '';
        document.getElementById('filterText').textContent = `${translations[currentLang].filter}: ${serviceName}`;
    } else {
        const filterBadge = document.getElementById('filterBadge');
        if (filterBadge) filterBadge.classList.remove('active');
    }

    grid.innerHTML = filteredMasters.map(master => {
        const isExpert = master.isExpert;
        const hasPhone = master.contacts && master.contacts.phone;
        const hasTelegram = master.contacts && master.contacts.telegram;
        let contactsHtml = '';

        if (hasPhone || hasTelegram) {
            contactsHtml = `
    <div class="booking-contacts" id="contacts-${master.id}">
        ${hasPhone ? `
        <a href="#" class="contact-link call-btn" onclick="event.stopPropagation(); event.preventDefault(); handleCallClick('${master.contacts.phone}');">
            <i class="fas fa-phone-alt"></i>
            <span>${translations[currentLang].call}</span>
        </a>
        ` : ''}
        
        ${hasTelegram ? `
        <a href="#" class="contact-link tg-btn" onclick="event.stopPropagation(); event.preventDefault(); handleTelegramClick('${master.contacts.telegram}');">
            <i class="fab fa-telegram-plane"></i>
            <span>Telegram</span>
        </a>
        ` : ''}
    </div>
    `;

    
        }
        const gallery = getMasterGallery(master);
        return `
        <div class="master-card fade-in ${isExpert ? 'expert-master' : ''}" data-master-id="${master.id}" onclick="toggleMasterCard(${master.id})">
            ${isExpert ? '<i class="fas fa-crown expert-crown-float"></i>' : ''}
            <button class="master-expand-btn" onclick="event.stopPropagation(); toggleMasterCard(${master.id})">
                <i class="fas fa-plus"></i>
            </button>
            <div class="master-card-content">
                <img src="${master.photo}" alt="${typeof master.name === 'object' ? (master.name[currentLang] || master.name['hy']) : master.name}" class="master-photo" 
                     style="${isExpert ? 'border-color:#B76E79;' : ''}"
                     onerror="this.src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'">
                
                <h3 class="master-name">${typeof master.name === 'object' ? (master.name[currentLang] || master.name['hy']) : master.name}</h3>
                <!-- Выводим специализацию под язык -->
                <p class="master-specialization">${master.specialization[currentLang] || master.specialization['hy']}</p>
                ${isExpert ? '<div style="margin-bottom: 5px;"><span class="expert-badge">Keratin  Expert</span></div>' : ''}
                </div>
            <div class="master-details">
                <div class="master-details-top">
                    <button class="master-view-toggle" onclick="event.stopPropagation(); toggleMasterView(${master.id})"><span class="master-view-toggle-text">${translations[currentLang].viewWorks}</span></button>
                </div>
                <div class="master-views">
                    <div class="master-works-view">
                        <div class="master-slider" data-master-id="${master.id}">
                            <div class="master-slider-track" data-slide-count="${gallery.length}">
                                ${gallery.map((photo, index) => `
                                    <div class="master-slide">
                                        <img src="${photo}" alt="${typeof master.name === 'object' ? (master.name[currentLang] || master.name['hy']) : master.name} work ${index + 1}" onerror="this.src='${master.photo}'">
                                    </div>
                                `).join('')}
                                ${gallery.length ? `
                                    <div class="master-slide master-slide-clone">
                                        <img src="${gallery[0]}" alt="${typeof master.name === 'object' ? (master.name[currentLang] || master.name['hy']) : master.name} work 1" onerror="this.src='${master.photo}'">
                                    </div>
                                ` : ''}
                            </div>
                            <button class="master-slider-nav prev" onclick="event.stopPropagation(); changeMasterSlide(${master.id}, -1)">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="master-slider-nav next" onclick="event.stopPropagation(); changeMasterSlide(${master.id}, 1)">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                            <div class="master-slider-progress">
                                <span class="master-slider-progress-fill"></span>
                            </div>
                        </div>
                    </div>
                    <div class="master-prices-view active">
                        ${master.servicePrices.map(sp => `
                            <div class="master-service-item">
                                <span class="master-service-name">${sp.name[currentLang] || sp.name['hy']}</span>
                                <span class="master-service-price">${sp.price[currentLang] || sp.price['hy']}</span>
                            </div>
                        `).join('')}
                        <div class="booking-container">
                            <button class="book-button" onclick="event.stopPropagation(); handleBookClick(this, '${master.id}')">${translations[currentLang].book}</button>
                            ${contactsHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join('');
}



const CARD_ANIM_MS = 75;

const cardAnimToken = new WeakMap();

function forceReflow(el) {
    void el.offsetHeight;
}

function invalidateCardAnimation(card) {
    const next = (cardAnimToken.get(card) || 0) + 1;
    cardAnimToken.set(card, next);
    return next;
}

function isCardAnimToken(card, token) {
    return cardAnimToken.get(card) === token;
}

function resetExpandableCard(card, { details, btn } = {}) {
    card.classList.remove('expanded', 'content-active');
    card.style.viewTransitionName = '';
    card.style.width = '';
    card.style.maxWidth = '';
    card.style.height = '';
    if (details) details.style.maxHeight = '';
    if (btn) btn.classList.remove('active');
    const booking = card.querySelector('.booking-container');
    if (booking) booking.classList.remove('active');
    if (card.dataset.masterId) {
        stopMasterSliderProgress(card.dataset.masterId);
        resetMasterView(card.dataset.masterId);
    }
    const originalOrder = card.getAttribute('data-original-order');
    if (originalOrder !== null) {
        card.style.order = originalOrder;
    } else {
        card.style.order = '';
    }
    delete card.dataset.origWidth;
}

async function releaseDetailsPanelHeight(details, isCancelled) {
    if (!details) return;
    await waitForTransitionEnd(details, ['max-height']);
    if (!isCancelled()) {
        details.style.maxHeight = 'none';
    }
}

function syncDetailsPanelHeight(details) {
    if (!details) return;
    const card = details.closest('.service-card, .master-card');
    if (!card?.classList.contains('content-active')) return;

    const isOpen = details.style.maxHeight !== '0px' && details.style.maxHeight !== '0';
    if (!isOpen) return;

    if (details.style.maxHeight === 'none') {
        details.style.maxHeight = details.scrollHeight + 'px';
        forceReflow(details);
    }

    details.style.maxHeight = details.scrollHeight + 'px';

    waitForTransitionEnd(details, ['max-height']).then(() => {
        if (card.classList.contains('content-active')) {
            details.style.maxHeight = 'none';
        }
    });
}

function resetOtherExpandableCards(gridSelector, exceptCard, detailsSelector, btnSelector) {
    document.querySelectorAll(gridSelector).forEach((c) => {
        if (c === exceptCard) return;
        invalidateCardAnimation(c);
        resetExpandableCard(c, {
            details: c.querySelector(detailsSelector),
            btn: c.querySelector(btnSelector),
        });
    });
}

function waitForTransitionEnd(element, propertyNames, fallbackMs = CARD_ANIM_MS) {
    const props = propertyNames ? new Set(propertyNames) : null;
    const pending = propertyNames ? new Set(propertyNames) : null;

    return new Promise((resolve) => {
        let done = false;
        const finish = () => {
            if (done) return;
            done = true;
            clearTimeout(fallbackId);
            element.removeEventListener('transitionend', onEnd);
            resolve();
        };

        const onEnd = (e) => {
            if (e.target !== element) return;
            if (props && !props.has(e.propertyName)) return;
            if (pending) {
                pending.delete(e.propertyName);
                if (pending.size > 0) return;
            }
            finish();
        };

        element.addEventListener('transitionend', onEnd);
        const fallbackId = setTimeout(finish, fallbackMs + 80);
    });
}

async function animateExpandableCard(card, opts, animToken, isCancelled) {
    const { details, btn, mode } = opts;
    const aborted = () => isCancelled() || !isCardAnimToken(card, animToken);

    if (mode === 'close') {
        if (btn) btn.classList.remove('active');
        if (details) {
            details.style.maxHeight = details.scrollHeight + 'px';
            forceReflow(details);
            details.style.maxHeight = '0';
            await waitForTransitionEnd(details, ['max-height']);
            if (aborted()) return;
        }

        card.style.width = card.offsetWidth + 'px';
        card.style.maxWidth = card.offsetWidth + 'px';
        card.classList.remove('content-active');

        const originalWidth = card.dataset.origWidth || '280px';
        forceReflow(card);
        card.style.width = originalWidth;
        card.style.maxWidth = originalWidth;
        await waitForTransitionEnd(card, ['width', 'max-width']);
        if (aborted()) return;

        const w = card.offsetWidth;
        const h = card.offsetHeight;
        card.style.width = w + 'px';
        card.style.maxWidth = w + 'px';
        card.style.height = h + 'px';
        card.style.viewTransitionName = 'active-card';

        const moveBack = () => card.classList.remove('expanded');

        if (document.startViewTransition) {
            const transition = document.startViewTransition(() => moveBack());
            await transition.finished;
        } else {
            moveBack();
        }
        if (aborted()) return;

        resetExpandableCard(card, { details, btn });
        return;
    }

    const initialWidth = card.getBoundingClientRect().width + 'px';
    const initialHeight = card.getBoundingClientRect().height + 'px';
    card.dataset.origWidth = initialWidth;
    card.style.width = initialWidth;
    card.style.maxWidth = initialWidth;
    card.style.height = initialHeight;
    card.style.viewTransitionName = 'active-card';

    const moveForward = () => card.classList.add('expanded');

    if (document.startViewTransition) {
        const transition = document.startViewTransition(() => moveForward());
        await transition.finished;
        if (aborted()) return;

        card.style.viewTransitionName = '';
        card.classList.add('content-active');
        card.style.width = 'auto';
        card.style.maxWidth = 'none';
        card.style.height = '';

        const targetWidth = card.offsetWidth + 'px';
        card.style.width = initialWidth;
        card.style.maxWidth = initialWidth;
        forceReflow(card);

        card.style.width = targetWidth;
        card.style.maxWidth = targetWidth;
        await waitForTransitionEnd(card, ['width', 'max-width']);
        if (aborted()) return;

        card.style.width = '';
        card.style.maxWidth = '';

        if (details) details.style.maxHeight = details.scrollHeight + 'px';
        if (btn) btn.classList.add('active');
        await releaseDetailsPanelHeight(details, () => aborted());
    } else {
        moveForward();
        card.classList.add('content-active');
        if (details) {
            details.style.maxHeight = details.scrollHeight + 'px';
            details.style.maxHeight = 'none';
        }
        if (btn) btn.classList.add('active');
    }
}

async function runExpandableCardToggle(generationRef, gridSelector, card, opts) {
    const myGen = ++generationRef.current;
    const { details, btn, detailsSelector, btnSelector } = opts;
    const willClose = card.classList.contains('expanded')
        || card.classList.contains('content-active')
        || Boolean(card.style.width);

    resetOtherExpandableCards(gridSelector, card, detailsSelector, btnSelector);
    const animToken = invalidateCardAnimation(card);
    const isCancelled = () => generationRef.current !== myGen || !isCardAnimToken(card, animToken);

    if (isCancelled()) return;

    if (willClose && !card.classList.contains('expanded')) {
        resetExpandableCard(card, { details, btn });
        return;
    }

    try {
        if (willClose) {
            await animateExpandableCard(card, { ...opts, mode: 'close' }, animToken, isCancelled);
        } else {
            await animateExpandableCard(card, { ...opts, mode: 'open' }, animToken, isCancelled);
        }
    } finally {
        if (isCancelled()) {
            resetExpandableCard(card, { details, btn });
        }
    }
}

const serviceToggleGenRef = { current: 0 };
const masterToggleGenRef = { current: 0 };

function scrollMasterButtonIntoView(button) {
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const targetTop = window.pageYOffset + rect.top - 115;
    smoothScrollTo(targetTop, 320);
}

function smoothScrollTo(targetTop, duration = 520) {
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
        return;
    }

    const start = window.pageYOffset;
    const distance = targetTop - start;
    const startTime = performance.now();

    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const step = (currentTime) => {
        const elapsed = Math.min((currentTime - startTime) / duration, 1);
        window.scrollTo(0, start + distance * ease(elapsed));
        if (elapsed < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
}

function scrollMasterButtonIntoView(button, duration = 520) {
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const targetTop = window.pageYOffset + rect.top - 115;
    smoothScrollTo(targetTop, duration);
}

async function toggleMasterCard(masterId) {
    const card = document.querySelector(`[data-master-id="${masterId}"]`);
    if (!card) return;

    const button = card.querySelector('.master-expand-btn');
    const activeButton = card.querySelector('.master-expand-btn.active') || button;

    if (activeButton) {
        requestAnimationFrame(() => scrollMasterButtonIntoView(activeButton, 520));
    }

    await runExpandableCardToggle(masterToggleGenRef, '.master-card', card, {
        details: card.querySelector('.master-details'),
        btn: button,
        detailsSelector: '.master-details',
        btnSelector: '.master-expand-btn',
    });

    if (activeButton) {
        setTimeout(() => scrollMasterButtonIntoView(activeButton, 520), 250);
    }
}

let ab = 0;





function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    grid.innerHTML = reviews.map(review => `
                <div class="review-card fade-in">
                    <span class="review-quote">"</span>
                    <p class="review-text">${review.text}</p>
                    <div class="review-author">
                        <div class="review-avatar">${review.initials}</div>
                        <div class="review-info">
                            <div class="review-name">${review.author}</div>
                            <div class="review-stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
}




let abcd = 0;

function scrollServiceCardIntoView(card) {
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const cardHeight = rect.height;
    const topPadding = Math.max(90, Math.min(120, (viewportHeight - cardHeight) * 0.2));
    const targetTop = window.pageYOffset + rect.top - topPadding;
    const maxTop = Math.max(0, document.documentElement.scrollHeight - viewportHeight);
    const scrollTarget = Math.min(Math.max(targetTop, 0), maxTop);

    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
}

function scheduleServiceScroll(card) {
    if (!card) return;

    requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const cardHeight = rect.height;
        const topPadding = Math.max(90, Math.min(120, (viewportHeight - cardHeight) * 0.2));
        const targetTop = window.pageYOffset + rect.top - topPadding;
        const maxTop = Math.max(0, document.documentElement.scrollHeight - viewportHeight);
        const scrollTarget = Math.min(Math.max(targetTop, 0), maxTop);

        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    });
}

async function toggleServiceCard(serviceId) {
    const card = document.querySelector(`[data-service-id="${serviceId}"]`);
    if (!card) return;

    const isExpanding = !card.classList.contains('expanded') && !card.classList.contains('content-active');

    if (isExpanding) {
        card.style.order = '9999';

        requestAnimationFrame(() => {
            requestAnimationFrame(() => scrollServiceCardIntoView(card));
        });

        await runExpandableCardToggle(serviceToggleGenRef, '.service-card', card, {
            details: card.querySelector('.service-details'),
            btn: card.querySelector('.expand-btn'),
            detailsSelector: '.service-details',
            btnSelector: '.expand-btn',
        });
    } else {
        const originalOrder = card.getAttribute('data-original-order');
        if (originalOrder !== null) {
            card.style.order = originalOrder;
        } else {
            card.style.order = '';
        }

        requestAnimationFrame(() => scrollServiceCardIntoView(card));

        await runExpandableCardToggle(serviceToggleGenRef, '.service-card', card, {
            details: card.querySelector('.service-details'),
            btn: card.querySelector('.expand-btn'),
            detailsSelector: '.service-details',
            btnSelector: '.expand-btn',
        });

        setTimeout(() => scrollServiceCardIntoView(card), 160); // здесь должно быть  700  не менять эту цыфру  
    }
}

let abc = 0;




function filterByService(serviceId) {
    renderMasters(serviceId, currentLang);

    const target = document.getElementById('masters');
    const offset = -70;

    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}


document.getElementById('filterClose').addEventListener('click', () => {
    const filterBadge = document.getElementById('filterBadge');

    if (filterBadge) {
        // 1. Включаем анимацию исчезновения фильтра
        filterBadge.classList.remove('active');
        filterBadge.classList.add('removing');

        // 2. Ждем 400мс (пока доиграет анимация matchFadeOut) и убираем фильтр совсем
        setTimeout(() => {
            filterBadge.classList.remove('removing');

            // 3. Рендерим всех мастеров заново в прежнем порядке
            renderMasters(null, currentLang);

            // 4. Запускаем анимацию появления для карточек мастеров
            const cards = document.querySelectorAll('.master-card');

            // Используем минимальный таймаут, чтобы браузер успел понять, 
            // что карточки добавлены изначально скрытыми, и запустил для них анимацию .visible
            setTimeout(() => {
                cards.forEach(card => {
                    card.classList.add('visible');
                });
            }, 10);

        }, 400); // 400мс совпадает с длительностью анимации .removing в CSS
    }
});



const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const menuOverlay = document.getElementById('menuOverlay');

burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
});

mobileMenuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

function closeMenu() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));

        // Базовое время для счета цифр (от 1.2 до 2.5 секунд)
        const numDuration = Math.max(1200, Math.min(2500, target * 12));

        // Плюс закончит движение позже. Добавляем запас времени после остановки цифр
        const totalDuration = numDuration + 500; // +500 мс плавного шлейфа для плюса

        let startTime = null;

        // Защита от переноса строки
        counter.style.whiteSpace = 'nowrap';
        counter.style.display = 'inline-block';

        // Создаем структуру. Начальный сдвиг плюса увеличили до -8px для заметности полета
        counter.innerHTML = `<span class="num-part">0</span><span class="plus-part" style="opacity: 0; display: inline-block; transform: translateX(-8px); will-change: transform, opacity;">+</span>`;

        const numEl = counter.querySelector('.num-part');
        const plusEl = counter.querySelector('.plus-part');

        const updateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const elapsed = timestamp - startTime;

            // --- 1. АНИМАЦИЯ ЦИФР ---
            const numProgress = Math.min(elapsed / numDuration, 1);
            const numEase = numProgress * (2 - numProgress); // Замедление цифр
            const currentNum = numEase * target;

            if (numProgress <= 1) {
                if (target % 1 !== 0) {
                    numEl.textContent = currentNum.toFixed(1);
                } else {
                    numEl.textContent = Math.round(currentNum).toLocaleString();
                }
            }

            // --- 2. АНИМАЦИЯ ПЛЮСА (Старт с 50% времени цифр) ---
            const plusStartDelay = numDuration * 0.5; // Точка старта (половина пути цифр)

            if (elapsed >= plusStartDelay) {
                // Вычисляем прогресс конкретно для плюса
                const plusDuration = totalDuration - plusStartDelay;
                const plusProgress = Math.min((elapsed - plusStartDelay) / plusDuration, 1);

                // Плавное появление (Ease-Out) для плюса
                const plusEase = plusProgress * (2 - plusProgress);

                plusEl.style.opacity = plusEase;
                // Плюс плавно летит от -8px до 0px
                plusEl.style.transform = `translateX(${-8 * (1 - plusEase)}px)`;
            }

            // --- 3. ПРОВЕРКА ОКОНЧАНИЯ ВСЕЙ АНИМАЦИИ ---
            if (elapsed < totalDuration) {
                requestAnimationFrame(updateCounter);
            } else {
                // Финальный аккорд (гарантируем точные значения)
                if (target % 1 !== 0) {
                    numEl.textContent = target.toFixed(1);
                } else {
                    numEl.textContent = target.toLocaleString();
                }
                plusEl.style.opacity = 1;
                plusEl.style.transform = 'translateX(0)';
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}






function handleBookClick(btn, masterId) {
    const container = btn.closest('.booking-container');
    if (!container) return;

    container.classList.toggle('active');

    const details = container.closest('.master-details, .service-details');
    if (!details) return;

    // Если панель уже свободна (max-height: none) — контакты анимируются
    // плавно сами по себе, ничего не трогаем.
    // syncDetailsPanelHeight нужен только если max-height задан числом
    // (например, карточка только что открывалась и ещё не освободила высоту).
    if (details.style.maxHeight && details.style.maxHeight !== 'none') {
        requestAnimationFrame(() => syncDetailsPanelHeight(details));
    }
}



function switchLanguage(lang) {
    currentLang = lang;






    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    const t = translations[lang];



    document.querySelector('[data-lang="book"]').textContent = t.book;

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home') link.textContent = t.home;
        if (href === '#services') link.textContent = t.services;
        if (href === '#masters') link.textContent = t.masters;
        if (href === '#prices') link.textContent = t.prices;
        if (href === '#reviews') link.textContent = t.reviews;
        if (href === '#about') link.textContent = t.about;
    });

    document.querySelector('.hero-title').innerHTML = `${t.heroTitle} <span class="gradient-text">${t.heroGradient}</span><br>${t.heroSubtitle}`;
    document.querySelector('.hero-subtitle').innerHTML = `${t.heroSubtitle2}<br>${t.heroSubtitle3}`;
    document.querySelector('.cta-button').textContent = t.bookNow;
    // document.querySelector('.hero-stats').textContent = t.stats;

    document.querySelectorAll('.advantage-text')[0].textContent = t.premiumQuality;
    document.querySelectorAll('.advantage-text')[1].textContent = t.specialists;
    document.querySelectorAll('.advantage-text')[2].textContent = t.relaxation;

    const servicesTitle = document.querySelector('#services .section-title');
    if (servicesTitle) servicesTitle.textContent = t.services;
    const mastersTitle = document.querySelector('#masters .section-title');
    if (mastersTitle) mastersTitle.textContent = t.masters;
    const pricesTitle = document.querySelector('#prices .section-title');
    if (pricesTitle) pricesTitle.textContent = t.prices;
    const reviewsTitle = document.querySelector('#reviews .section-title');
    if (reviewsTitle) reviewsTitle.textContent = t.reviews;
    const aboutTitle = document.querySelector('#about .section-title');
    if (aboutTitle) aboutTitle.textContent = t.about;

    document.querySelectorAll('.stat-label')[0].textContent = t.customers;
    document.querySelectorAll('.stat-label')[1].textContent = t.experience;
    document.querySelectorAll('.stat-label')[2].textContent = t.rating;
    document.querySelectorAll('.stat-label')[3].textContent = t.position;

    const aboutCtaBtn = document.querySelector('.about-cta-btn');
    if (aboutCtaBtn) aboutCtaBtn.textContent = t.book;

    const addressEl = document.querySelector('.footer-address');
    if (addressEl) {
        addressEl.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.address}`;
    }

    const copyrightEl = document.querySelector('.copyright');
    if (copyrightEl) {
        copyrightEl.textContent = t.copyright;
    }

    renderMasters(null, lang);
    renderServices(lang);

    handleScrollAnimation();
}


function handleTelegramClick(username) {

    const tgButtonMessages = {
    ru: 'Здравствуйте! Здесь должен быть ваш желаемый текст.',
    en: 'Hello! Your desired text should be here.',
    hy: 'Բարև ձեզ: Այստեղ պետք է լինի ձեր ցանկալի տեքստը:'
};

    const cleanUsername = username.replace('@', '');
    
    // 2. Определяем текущий язык сайта. 
    // Обычно он хранится в теге <html lang="ru">. Если у вас другая логика,
    // замените document.documentElement.lang на вашу переменную языка (например: currentLang)
    
    // 3. Достаем нужный текст (если языка нет в списке, сработает русский по умолчанию)
    const messageText = tgButtonMessages[currentLang] || tgButtonMessages['ru'];

    // 4. Кодируем текст, чтобы пробелы и кириллица не сломали ссылку
    const encodedText = encodeURIComponent(messageText);

    // 5. Формируем финальную ссылку с текстом
    const tgUrl = `https://t.me/${cleanUsername}?text=${encodedText}`;

    // 6. Ваша стабильная логика открытия ссылки
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.openTelegramLink) {
        // Открываем чат через Telegram WebApp API (работает внутри бота)
        window.Telegram.WebApp.openTelegramLink(tgUrl);
    } else {
        // Fallback для браузера
        window.open(tgUrl, '_blank');
    }
}


// function handleTelegramClick(username) {
//     const cleanUsername = username.replace('@', '');
//     const tgUrl = `https://t.me/${cleanUsername}`;

//     if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.openTelegramLink) {
//         // Открываем чат через Telegram WebApp API (работает внутри бота)
//         window.Telegram.WebApp.openTelegramLink(tgUrl);
//     } else {
//         // Fallback для браузера
//         window.open(tgUrl, '_blank');
//     }
// }



function handleCallClick(phoneNumber) {
    const cleanPhone = phoneNumber.replace(/[^0-9+]/g, '');
    const telUrl = `tel:${cleanPhone}`;

    const a = document.createElement('a');
    a.href = telUrl;
    a.target = '_blank'; // КЛЮЧЕВОЙ МОМЕНТ: заставляет открыться вне iframe
    a.rel = 'noopener noreferrer';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    renderServices(currentLang);
    renderMasters();
    renderReviews();
    animateCounters();

    setTimeout(() => {
        const mainTitle = document.querySelector('h1.fade-in, .hero h1, .hero-content h1');
        if (mainTitle) {
            mainTitle.classList.add('visible');
        }

    }, 150);
});

