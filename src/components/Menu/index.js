import React from "react";
import * as S from "./styles";
import Logo from "components/Logo";
import Button from "components/Button";

const Menu = () => {
  const links = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Perguntas frequentes",
      url: "/faq",
    },
    {
      text: "Sobre",
      url: "/sobre",
    },
  ];
  return (
    <S.NavWrapper>
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.Links>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </S.Links>
      <S.CTA>
        <Button background={true}>Entrar</Button>
        <Button color="primary" background={false}>
          Cadastrar
        </Button>
      </S.CTA>
    </S.NavWrapper>
  );
};

export default Menu;
