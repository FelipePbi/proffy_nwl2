import React from "react";

import whatsappIcon from "../../assets/icons/whatsapp.svg";

import "./styles.css";

interface PageHeaderProps {
  title?: string;
}

const TeacherItem: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHF3iMiCa31NA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=FL9_72ZeBiIl7WEVI2U3oqnq8JABlpzI9W7nEmWsfgQ"
          alt="Felipe Borges"
        />
        <div>
          <strong>Felipe Borges</strong>
          <span>Desenvolvedor Full stack</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Logo whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
