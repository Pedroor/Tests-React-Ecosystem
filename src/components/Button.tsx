import React from 'react';

// import { Container } from './styles';

interface Props {
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <button onClick={onClick}><b>{children}</b></button>;
}

export default Button;