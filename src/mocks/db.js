export const listFilmsEntity = [
    {
        id: 1,
        infoFilmId: 101,
        firstName: 'Темный рыцарь',
        secondName: 'The Dark Knight, 2008, 2 ч 32 мин',
        description1: 'США • фантастика Режиссёр: Кристофер Нолан',
        description2: 'В ролях: Кристиан Бэйл, Хит Леджер',
        grade: '41 940',
    },
    {
        id: 2,
        infoFilmId: 102,
        firstName: '1+1',
        secondName: 'Intouchables 2011, 1 ч 52 мин',
        description1: 'Франция • драма  Режиссёр: Оливье Накаш',
        description2: 'В ролях: Франсуа Клюзе, Омар Си',
        grade: '405 289'
    }
]

export const infoFilmEntity = [
    {
        id: 101,
        listFilmsEntityId: 1,
        title: 'Темный рыцарь (2008)',
        description: 'The Dark Knight18+',
        gradeImg: '',
        grades: '763 108 оценок',
        review: '1059 рецензий',
        aboutFilmEntity: {
            yearProd: 2008,
            country: 'США, Великобритания',
            genre: 'фантастика, боевик, триллер, криминал, драма',
            slogan: '«Добро пожаловать в мир Хаоса!»',
            director: 'Кристофер Нолан',
            script: 'Джонатан Нолан, Кристофер Нолан, Дэвид С. Гойер, ...',
            producer: 'Кристофер Нолан, Чарльз Ровен, Эмма Томас, ...',
            operator: 'Уолли Пфистер',
            composer: 'Джеймс Ньютон Ховард, Ханс Циммер',
            artist: 'Нэйтан Краули, Марк Бартоломью, Джеймс Хэмбридж, ...',
            montage: 'Ли Смит',
            budget: '$185 000 000',
            feesInTheUSA: '$533 345 358',
            feesInTheWorld: '+ $469 700 000 = $1 003 045 358',
            feesInTheRussian: '$8 589 100',
            premiereInRussia: '14 августа 2008, «Каро-Премьер»',
            premiereInWorld: '14 июля 2008, ...',
            releaseOnDVD: '9 декабря 2008, «Юниверсал Пикчерс Рус»',
            releaseOnBluRay: '27 января 2009, «Юниверсал Пикчерс Рус»',
            age: '18+',
            ratingMPAA: 'PG-13',
            time: '2ч 32 мин'
        },
        starring: ['Кристиан Бейл', 'Хит Леджер', 'Аэрон Экхарт', 'Мегги Джилленхол', 'Гари Олдман', 'Майкл Кейн', 'Морган Фриман', 'Чинь Хань', 'Нестор Карбонелл', 'Эрик Робертс'],
        colStarring: '243 актера',
        rolesDuplicated: ['Денис Беспалый', 'Владимир Зайцев', 'Валерий Сторожик', 'Людмила Шувалова', 'Никита Прозоровских'],
        colRolesDuplicated: '29 актеров'
    },

    {
        id: 102,
        listFilmsEntityId: 2,
        title: 'Темный рыцарь (2008)',
        description: 'The Dark Knight18+',
        gradeImg: '',
        grades: '763 108 оценок',
        review: '1059 рецензий',
        aboutFilmEntity: {
            yearProd: 2008,
            country: 'США, Великобритания',
            genre: 'фантастика, боевик, триллер, криминал, драма',
            slogan: '«Добро пожаловать в мир Хаоса!»',
            director: 'Кристофер Нолан',
            script: 'Джонатан Нолан, Кристофер Нолан, Дэвид С. Гойер, ...',
            producer: 'Кристофер Нолан, Чарльз Ровен, Эмма Томас, ...',
            operator: 'Уолли Пфистер',
            composer: 'Джеймс Ньютон Ховард, Ханс Циммер',
            artist: 'Нэйтан Краули, Марк Бартоломью, Джеймс Хэмбридж, ...',
            montage: 'Ли Смит',
            budget: '$185 000 000',
            feesInTheUSA: '$533 345 358',
            feesInTheWorld: '+ $469 700 000 = $1 003 045 358',
            feesInTheRussian: '$8 589 100',
            premiereInRussia: '14 августа 2008, «Каро-Премьер»',
            premiereInWorld: '14 июля 2008, ...',
            releaseOnDVD: '9 декабря 2008, «Юниверсал Пикчерс Рус»',
            releaseOnBluRay: '27 января 2009, «Юниверсал Пикчерс Рус»',
            age: '18+',
            ratingMPAA: 'PG-13',
            time: '2ч 32 мин'
        },
        starring: ['Кристиан Бейл', 'Хит Леджер', 'Аэрон Экхарт', 'Мегги Джилленхол', 'Гари Олдман', 'Майкл Кейн', 'Морган Фриман', 'Чинь Хань', 'Нестор Карбонелл', 'Эрик Робертс'],
        colStarring: '243 актера',
        rolesDuplicated: ['Денис Беспалый', 'Владимир Зайцев', 'Валерий Сторожик', 'Людмила Шувалова', 'Никита Прозоровских'],
        colRolesDuplicated: '29 актеров'
    }
]