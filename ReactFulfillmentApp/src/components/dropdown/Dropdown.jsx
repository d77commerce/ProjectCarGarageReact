import { useState } from 'react';
import { Button } from '../styledComponents/StyledComponents';
import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Button  onClick={toggleDropdown}>
        Orders
      </Button>
      {isOpen && (
        <div className="dropdown-content">
          {children}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dropdown;
