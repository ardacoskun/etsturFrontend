import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerListContainer">
        <div className="footerLogoContainer">
          <FontAwesomeIcon icon={faCrown} className="footerLogoIcon" />
          <span className="logo">EventFinder</span>
        </div>
        <ul className="footerList">
          <li className="footerListItem">Sıkça Sorulan Sorular</li>
          <li className="footerListItem">Şartlar ve Koşullar</li>
          <li className="footerListItem">Üyelik Sözleşmesi</li>
          <li className="footerListItem">
            Kişisel Veriler ve Gizlilik Politikası
          </li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Başvuru Formu</li>
          <li className="footerListItem">Hakkımızda</li>
          <li className="footerListItem">Bize Ulaşın</li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">eventfinder@eventfinder.com</li>
          <li className="footerListItem">05** *** ** ** </li>
        </ul>
        <ul className="footerListSocial">
          <li className="footerListItem">Twitter</li>
          <li className="footerListItem">Instagram</li>
          <li className="footerListItem">Facebook </li>
        </ul>
      </div>
      <div className="footerText">&copy; EventFinder-Tüm hakları saklıdır.</div>
    </div>
  );
};

export default Footer;
