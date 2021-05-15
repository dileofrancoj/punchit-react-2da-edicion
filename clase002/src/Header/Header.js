import { memo } from "react";

import PropTypes from "prop-types";

const Header = memo(({ title }) => {
  return <h3>{title} 🔥</h3>;
});

// Documentación

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
