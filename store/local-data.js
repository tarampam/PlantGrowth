import {images, layerImages, filodendronImages, ficusImages, pileaImages, sansewieraImages} from "../theme/images";
import Plant from "../models/plants";

export const SIMULATOR_PLANT = [
    {id:'1', title:'Monstera', gridImage: images.monstera, initialImage: images.initialPlant, levelTwoImage: images.monsteraLevelTwo,
        levelThreeImage: images.monsteraLevelThree,
        overwateringLevelOne: images.overwateringLevelOne,
        overwateringLevelTwo: images.overwateringMonsteraLevelTwo,
        overwateringLevelThree: images.overwateringMonsteraLevelThree,
        wiltingLevelOne: images.wiltingLevelOne,
        wiltingLevelTwo: images.wiltingMonsteraLevelTwo,
        wiltingLevelThree: images.wiltingMonsteraLevelThree,
        deadPlantLevelOne: images.deadPlantLevelOne,
        sickPlantImage: images.sickPlant,
        correctGround: [
            {numberOfLayer: 1, idGround: 3},
            {numberOfLayer: 2, idGround: 3},
            {numberOfLayer: 3, idGround: 1},
            {numberOfLayer: 4, idGround: 4},
            {numberOfLayer: 5, idGround: 5},
        ],
        maxLighting: 100,
        minLighting: 25,
        sprayingRequire: 3,
        maxHumidity: 70,
        minHumidity: 20,
        decreaseHumidityRate: 5,
        diseaseRate: 1,
        diseaseArray: ['plamistość liści','pędziorki'],
        fertilizerDuration: 21,
        fertilizerType: ['Nawóz mineralny do roślin domowych o ozdobnych liściach'],
    },
    {id:'2', title:'Pilea', gridImage:images.pilea, initialImage: pileaImages.pileaLevelOne,levelTwoImage: pileaImages.pileaLevelTwo,
        levelThreeImage: pileaImages.pileaLevelThree,
        overwateringLevelOne: pileaImages.overwateringPileaLevelOne,
        overwateringLevelTwo: pileaImages.overwateringPileaLevelTwo,
        overwateringLevelThree: pileaImages.overwateringPileaLevelThree,
        wiltingLevelOne: pileaImages.wiltingPileaLevelOne,
        wiltingLevelTwo: pileaImages.wiltingPileaLevelTwo,
        wiltingLevelThree: pileaImages.wiltingPileaLevelThree,
        deadPlantLevelOne: pileaImages.deadPileaLevelOne,
        sickPlantImage: images.sickPlant,
        correctGround: [
            {numberOfLayer: 1, idGround: 6},
            {numberOfLayer: 2, idGround: 6},
            {numberOfLayer: 3, idGround: 6},
            {numberOfLayer: 4, idGround: 2},
            {numberOfLayer: 5, idGround: 7},
        ],
        maxLighting: 82,
        minLighting: 46,
        sprayingRequire: 2,
        maxHumidity: 60,
        minHumidity: 10,
        decreaseHumidityRate: 4,
        diseaseRate: 2,
        diseaseArray: ['szara pleśń','pędziorki','wełnowce'],
        fertilizerDuration: 21,
        fertilizerType: ['Nawóz mineralny do roślin domowych o ozdobnych liściach'],
    },
    {id:'3', title:'Filodendron', gridImage:images.filodendron, initialImage: filodendronImages.filodendronLevelOne,levelTwoImage: filodendronImages.filodendronLevelTwo,
        levelThreeImage: filodendronImages.filodendronLevelThree,
        overwateringLevelOne: filodendronImages.overwateringFilodendronLevelOne,
        overwateringLevelTwo: filodendronImages.overwateringFilodendronLevelTwo,
        overwateringLevelThree: filodendronImages.overwateringFilodendronLevelThree,
        wiltingLevelOne: filodendronImages.wiltingFilodendronLevelOne,
        wiltingLevelTwo: filodendronImages.wiltingFilodendronLevelTwo,
        wiltingLevelThree: filodendronImages.wiltingFilodendronLevelThree,
        deadPlantLevelOne: filodendronImages.deadFilodendronLevelOne,
        sickPlantImage: images.sickPlant,
        correctGround: [
            {numberOfLayer: 1, idGround: 3},
            {numberOfLayer: 2, idGround: 3},
            {numberOfLayer: 3, idGround: 1},
            {numberOfLayer: 4, idGround: 4},
            {numberOfLayer: 5, idGround: 5},
        ],
        maxLighting: 82,
        minLighting: 46,
        sprayingRequire: 2,
        maxHumidity: 50,
        minHumidity: 20,
        decreaseHumidityRate: 3,
        diseaseRate: 1,
        diseaseArray: ['plamistość liści','wełnowce'],
        fertilizerDuration: 10,
        fertilizerType: ['Nawóz mineralny do roślin domowych o ozdobnych liściach'],
    },
    {id:'4', title:'Fikus benjamina', gridImage:images.fikus, initialImage: ficusImages.ficusLevelOne,levelTwoImage: ficusImages.ficusLevelTwo,
        levelThreeImage: ficusImages.ficusLevelThree,
        overwateringLevelOne: ficusImages.overwateringFicusLevelOne,
        overwateringLevelTwo: ficusImages.overwateringFicusLevelTwo,
        overwateringLevelThree: ficusImages.overwateringFicusLevelThree,
        wiltingLevelOne: ficusImages.wiltingFicusLevelOne,
        wiltingLevelTwo: ficusImages.wiltingFicusLevelTwo,
        wiltingLevelThree: ficusImages.wiltingFicusLevelThree,
        deadPlantLevelOne: ficusImages.deadFicusLevelOne,
        sickPlantImage: images.sickPlant,
        correctGround: [
            {numberOfLayer: 1, idGround: 2},
            {numberOfLayer: 2, idGround: 2},
            {numberOfLayer: 3, idGround: 3},
            {numberOfLayer: 4, idGround: 4},
            {numberOfLayer: 5, idGround: 6},
        ],
        maxLighting: 110,
        minLighting: 80,
        sprayingRequire: 2,
        maxHumidity: 50,
        minHumidity: 10,
        decreaseHumidityRate:2,
        diseaseRate: 1,
        diseaseArray: ['plamistość liści','korkowatość liści','pędziorki','wciornastki'],
        fertilizerDuration: 14,
        fertilizerType: ['Nawóz mineralny do roślin domowych o ozdobnych liściach'],
    },
    {id:'5', title:'Sansewieria', gridImage:images.sansewiera, initialImage: sansewieraImages.sansewieraLevelOne,levelTwoImage: sansewieraImages.sansewieraLevelTwo,
        levelThreeImage: sansewieraImages.sansewieraLevelThree,
        overwateringLevelOne: sansewieraImages.overwateringSansewieraLevelOne,
        overwateringLevelTwo: sansewieraImages.overwateringSansewieraLevelTwo,
        overwateringLevelThree: sansewieraImages.overwateringSansewieraLevelThree,
        wiltingLevelOne: sansewieraImages.wiltingSansewieraLevelOne,
        wiltingLevelTwo: sansewieraImages.wiltingSansewieraLevelTwo,
        wiltingLevelThree: sansewieraImages.wiltingSansewieraLevelThree,
        deadPlantLevelOne: sansewieraImages.deadSansewieraLevelOne,
        sickPlantImage: images.sickPlant,
        correctGround: [
            {numberOfLayer: 1, idGround: 6},
            {numberOfLayer: 2, idGround: 6},
            {numberOfLayer: 3, idGround: 6},
            {numberOfLayer: 4, idGround: 2},
            {numberOfLayer: 5, idGround: 7},
        ],
        maxLighting: 120,
        minLighting: 25,
        sprayingRequire: 1,
        maxHumidity: 70,
        minHumidity: 5,
        decreaseHumidityRate: 1,
        diseaseRate: 1,
        diseaseArray: ['pędziorki','wciornastki','wełnowce'],
        fertilizerDuration: 30,
        fertilizerType: ['Nawóz mineralny do roślin domowych o ozdobnych liściach', 'Nawóz do kaktusów i sukulentów'],
    },
];

