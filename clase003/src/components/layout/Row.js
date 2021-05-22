import PropTypes from "prop-types";
import styled from "styled-components";
import { justifyValues, numberType, atomicPx } from "../../constants/layout";
// Operadores ternarios condicion ? verdadero : falso
// condicion && verdadero
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  ${(props) => props.justify && `justify-content : ${props.justify}`};
  ${(props) => props.mt && `margin-top : ${props.mt * atomicPx}px`};
  ${(props) => props.mb && `margin-bottom : ${props.mb * atomicPx}px`};
  ${(props) => props.align && `align-items : ${props.align}`};
`;

Row.propTypes = {
  justify: PropTypes.oneOf(justifyValues),
  mt: numberType,
  mb: numberType,
};
