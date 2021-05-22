import styled from "styled-components";
import PropTypes from "prop-types";

// <Col  size={6}/>
const baseWidth = 8.33333333;
export const Col = styled.div`
  max-width: ${(props) => props.size * baseWidth}%;
  -webkit-box-flex: 0;
  flex: 0;
  ${(props) => `ms-flex : 0 0 ${props.size * baseWidth}%`};
  ${(props) => `flex : 0 0 ${props.size * baseWidth}%`};
`;

Col.defaultProps = {
  size: 12,
};

Col.propTypes = {
  size: PropTypes.number,
};
