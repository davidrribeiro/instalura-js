import React from "react";
import Image from "next/image";
import * as S from "./styles";

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <S.FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Orgulhosamente criado durante o{" "}
        <a href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>
    </S.FooterWrapper>
  );
}
