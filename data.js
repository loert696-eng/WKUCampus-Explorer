const buildings = [
    {
        id: "b1",
        number: "12",
        lat: 35.9690764,
        lng: 126.9536976,
        names: {
            ko: "대학본부",
            en: "Main Administration Building",
            uz: "Bosh boshqaruv binosi",
            ur: "مین ایڈمنسٹریشن بلڈنگ"
        },
        descriptions: {
            ko: "원광대학교의 중심이 되는 행정 건물입니다. 교무처, 학생처 등 주요 행정 부서가 위치해 있습니다.",
            en: "The central administrative building of Wonkwang University. It houses major administrative departments such as Academic Affairs and Student Affairs.",
            uz: "Vonkvang universitetining markaziy ma'muriy binosi. O'quv ishlari va talabalar ishlari kabi yirik ma'muriy bo'limlarni o'z ichiga oladi.",
            ur: "وانکوانگ یونیورسٹی کی مرکزی انتظامی عمارت۔ اس میں تعلیمی امور اور طلباء کے امور جیسے بڑے انتظامی محکمے شامل ہیں۔"
        },
        hours: {
            ko: "평일 09:00 - 18:00",
            en: "Weekdays 09:00 - 18:00",
            uz: "Ish kunlari 09:00 - 18:00",
            ur: "ہفتے کے دن 09:00 - 18:00"
        }
    },
    {
        id: "b2",
        number: "24",
        lat: 35.967866,
        lng: 126.955983,
        names: {
            ko: "학생회관",
            en: "Student Center",
            uz: "Talabalar markazi",
            ur: "سٹوڈنٹ سینٹر"
        },
        descriptions: {
            ko: "학생들을 위한 다양한 편의 시설과 동아리방, 우체국, 은행 등이 있는 곳입니다.",
            en: "A place with various convenience facilities for students, club rooms, a post office, and a bank.",
            uz: "Talabalar uchun turli xil qulayliklar, klub xonalari, pochta va bank joylashgan joy.",
            ur: "طلباء کے لیے مختلف سہولیات، کلب رومز، پوسٹ آفس اور بینک والی جگہ۔"
        },
        hours: {
            ko: "매일 09:00 - 20:00",
            en: "Everyday 09:00 - 20:00",
            uz: "Har kuni 09:00 - 20:00",
            ur: "روزانہ 09:00 - 20:00"
        }
    },
    {
        id: "b3",
        number: "14-1",
        lat: 35.9703337,
        lng: 126.9553690,
        names: {
            ko: "중앙도서관",
            en: "Central Library",
            uz: "Markaziy kutubxona",
            ur: "مرکزی لائبریری"
        },
        descriptions: {
            ko: "방대한 양의 도서와 열람실을 갖추고 있으며, 학생들의 학습 및 연구를 지원합니다.",
            en: "Equipped with a vast amount of books and reading rooms, supporting students' studies and research.",
            uz: "Talabalar o'qishi va izlanishlarini qo'llab-quvvatlaydigan katta hajmdagi kitoblar va o'qish zallari bilan jihozlangan.",
            ur: "طلباء کی پڑھائی اور تحقیق کی حمایت کرنے والی، کتابوں اور پڑھنے کے کمروں کی ایک بڑی مقدار سے لیس ہے۔"
        },
        hours: {
            ko: "평일 09:00 - 22:00 (열람실 24시간)",
            en: "Weekdays 09:00 - 22:00 (Reading Room 24h)",
            uz: "Ish kunlari 09:00 - 22:00 (O'qish zali 24 soat)",
            ur: "ہفتے کے دن 09:00 - 22:00 (ریڈنگ روم 24 گھنٹے)"
        }
    },
    {
        id: "b4",
        number: "17",
        lat: 35.9668299,
        lng: 126.9547606,
        names: {
            ko: "숭산기념관 (대학교당)",
            en: "Sungsan Memorial Hall",
            uz: "Sungsan xotira zali",
            ur: "سنگسان میموریل ہال"
        },
        descriptions: {
            ko: "원불교 대학교당이 위치해 있으며, 대규모 행사나 강연이 주로 열리는 곳입니다.",
            en: "The Won Buddhism University Temple is located here, and large-scale events or lectures are mainly held here.",
            uz: "Bu yerda Von buddizmi universiteti ibodatxonasi joylashgan bo'lib, asosan keng ko'lamli tadbirlar yoki ma'ruzalar o'tkaziladi.",
            ur: "وون بدھ ازم یونیورسٹی کا مندر یہاں واقع ہے، اور بڑے پیمانے پر تقریبات یا لیکچرز بنیادی طور پر یہاں منعقد ہوتے ہیں۔"
        },
        hours: {
            ko: "행사 일정에 따라 다름",
            en: "Varies by event schedule",
            uz: "Tadbir jadvaliga qarab farq qiladi",
            ur: "تقریب کے شیڈول کے لحاظ سے مختلف ہوتا ہے"
        }
    },
    {
        id: "b5",
        number: "30",
        lat: 35.9730658,
        lng: 126.9577902,
        names: {
            ko: "학생생활관 (기숙사)",
            en: "Student Dormitory",
            uz: "Talabalar yotoqxonasi",
            ur: "طلباء کا ہاسٹل"
        },
        descriptions: {
            ko: "학생들이 거주하는 기숙사 단지입니다. 식당, 편의점, 체력단련실 등을 갖추고 있습니다.",
            en: "A dormitory complex where students reside. It is equipped with a cafeteria, convenience store, and fitness room.",
            uz: "Talabalar yashaydigan yotoqxona majmuasi. Oshxona, qulaylik do'koni va fitnes xonasi bilan jihozlangan.",
            ur: "ایک ہاسٹل کمپلیکس جہاں طلباء رہتے ہیں۔ یہ ایک کیفے ٹیریا، سہولت اسٹور، اور فٹنس روم سے لیس ہے۔"
        },
        hours: {
            ko: "24시간 개방 (외부인 출입제한)",
            en: "Open 24h (Restricted to non-residents)",
            uz: "24 soat ochiq (rezident bo'lmaganlar uchun cheklangan)",
            ur: "24 گھنٹے کھلا ہے (غیر رہائشیوں کے لیے محدود)"
        }
    },
    {
        id: "b6",
        number: "8",
        lat: 35.9685234,
        lng: 126.9599038,
        names: {
            ko: "창의공과대학",
            en: "College of Engineering",
            uz: "Muhandislik kolleji",
            ur: "کالج آف انجینئرنگ"
        },
        descriptions: {
            ko: "공학 분야의 전문 인력을 양성하는 곳으로, 다양한 실험실과 연구실이 있습니다.",
            en: "A place that nurtures professionals in engineering fields, with various laboratories.",
            uz: "Turli laboratoriyalar bilan muhandislik sohasidagi mutaxassislarni tarbiyalaydigan joy.",
            ur: "ایک ایسی جگہ جو مختلف لیبارٹریوں کے ساتھ انجینئرنگ کے شعبوں میں پیشہ ور افراد کی پرورش کرتی ہے۔"
        },
        hours: {
            ko: "수업 시간 외 24시간 개방",
            en: "Open 24h outside class hours",
            uz: "Darsdan tashqari 24 soat ochiq",
            ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے"
        }
    },
    {
        id: "b7",
        number: "3",
        lat: 35.9713047,
        lng: 126.9586771,
        names: {
            ko: "인문대학",
            en: "College of Humanities",
            uz: "Gumanitar fanlar kolleji",
            ur: "کالج آف ہیومینٹیز"
        },
        descriptions: {
            ko: "언어, 문학, 철학 등 인문학의 전당으로 학생들의 자유로운 토론과 학습이 이루어집니다.",
            en: "The hall of humanities where free discussions and learning of students take place.",
            uz: "Talabalarning erkin muhokamalari va o'rganishlari bo'ladigan gumanitar fanlar zali.",
            ur: "انسانیت کا ہال جہاں طلباء کی آزادانہ گفتگو اور سیکھنے کا عمل ہوتا ہے۔"
        },
        hours: {
            ko: "수업 시간 외 24시간 개방",
            en: "Open 24h outside class hours",
            uz: "Darsdan tashqari 24 soat ochiq",
            ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے"
        }
    },
    {
        id: "b8",
        number: "26",
        lat: 35.9696644,
        lng: 126.9545757,
        names: {
            ko: "학생지원관",
            en: "Student Support Center",
            uz: "Talabalarni qo'llab-quvvatlash markazi",
            ur: "اسٹوڈنٹ سپورٹ سینٹر"
        },
        descriptions: {
            ko: "학생들의 학업과 편의를 돕는 여러 부서 및 자유열람실이 위치해 있습니다.",
            en: "Houses various departments and free reading rooms to help students' studies and convenience.",
            uz: "Talabalarning o'qishi va qulayligiga yordam berish uchun turli bo'limlar va bepul o'qish zallarini o'z ichiga oladi.",
            ur: "طلباء کی پڑھائی اور سہولت میں مدد کے لیے مختلف محکمے اور مفت پڑھنے کے کمرے ہیں۔"
        },
        hours: {
            ko: "24시간 상시 개방",
            en: "Open 24h constantly",
            uz: "Doimo 24 soat ochiq",
            ur: "مستقل طور پر 24 گھنٹے کھلا ہے"
        }
    },
    {
        id: "b9",
        number: "20",
        lat: 35.9708467,
        lng: 126.9552207,
        names: { ko: "교학대학", en: "College of Kyohak", uz: "Kyoxak kolleji", ur: "کیوہاک کالج" },
        descriptions: { ko: "원불교학 및 종교학을 연구하는 교학대학입니다.", en: "College of Kyohak studying Won Buddhism and theology.", uz: "Von buddizmi va ilohiyotni o'rganadigan Kyoxak kolleji.", ur: "وون بدھ ازم اور الہیات کا مطالعہ کرنے والا کیوہاک کالج۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    },
    {
        id: "b10",
        number: "51",
        lat: 35.9714569,
        lng: 126.9571384,
        names: { ko: "사회과학대학", en: "College of Social Sciences", uz: "Ijtimoiy fanlar kolleji", ur: "کالج آف سوشل سائنسز" },
        descriptions: { ko: "행정, 정치, 복지 등 사회과학 인재를 양성하는 대학입니다.", en: "College training talents in social sciences like administration and politics.", uz: "Ma'muriyat va siyosat kabi ijtimoiy fanlar bo'yicha mutaxassislarni tayyorlaydigan kollej.", ur: "انتظامیہ اور سیاست جیسے سماجی علوم میں صلاحیتوں کی تربیت دینے والا کالج۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    },
    {
        id: "b11",
        number: "53",
        lat: 35.9710151,
        lng: 126.9575545,
        names: { ko: "경영대학", en: "College of Business", uz: "Biznes kolleji", ur: "کالج آف بزنس" },
        descriptions: { ko: "경제, 경영 등 비즈니스 전문 인력을 육성하는 곳입니다.", en: "A place fostering business professionals in economics and management.", uz: "Iqtisodiyot va boshqaruv bo'yicha biznes mutaxassislarini tayyorlaydigan joy.", ur: "معاشیات اور انتظام میں کاروباری پیشہ ور افراد کی پرورش کرنے والی جگہ۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    },
    {
        id: "b12",
        number: "63",
        lat: 35.9679634,
        lng: 126.9595937,
        names: { ko: "자연과학대학", en: "College of Natural Sciences", uz: "Tabiiy fanlar kolleji", ur: "کالج آف نیچرل سائنسز" },
        descriptions: { ko: "수학, 과학 등 기초 자연과학을 탐구하고 연구하는 대학입니다.", en: "College researching basic natural sciences like math and science.", uz: "Matematika va fan kabi asosiy tabiiy fanlarni o'rganadigan kollej.", ur: "ریاضی اور سائنس جیسے بنیادی قدرتی علوم کی تحقیق کرنے والا کالج۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    },
    {
        id: "b13",
        number: "66",
        lat: 35.9689849,
        lng: 126.9607976,
        names: { ko: "농식품융합대학", en: "College of Agriculture & Food", uz: "Qishloq xo'jaligi va oziq-ovqat kolleji", ur: "کالج آف ایگریکلچر اینڈ فوڈ" },
        descriptions: { ko: "생명 자원과 농식품 분야의 발전을 연구하는 건물입니다.", en: "Building researching advancements in life resources and agriculture.", uz: "Hayotiy resurslar va qishloq xo'jaligidagi yutuqlarni o'rganadigan bino.", ur: "حیاتی وسائل اور زراعت میں پیشرفت کی تحقیق کرنے والی عمارت۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    },
    {
        id: "b14",
        number: "68",
        lat: 35.9669666,
        lng: 126.9595654,
        names: { ko: "약학대학", en: "College of Pharmacy", uz: "Farmatsevtika kolleji", ur: "کالج آف فارمیسی" },
        descriptions: { ko: "약학 전문 지식을 갖춘 약사 및 연구원을 양성합니다.", en: "Trains pharmacists and researchers with specialized pharmaceutical knowledge.", uz: "Ixtisoslashtirilgan farmatsevtik bilimlarga ega bo'lgan farmatsevt va tadqiqotchilarni tayyorlaydi.", ur: "فارمیسی کے خصوصی علم کے ساتھ فارماسسٹ اور محققین کو تربیت دیتا ہے۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    },
    {
        id: "b15",
        number: "69",
        lat: 35.9658104,
        lng: 126.9593636,
        names: { ko: "의과대학", en: "College of Medicine", uz: "Tibbiyot kolleji", ur: "کالج آف میڈیسن" },
        descriptions: { ko: "인류의 건강을 책임질 훌륭한 의료인을 육성하는 대학입니다.", en: "College fostering excellent medical professionals responsible for human health.", uz: "Inson salomatligi uchun mas'ul bo'lgan ajoyib tibbiyot mutaxassislarini tarbiyalaydigan kollej.", ur: "انسانی صحت کے لیے ذمہ دار بہترین طبی پیشہ ور افراد کی پرورش کرنے والا کالج۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    },
    {
        id: "b16",
        number: "74",
        lat: 35.9650601,
        lng: 126.9606308,
        names: { ko: "치과대학", en: "College of Dentistry", uz: "Stomatologiya kolleji", ur: "کالج آف ڈینٹسٹری" },
        descriptions: { ko: "구강 보건 증진에 기여할 우수한 치과의사를 배출합니다.", en: "Produces excellent dentists to contribute to improving oral health.", uz: "Og'iz bo'shlig'i sog'lig'ini yaxshilashga hissa qo'shish uchun ajoyib tish shifokorlarini ishlab chiqaradi.", ur: "زبانی صحت کو بہتر بنانے میں کردار ادا کرنے کے لیے بہترین دندان ساز تیار کرتا ہے۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    },
    {
        id: "b17",
        number: "71",
        lat: 35.9649544,
        lng: 126.9586669,
        names: { ko: "한의과대학", en: "College of Oriental Medicine", uz: "Sharq tabobati kolleji", ur: "کالج آف اورینٹل میڈیسن" },
        descriptions: { ko: "전통 한의학의 발전과 과학화를 이끄는 대학입니다.", en: "College leading the development and scientific progression of traditional Korean medicine.", uz: "An'anaviy koreys tabobatini rivojlantirish va ilmiy o'sishga rahbarlik qiluvchi kollej.", ur: "روایتی کوریائی طب کی ترقی اور سائنسی پیشرفت کی رہنمائی کرنے والا کالج۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    },
    {
        id: "b18",
        number: "72",
        lat: 35.9673382,
        lng: 126.9608567,
        names: { ko: "사범대학", en: "College of Education", uz: "Ta'lim kolleji", ur: "کالج آف ایجوکیشن" },
        descriptions: { ko: "미래 세대를 책임질 참된 교사를 양성하는 요람입니다.", en: "Cradle for nurturing true teachers responsible for future generations.", uz: "Kelajak avlodlar uchun mas'ul bo'lgan haqiqiy o'qituvchilarni tarbiyalash o'chog'i.", ur: "آنے والی نسلوں کے لیے ذمہ دار سچے اساتذہ کی پرورش کا گہوارہ۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    },
    {
        id: "b19",
        number: "22",
        lat: 35.9704246,
        lng: 126.9563036,
        names: { ko: "법학전문대학원", en: "Law School", uz: "Huquqshunoslik maktabi", ur: "لا اسکول" },
        descriptions: { ko: "전문적인 법률 지식과 실무를 겸비한 법조인을 양성합니다.", en: "Trains legal professionals with professional legal knowledge and practice.", uz: "Kasbiy huquqiy bilim va amaliyotga ega bo'lgan yuristlarni tayyorlaydi.", ur: "پیشہ ورانہ قانونی علم اور مشق کے ساتھ قانونی پیشہ ور افراد کو تربیت دیتا ہے۔" },
        hours: { ko: "수업 시간 외 24시간 개방", en: "Open 24h outside class hours", uz: "Darsdan tashqari 24 soat ochiq", ur: "کلاس کے اوقات سے باہر 24 گھنٹے کھلا ہے" }
    }
];