export const GROUND_ITEMS = [
    {
        id: 1,
        label: 'Podłoże uniwersalne z torfu wysokiego',
        images: [layerImages.potTorfLayer1,layerImages.potTorfLayer2,layerImages.potTorfLayer3,layerImages.potTorfLayer4,layerImages.potTorfLayer5],
        soilFertility: 1,
    },
    {
        id: 2,
        label: 'Wysokiej jakości podłoże z torfu wysokiego',
        images: [layerImages.potTorfLayer1,layerImages.potTorfLayer2,layerImages.potTorfLayer3,layerImages.potTorfLayer4,layerImages.potTorfLayer5],
        soilFertility: 1,
    },
    {
        id: 3,
        label: 'Czips kokosowy',
        images: [layerImages.potCoconutLayer1,layerImages.potCoconutLayer2,layerImages.potCoconutLayer3,layerImages.potCoconutLayer4,layerImages.potCoconutLayer5],
        soilFertility: 1,
    },
    {
        id: 4,
        label: 'Keramzyt',
        images: [layerImages.potKermazytLayer1,layerImages.potKermazytLayer2,layerImages.potKermazytLayer3,layerImages.potKermazytLayer4,layerImages.potKermazytLayer5],
        soilFertility: 0,
    },
    {
        id: 5,
        label: 'Perlit',
        images: [layerImages.potPerlitLayer1,layerImages.potPerlitLayer2,layerImages.potPerlitLayer3,layerImages.potPerlitLayer4,layerImages.potPerlitLayer5],
        soilFertility: 0,
    },
    {
        id: 6,
        label: 'Piasek bądź drobny żwir',
        images: [layerImages.potGritLayer1,layerImages.potGritLayer2,layerImages.potGritLayer3,layerImages.potGritLayer4,layerImages.potGritLayer5],
        soilFertility: 0,
    },
    {
        id: 7,
        label: 'Mieszanka perlitu oraz keramzytu',
        images: [layerImages.potKermazytLayer1,layerImages.potKermazytLayer2,layerImages.potKermazytLayer3,layerImages.potKermazytLayer4,layerImages.potKermazytLayer5],
        soilFertility: 0,
    },
];

