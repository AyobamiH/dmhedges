import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '2148px',
    left: '51px',
    width: '148px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#d7090b',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    lineHeight: '22px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'See projects',
};

const Button = (props) => {
  return (
    <button>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;