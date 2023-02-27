import { generateRandomId } from "../CreatIdFunc/CreatIdFunc";
import iconDown from "../../assets/icons/headerIcons/downPol.svg";
import RU from "../../assets/icons/headerIcons/RuFlag.svg";
import Eng from "../../assets/icons/headerIcons/EngFlag.svg";

export const navBarContent = [
  { text: "NavBar.eco", icon: iconDown, pathName: "/ecosystems" },
  { text: "NavBar.news", icon: null, pathName: "/news" },
  { text: "NavBar.about", icon: null, pathName: "/aboutUs" },
  { text: "NavBar.contacts", icon: iconDown, pathName: "/contacts" },
];

export const moduleContent = [
  {
    id: generateRandomId(),
    text: "Modules.monitoring",
    icon: null,
    pathName: "/monitoring",
    description: "ModuleDescriptions.monitoring",
  },
  {
    id: generateRandomId(),
    text: "Modules.fileManager",
    icon: null,
    pathName: "/fileManager",
    description: "ModuleDescriptions.fileManager",
  },
  {
    id: generateRandomId(),
    text: "Modules.geology",
    icon: null,
    pathName: "/geology",
    description: "ModuleDescriptions.geology",
  },
  {
    id: generateRandomId(),
    text: "Modules.marksheideria",
    icon: null,
    pathName: "/marksheideria",
    description: "ModuleDescriptions.marksheideria",
  },
  {
    id: generateRandomId(),
    text: "Modules.drilling",
    icon: null,
    pathName: "/drilling",
    description: "ModuleDescriptions.drilling",
  },
  {
    id: generateRandomId(),
    text: "Modules.searchRoutes",
    icon: null,
    pathName: "/searchRoutes",
    description: "ModuleDescriptions.searchRoutes",
  },
  {
    id: generateRandomId(),
    text: "Modules.laboratory",
    icon: null,
    pathName: "/laboratory",
    description: "ModuleDescriptions.laboratory",
  },
  {
    id: generateRandomId(),
    text: "Modules.kernosklad",
    icon: null,
    pathName: "/kernosklad",
    description: "ModuleDescriptions.kernosklad",
  },
];

export const contactData = [
  {
    country: "ContactsKazahstan.country",
    adress: "ContactsKazahstan.adress",
    phone: "+7 771 225 98 34",
    email: "alexandr.m@dolon.tech",
  },
  {
    country: "ContactsKyrgyzstan.country",
    adress: "ContactsKyrgyzstan.adress",
    phone: "+996 700 173 295",
    email: "satar.t@dolon.tech",
  },
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
