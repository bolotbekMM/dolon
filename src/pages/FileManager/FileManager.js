import React from "react";
import css from "./FileManager.module.scss";
import ReModule from "../../components/ReModules/ReModule";
import banner from "../../assets/img/searchingRoutes/SearchingRoutes.png";
import fileManagerImage from "../../assets/img/fileManager/fileManagerImage.svg";
import { useTranslation } from "react-i18next";

const FileManager = () => {
  const { t, i18n } = useTranslation();
  return (
    <ReModule
      module={"FileManager"}
      banner={banner}
      title={t("Modules.fileManager")}
    >
      <div className="container">
        <div className={css.module}>
          <div className={css.box1}>
            <p>
              «Файловый менеджер»— это универсальный инструмент, позволяющий
              легко хранить и организовывать все типы данных и файлов, включая
              аудио, видео и изображения. Но это еще не все – «Файловый
              менеджер» также предлагает несколько функций, которые сделают вашу
              работу еще более эффективной и удобной:
            </p>
            <div className={css.line}></div>
            <ul>
              <li>
                Настраивайте структуры файлов в соответствии с вашими
                потребностями.
              </li>
              <li>
                Связывайте файлы с любыми объектами системы, такими как участки
                или скважины, для быстрого и легкого доступа к ним.
              </li>
              <li>
                Просматривайте связанные файлы в интерактивном режиме на карте,
                анализируя ваши данные совершенно по-новому.
              </li>
              <li>
                Платформа также предлагает бесшовную интеграцию с другими
                устройствами и системами, позволяя вам легко получать доступ к
                своим файлам и обмениваться ими с коллегами и клиентами. Больше
                не нужно тратить время на переключение между несколькими
                системами и программами.
              </li>
            </ul>
          </div>
          <div className={css.box2}>
            <img src={fileManagerImage} />
          </div>
        </div>
      </div>
    </ReModule>
  );
};

export default FileManager;
