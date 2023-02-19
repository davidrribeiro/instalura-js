import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

export default function Text({ tag, variant, children }) {
  return (
    <S.TextBase as={tag} variant={variant}>
      {children}
    </S.TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};
