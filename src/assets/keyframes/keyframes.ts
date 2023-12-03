import { keyframes } from "@mui/material";

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

export const reverseRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(-360deg);
  }
`;

export const zeroRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(0deg);
  }
`;

export const beat = keyframes`
  0%, 50%, 100% { transform: scale(1, 1); }
  30%, 80% { transform: scale(0.94, 0.97); }
`;
