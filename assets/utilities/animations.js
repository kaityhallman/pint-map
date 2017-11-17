import { keyframes } from 'styled-components';

export const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
`;

export default {
  slideUp,
};
