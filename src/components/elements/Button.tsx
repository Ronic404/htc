// import { FC } from 'react';
import styled from 'styled-components';

export const ButtonElement = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 3.2rem;
  font-weight: 500;
  background-color: #E5261E;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #CC221B;
  }
`;

// interface ButtonProps {
//   title: string;
// }

// const Button: FC<ButtonProps> = ({ title }) => {
//   return (
//     <ButtonElement>
//       {title}
//     </ButtonElement> 
//   );
// }

// export default Button;