import styled from "styled-components";
import { motion } from "framer-motion";

export const DivLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81.8vh;
`;

export const DivFormikLogin = styled.div`
  text-align: center;
  width: 500px;

  .textA {
    text-align: center;
  }
`;

export const DivSvgLogin = styled.div`
  
`;

export const ButtonLogin = styled(motion.button)`
  border: none;
  font-size: 18px;
  padding: 20px 50px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  margin-top: 15px;
  border-radius: 10px;
  color: white;
`;
