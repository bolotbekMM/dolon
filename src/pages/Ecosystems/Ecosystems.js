import React from "react";
import Hero from "../../components/hero";
import EcoContent from "./blocks/EcoContent";
import EcoHead from "./blocks/EcoHead";
import EcoModules from "./blocks/EcoModules";
import EcoParallax from "./blocks/EcoParallax";
import EcoPlashka from "./blocks/EcoPlashka";
import failmenager from "../../assets/img/mainPage/failmenager.png"

const Ecosystems = () => {
  return (
    <>
      <EcoHead />
      <EcoContent />
      <Hero img={failmenager} list={[
        `«Файловый менеджер»— это универсальный инструмент, позволяющий легко хранить и организовывать все типы данных и файлов, включая аудио, видео и изображения. Но это еще не все – «Файловый менеджер» также предлагает несколько функций, которые сделают вашу работу еще более эффективной и удобной:`, 
        `Настраивайте структуры файлов в соответствии с вашими потребностями.`, `Связывайте файлы с любыми объектами системы, такими как участки или скважины, для быстрого и легкого доступа к ним.`, `Просматривайте связанные файлы в интерактивном режиме на карте, анализируя ваши данные совершенно по-новому.`, 
        `Платформа также предлагает бесшовную интеграцию с другими устройствами и системами, позволяя вам легко получать доступ к своим файлам и обмениваться ими с коллегами и клиентами. Больше не нужно тратить время на переключение между несколькими системами и программами.`]} title="ФАЙЛОВЫЙ МЕНЕДЖЕР"/>
      <EcoParallax />
      <EcoModules />
      <EcoPlashka />
    </>
  );
};

export default Ecosystems;
