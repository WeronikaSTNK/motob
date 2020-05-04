import moto1 from "./images/hondaCB125Fblack.png";
import moto2 from "./images/HondaCB500F.jpeg";
import moto3 from "./images/hondaVT125black.jpg";
import moto4 from "./images/HondaXL125Varadero.jpeg";
import moto5 from "./images/YamahaFZ6NFazer.jpeg";
import acc1 from "./images/helmet.png";
import acc2 from "./images/gloves.png";
import acc3 from "./images/intercom.png";
import acc4 from "./images/navi.png";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "Honda CB125F",
      accessorize: false,
      price1: 150,
      price2:250,
      priceWeek: 600,
      deposit: 800,
      displacement: '124,7ccm',
      motorType: "chłodzony powietrzem, 1-cylindrowy, 4-suwowy, 2-zaworowy, OHC, z wałkiem wyrównoważającym",
      maxPower: "10,6 KM przy 7750 obr/min",
      maxTorque: "10,2 Nm przy 6250 obr/min",
      acceleration0to100: "3.6 sekundy",
      gearbox: "5-stopniowa",
      secondaryTransmission: "O-ring łańcuch",
      fuelConsumptionPer100km: "1,9L",
      fuelTanCapacity: 13,
      description:"Mały miejski motocykl, który idealnie radzi sobie w korkach i na krótkich trasach. Dzięki połączeniu niewielkiej masy, małych rozmiarów, 5-cio biegowej skrzyni i silnika o pojemności 125ccm otrzymaliśmy perfekcyjnie zwrotny, zwinny i wygodny motocykl, którym może się poruszać każdy posiadacz prawa jazdy kat. B ze stażem nie krótszym niż 3 lata!",
      images: [
        {
          fields: {
            file: {
              url: moto1,
            },
          },
        },
      ],
      featured: true,
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Honda CB500F",
      accessorize: false,
      price1: 200,
      price2: 330,
      priceWeek: 850,
      deposit:1400,
      anotherDay: 130,
      displacement: 471,
      motorType: "chłodzony cieczą, rzędowy 2-cylindrowy, 8-zaworowy, DOHC",
      maxPower: "47,6KM przy 8500 obr/min",
      maxTorque: "43 Nm przy 7000 obr/min",
      acceleration0to100: "4.8 sekundy",
      gearbox: 6,
      secondaryTransmission: "O-ring łańcuch",
      fuelConsumptionPer100km: 3.5,
      fuelTanCapacity: 17.7,
      description:
        "Łagodny mieszczuch którym można poruszać się na kat. A2. Idealny sprzęt dla wszystkich motocyklistów którzy dopiero zaczynają swoją przygodę lub wracają po długiej przerwie, ale nie tylko. Lekki, zwinny,  zwrotny, posiada ABS i mało pali! Czy trzeba czegoś więcej do pokonywania zakorkowanych ulic miasta? Dzięki zaledwie 180kg wagi przypadnie do gustu większości motocyklistek!",
      images: [
        {
          fields: {
            file: {
              url: moto2,
            },
          },
        },
      ],
      featured: true,
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "Honda VT125",
      accessorize: false,
      price1: 150,
      price2: 250,
      priceWeek: 600,
      anotherDay: 100,
      deposit:800,
      displacement: 124,
      motorType:
        "chłodzony cieczą, 2-cylindrowy, układ widlasty, 8-zaworowy, SOHC",
      maxPower: "15 KM przy 11000 obr/min",
      maxTorque: "10,5 Nm przy 9000 obr/min",
      gearbox: 5,
      secondaryTransmission: "O-ring łańcuch",
      fuelConsumptionPer100km: 3,
      fuelTanCapacity: 14.5,
      description:
        "Jest to jeden z najlepszych motocykli w klasie 125ccm. Honda została perfekcyjnie zaprojektowana co sprawia że wyróżnia się wśród innych jednośladów. Rozmiary i wykończenie Shadow'a skutecznie potrafią zmylić nie jednego doświadczonego motocyklistę odnośnie jego pojemności, w czym dodatkowo pomaga dwu cylindrowy widlasty silnik. Obok tego motocykla nie da się przejść obojętnie. ",
      images: [
        {
          fields: {
            file: {
              url: moto3,
            },
          },
        },
      ],
      featured: true,
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "Honda XL125 Varadero",
      accessorize: false,
      price1: 150,
      price2: 250,
      priceWeek: 600,
      anotherDay: 100,
      deposit: 800,
      displacement: 124,
      motorType:
        "chłodzony cieczą, 2-cylindrowy, układ widlasty, 8-zaworowy, SOHC",
      maxPower: "15 KM przy 11000 obr/min",
      maxTorque: "10 Nm przy 8500 obr/min",
      gearbox: 5,
      secondaryTransmission: "O-ring łańcuch",
      fuelConsumptionPer100km: 3.5,
      fuelTanCapacity: 17,
      description:
        " Małe Wiaderko bo tak jest potocznie nazywana  Honda Varadero 125, jest super alternatywą dla osób chcących zaznać turystyki motocyklowej nie posiadając prawa jazdy kat. A. Motocykl świetnie odnajduje się zarówno na asfalcie jak i po za nim, nie bez powodu jego mocniejsza odmiana (Varadero 1000) jest bardzo ceniona wśród entuzjastów dalszych wycieczek na dwóch kołach. Motocykl posiada jeden z lepszych silników tej pojemności, czyli znaną z Hondy Shadow jednostkę w układzie V2. ",
      images: [
        {
          fields: {
            file: {
              url: moto4,
            },
          },
        },
      ],
      featured: true,
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      accessorize: false,
      name: "Yamaha FZ6N Fazer",
      price1: 200,
      price2: 330,
      priceWeek: 850,
      anotherDay: 130,
      deposit: 1400,
      displacement: 600,
      motorType: "chłodzony cieczą, rzędowy 4-cylindrowy, 16-zaworowy, DOHC",
      maxPower: "98 KM przy 12 000 obr/min",
      maxTorque: "63 Nm przy 10 000 obr/min",
      acceleration0to100: "3.6 sekundy",
      gearbox: 6,
      secondaryTransmission: "O-ring łańcuch",
      fuelConsumptionPer100km: 5,
      fuelTanCapacity: 19.4,
      description:
        "Uniwersalny motocykl, który odnajdzie się w każdych warunkach. Wygodna pozycja i zapas mocy, sprawiają że możemy w pełni delektować się jazdą na długich dystansach. Natomiast kiedy już wjedziemy do miasta, Yamaha oferuje nam niezwykłą swobodę oraz lekkość w prowadzeniu, a piękny wygląd i dźwięk silnika przyciąga spojrzenia przechodniów.",
      images: [
        {
          fields: {
            file: {
              url: moto5,
            },
          },
        },
      ],
      featured: true,
    },
  },

  {
    sys: {
      id: "7",
    },
    fields: {
      accessorize: true,
      name: "Interkom motocyklowy Freed Conn T-MAXS",
      price: 20,
      description:
        "Interkom motocyklowy to urządzenie do komunikacji między wieloma kaskami motocyklowymi. Poprzez słuchawki oraz mikrofon montowany w kasku możemy komunikować się z drugą osobą, podłączyć nawigację i telefon za pomocą bluetooth. Model który posiadamy w ofercie cechuje możliwość połączenia 6'ciu interkomów naraz w trybie konferencji full duplex. Sprzęt jest wodoodporny, a zasięg połączenia sięga do 800m co umożliwia dobrą komunikację między motocyklami",
      images: [
        {
          fields: {
            file: {
              url: acc3,
            },
          },
        },
      ],
      featured: false,
    },
  },

  {
    sys: {
      id: "6",
    },
    fields: {
      accessorize: true,
      name: "Rękawice motocyklowe",
      price: 10,
      description:
        "Oferujemy do wypożyczenia rękawice motocyklowe takich znanych marek jak Rainers czy Buse. Rękawicę są wygodne ale przede wszystkim bardzo dobrze chronią dłonie w niepożądanych sytuacjach. Posiadamy różne rozmiary więc nie powinno być problemu z dobraniem odpowiednich rękawic do każdego klienta.",
      images: [
        {
          fields: {
            file: {
              url: acc2,
            },
          },
        },
      ],
      featured: false,
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      accessorize: true,
      name: "Nawigacja Motocyklowa Vordon M-435",
      price: 20,
      description:
        "Wodoodporna nawigacja motocyklowa firmy Vordon. Jeden z niewielu sprzętów zaprojektowanych z myślą o motocyklistach. Dzięki oryginalnemu systemowi mocującemu, przystosowanemu do kierownicy motocykla, montaż jest bardzo prosty i szybki a nawigacja siedzi w uchwycie solidnie. Urządzenie posiada system bluetooth, dzięki czemu możemy podczas jazdy słuchać nie tylko komunikatów ale również muzyki.",
      images: [
        {
          fields: {
            file: {
              url: acc4,
            },
          },
        },
      ],
      featured: false,
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
      accessorize: true,
      name: "Kask motocyklowy",
      price: 10,
      description:
        "Interkom motocyklomi motocyklowymi. Poprzez słuchawki oraz mikrofon montowany w kasku możemy komunikować się z drugą osobą, podłączyć nawigację i telefon za pomocą bluetooth. Model który posiadamy w ofercie cechuje możliwość połączenia 6'ciu interkomów naraz w trybie konferencji full duplex. Sprzęt jest wodoodporny, a zasięg połączenia sięga do 800m co umożliwia dobrą komunikację między motocyklami",
      images: [
        {
          fields: {
            file: {
              url: acc1,
            },
          },
        },
      ],
      featured: false,
    },
  },

];
