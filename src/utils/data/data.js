import { generateRandomId } from "../CreatIdFunc/CreatIdFunc";
import iconDown from "../../assets/icons/headerIcons/downPol.svg";
import RU from "../../assets/icons/headerIcons/RuFlag.svg";
import Eng from "../../assets/icons/headerIcons/EngFlag.svg";

export const navBarContent = [
  { text: "Экосистема", icon: iconDown, pathName: "/ecosystems" },
  { text: "Новости", icon: null, pathName: "/news" },
  { text: "О компании", icon: null, pathName: "/aboutUs" },
  { text: "Контакты", icon: iconDown, pathName: "/contacts" },
];

export const moduleContent = [
  {
    id: generateRandomId(),
    text: "Мониторинг",
    icon: null,
    pathName: "/monitoring",
    description: "Мониторинг рабочих процессов в режиме онлайн",
  },
  {
    id: generateRandomId(),
    text: "Файловый менеджер",
    icon: null,
    pathName: "/fileManager",
    description: "Файлообменник Dolon",
  },
  {
    id: generateRandomId(),
    text: "Геология",
    icon: null,
    pathName: "/geology",
    description: "Мониторинг рабочих процессов в режиме онлайн",
  },
  {
    id: generateRandomId(),
    text: "Маркшейдерия",
    icon: null,
    pathName: "/marksheideria",
    description: "Мощный набор 3D инструментов",
  },
  {
    id: generateRandomId(),
    text: "Бурение",
    icon: null,
    pathName: "/drilling",
    description: "Организация буровых работ",
  },
  {
    id: generateRandomId(),
    text: "Поисковые маршруты",
    icon: null,
    pathName: "/searchRoutes",
    description: "Продвинутый набор инструментов разведки",
  },
  {
    id: generateRandomId(),
    text: "Лаборатория",
    icon: null,
    pathName: "/laboratory",
    description: "Автоматизация работы лаборатории",
  },
  {
    id: generateRandomId(),
    text: "Керносклад",
    icon: null,
    pathName: "/kernosklad",
    description: "Учет и организация хранилища керна",
  },
];

export const contactData = [
  {
    country: "Республика Казахстан, г. Алматы",
    adress: "ул. Тимирязева, 42, к. 15/1, оф. 7",
    phone: "+7 771 225 98 34",
    email: "alexandr.m@dolon.tech",
  },
  {
    country: "Кыргызская Республика, г. Бишкек",
    adress: "ул. Ахунбаева 165",
    phone: "+996 700 173 295",
    email: "satar.t@dolon.tech",
  },
];

export const languages = [
  { id: 11, name: "Русский", icon: RU },
  { id: 12, name: "English", icon: Eng },
];

export const ecoInfo = {
  text: `Dolon совершает революцию в работе с потоками данных в горнорудной
и геологической отрасли, беспрепятственно интегрируя данные из
различных отделов и участков работ компании. Облачные технологии,
которые использует платформа, позволяют специалистам работать с
единой базой данных и иметь доступ к ним, практически с любого
устройства. Эта концепция привела к созданию уникальной экосистемы
Dolon, где все решения интегрированы друг с другом и работают как
единый механизм.`,
};

export const ecoInfoBlocks = [
  {
    text: `Система является веб-ориентированной и кроссплатформенной, что позволяет получить к ней легкий доступ и использовать на любом устройстве.`,
  },
  {
    text: `Гибкость, заложенная в самой основе Dolon, позволяет вам настраивать и адаптировать систему к вашим конкретным производственным задачам и потребностям.`,
  },
  {
    text: `Используя надежные open source решения с открытым исходным кодом, вы не зависите от конкретных СУБД, таких как SQL, Oracle и т.д.`,
  },
  {
    text: `Серверные лицензии не привязаны к конкретным устройствам, поэтому вы можете получить доступ к Dolon из любой точки мира и участка работ.`,
  },
  {
    text: `Если вы вдруг окажетесь без связи, offline режим Dolon позволит вам работать даже без доступа к единой базе данных.`,
  },
];