export const wateringList = [
    {
        id: 1,
        label: 'Podlej kwiatka',
    },
    {
        id: 2,
        label: 'Spryskaj kwiatka wodą',
    }
];

export const fertilizerList = [
    {
        id: 3,
        label: 'Nawóz mineralny do roślin domowych o ozdobnych liściach',
    },
    {
        id: 4,
        label: 'Nawóz do kaktusów i sukulentów',
    },
    {
        id: 5,
        label: 'Nawóz do roślin kwitnących',
    }
]

export const diseaseList = [
    {
        id: 6,
        label: 'Preparat na szarą pleśń',
    },
    {
        id: 7,
        label: 'Spray grzybobójczy',
    },
    {
        id: 8,
        label: 'Spray na choroby i szkodniki',
    },
]

export const deleteList = [
    {
        id: 9,
        label: 'Usuń roślinę',
    },
]

export const cureDiseaseMap = new Map([
    ['plamistość liści',diseaseList[1]],
    ['korkowatość liści',diseaseList[1]],
    ['szara pleśń',diseaseList[0]],
    ['pędziorki',diseaseList[2]],
    ['wciornastki',diseaseList[2]],
    ['wełnowce',diseaseList[2]],
])


export const PLANTS = [
    new Plant(
        'p1',
        'Monstera Dziurawa',
        'małe wymagania glebowe, przepuszczalna',
        'półcień, cień',
        'https://zielonyogrodek.pl/i/images/6/9/7/d2FjPTc3MHgx_src_88697-Monstera-dziurawa-fot.-Farah-Ghazal---Burst.jpg',
        'gleba umiarkowanie wilgotna',
        [
            '1. 60% czipsu kokosowego',
            '2. 20% podłoża uniwersalnego z torfu wysokiego',
            '3. 10% keramzytu',
            '4. 10% perlitu',
        ],
        [
            'Monstera dziurawa (Monstera deliciosa) to gatunek pnącza należący do rodziny obrazkowatych (Araceae). ' +
            'Rodzaj monstera obejmuje około 30 gatunków roślin tropikalnych, zawsze zielonych. ' +
            'Gatunki te występują w Ameryce Środkowej i Indiach Zachodnich, a sama monstera dziurawa pochodzi z Meksyku.',
            'Monstera dziurawa jest rośliną tolerancyjną na różne warunki. ' +
            'Nie lubi bezpośredniego nasłonecznienia – najbardziej odpowiada jej półcień, ale daje sobie radę również w mocno cienistych miejscach. ' +
            'Należy przy tym pamiętać, że przy niedostatecznej ilości światła liście są małe i bez wcięć.',
            'Optymalna temperatura do wzrostu to 18-24 °C, zimą temperatura minimalna to 10 °C.',
            'W okresie wzrostu roślinę należy podlewać umiarkowanie dopiero wtedy, kiedy ziemia przeschnie po wcześniejszym podlewaniu.',
            'Liście monstery dziurawej wymagają częstego zraszania miękką wodą.',
            'Roślinę należy nawozić od wiosny do jesieni nawozem do roślin zielonych.',
        ],
        [
            'Monstera dziurawa jest często wybierana do biur i mieszkań (najlepiej rośnie na stanowisku oddalonym od okna o 2-3 m.). ',
        ],
    ),

    new Plant(
        'p2',
        'Sansewiera Walcowata',
        'przepuszczalna, piaszczysto-gliniasta',
        'słońce, półcień, cień',
        'https://zielonyogrodek.pl/i/images/0/8/3/d2FjPTc3MHgx_src_81083-Sansevieria-walcowata-fot.-Flora-Dania.jpg',
        'gleba umiarkowanie wilgotna, gleba umiarkowanie sucha',
        [
            '1. Drobny żwir 50%.',
            '2. Wysokiej jakości podłoże z torfu wysokiego 20%.',
            '3. Mieszanka perlitu oraz keramzytu (w stosunku 1:1) 30%.',
        ],
        [
            'Sansewieria walcowata, cylindryczna (Sansevieria cylindrica) inaczej nazywana wężownicą, należy do rodziny agawowatych (Agavaceae). ' +
            'Jest blisko spokrewniona z sansewierią gwinejską i również pochodzi z Afryki.',
            'Roślina ta najlepiej rośnie na słonecznym stanowisku – lubi pełne słońce, znosi jednak stanowiska półcieniste. ' +
            'Dobrze rośnie w temperaturze pokojowej. Zimą minimalna temperatura to 13 °C.',
            'Lubi umiarkowane podlewanie, ale wytrzymuje bez problemu długie okresy suszy. ' +
            'Pomiędzy podlewaniami należy pozwolić przeschnąć górnej warstwie podłoża w doniczce. ' +
            'Roślinę można nawozić (od wiosny do jesieni), raz na miesiąc nawozem do roślin o zielonych liściach.',
            'Ze względu na swoją dużą odporność zwany jest "rośliną ze stali". Może stać w suchym pomieszczeniu, na pełnym słońcu i z małą ilością wody. ' +
            'Niczym wielbłąd, roślina ta gromadzi ją w swoich mięsistych liściach, by korzystać z niej w dowolnej chwili.',
        ],
        [
            'Doskonale wygląda w nowoczesnych wnętrzach i nie wymaga zbytniej pielęgnacji. ' +
            'Roślina bardzo dekoracyjna, dobrze wygląda nawet tam gdzie inne gatunki nie chcą rosnąć: w biurach, halach fabrycznych, na korytarzach.',
        ]
    ),
    new Plant(
        'p3',
        'Pilea peperomiowata/ Pieniążek',
        'żyzna, przepuszczalna',
        'półcień',
        'https://zielonyogrodek.pl/i/images/1/5/8/d2FjPTc3MHgx_src_86158-Pilea-peperomiowata-fot.-Floradania.dk.jpg',
        'gleba umiarkowanie wilgotna',
        [
            '1. Drobny żwir 50%.',
            '2. Wysokiej jakości podłoże z torfu wysokiego 20%.',
            '3. Mieszanka perlitu oraz keramzytu (w stosunku 1:1) 30%.',
        ],
        [
            'Pilea peperomiowata preferuje półcieniste stanowisko z rozproszonym światłem oraz żyzne, przepuszczalne,' +
            ' lekko wilgotne podłoże. Bardzo lubi też wilgotne powietrze, dlatego jej doniczkę warto ustawić na podstawce' +
            ' z wilgotnymi kulkami keramzytu lub umieścić w pobliżu nawilżacza powietrza. ',
            'Roślinie należy też przez cały rok zapewnić dość wysoką temperaturę (ok. 20-24°C),' +
            ' która może być nieco niższa jedynie zimą (ok. 15-18°).',
            'Pilea rzadko bywa atakowana przez choroby lub szkodniki, ale jest bardzo wrażliwa na błędy uprawowe.',
            'Nie lubi przycinania, gdyż wtedy jej pęd główny może zagniwać.',
            'Źle znosi też niskie temperatury (poniżej 10°C) i zimne przeciągi, na które reaguje zrzucaniem liści. ' +
            'Toleruje przejściową suszę, ale jest wrażliwa na zalanie (w mokrej ziemi korzenie łatwo gniją). ',
            'Powinna być umiarkowanie nawożona szczególnie w okresie wzrostu.',
        ],
        [
            'Pilea peperomiowata to idealna roślina pokojowa. Pięknie prezentuje się w ładnej doniczce jako soliter, ' +
            'umieszczony na komodzie lub okiennym parapecie.',
        ],
    ),
    new Plant(
        'p4',
        'Fikus benjamina',
        'żyzna, próchniczna, przepuszczalna',
        'słońce',
        'https://zielonyogrodek.pl/i/images/6/7/7/d2FjPTc3MHgx_src_79677-Figowiec-benjamina-fikus-paczcy-fot.-Floradania.dk.jpg',
        'gleba umiarkowanie wilgotna',
        [
            '1. Wysokiej jakości podłoże z torfu wysokiego 50%',
            '2. Czips kokosowy 20%.',
            '3. Keramzyt 20%.',
            '4. Piasek bądź drobny żwir 10%.'
        ],
        [
            'Jest łatwy w pielęgnacji choć równocześnie znany jest z tego, że łatwo zrzuca liście. ',
            'Fikus benjamina lubi dużą ilość światła, ale nie należy ustawiać go przy oknie wychodzącym ' +
            'na południe, gdyż nie znosi silnego i bezpośredniego nasłonecznienia. Fikus przyzwyczaja się do ' +
            'miejsca, w którym stoi i do kierunku padania światła.',
            'Fikus benjamina dobrze rośnie w temperaturze pokojowej.',
            'Roślina ta potrzebuje żyznego podłoża – przepuszczalnego, zawierającego dużo próchnicy i substancji pokarmowych.',
            'Woda do podlewania fikusa benjamina powinna być miękka, najlepiej przegotowana. Podlewamy roślinę wtedy, gdy ' +
            'powierzchnia ziemi lekko przeschnie. Fikusy lubią być zraszane, co przy okazji przypomina nam o tym, aby wycierać ' +
            'kurz z ich liści.',
            'Fikus lubi być regularnie nawożony (raz na 2 tygodnie nawozem do roślin o zielonych liściach).',
        ],
        [
            'Figowce doskonale nadają się do tworzenia małych kompozycji z innymi roślinami doniczkowymi czy formowania drzewek bonsai. ' +
            'Nowe odmiany różnią się wielkością, kształtem oraz kolorem liści – zwykle są ciemno zielone, ale mogą być również żółto- lub biało-zielone.',
        ],
    ),
    new Plant(
        'p5',
        'Filodendron',
        'torfowa, żyzna, przepuszczalna',
        'półcień',
        'https://zielonyogrodek.pl/i/images/3/9/0/d2FjPTc3MHgx_src_85390-Filodendron-pncy-fot.-Floradania.dk.jpg',
        'gleba umiarkowanie wilgotna',
        [
            '1. 60% czipsu kokosowego',
            '2. 20% podłoża uniwersalnego z torfu wysokiego',
            '3. 10% keramzytu',
            '4. 10% perlitu',
        ],
        [
            'Filodendrony najlepiej rosną w rozproszonym świetle (bardzo źle znoszą bezpośrednie słońce!) i dużej wilgotności powietrza.',
            'Rośliny przez okres wiosny i lata potrzebują sporo wody – musimy je podlewać umiarkowanie ale często. Lubi zraszanie miękką wodą (np. deszczówką).',
            'Pnącza te wymagają nawożenia. W okresie od kwietnia do sierpnia powinniśmy stosować naprzemiennie nawozy mineralne i organiczne. Maja szczególne zapotrzebowanie na magnez.',
            'Filodendrony nie przechodzą spoczynku – w okresie zimy możemy je przestawić bliżej światła oraz zmniejszyć częstotliwość podlewania.',
            'Są czasem atakowane przez przędziorki i patogeny (bakterie i grzyby) powodujące plamistość liści.',
        ],
        [
            'Egzotyczne pnącza doskonale nadają się do nowoczesnych wnętrz. ' +
            'Są świetne do pokoi dziennych i sypialni. Uprawiane w widnych łazienkach powinny stać na miseczce z wodą, aby parująca woda zapewniała ' +
            'im odpowiednie warunki.\n' +
            '\n' +
            'Na terenach Amazonii filodendrony są bardzo rozpowszechnione i używane w wielu dziedzinach – od medycyny ludowej na problemy skórne po ' +
            'wytwarzanie plecionych koszy i lin (z korzeni powietrznych).',
        ],
    ),
];

export const mapOfSettings = new Map([
    ['Pora roku',[
        {label: 'wiosna'},
        {label: 'lato'},
        {label: 'jesień'},
        {label: 'zima'}
    ]],
    ['Strona świata pokoju',[
        {label: 'północ'},
        {label: 'południe'},
        {label: 'wschód'},
        {label: 'zachód'}
    ]],
])