import { styled } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white-menus);
  width: 45%;
  height: 100vh;
  min-height: 100vh;
  overflow-y: scroll;
  position: absolute;
  top: 0px;
  right: 0;
  border: 1px solid var(--grey-dark);
  border-radius: 10px 0 0 10px;
  box-shadow: 10px 10px 10px var(--shadows);
  gap: 20px;
  padding: 20px 30px;
  z-index: 4;
  transform: translateX(${({ show }) => (show ? "0" : "1000px")});
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: all ease 0.2s;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CartTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  align-items: first baseline;
  padding: 10px 0;
`;

export const CloseCart = styled(AiOutlineClose)`
  align-self: flex-start;
  padding: 10px 13px;
  font-size: 40px;
  color: var(--black);
  cursor: pointer;
  opacity: 1;
  border-radius: 0%;
  border-radius: 50%;
  transition: all ease 0.4s;
  align-self: flex-start;

  &:hover {
    background-color: var(--grey-dark);
    opacity: 0.8;
    transition: all ease-out 0.4s;
  }
`;

export const CartTitle = styled.h3`
  text-align: right;
  align-self: flex-end;
  font-size: 24px;
  border-bottom: 2px solid var(--grey-dark);
  padding: 4px;
  width: 60%;
`;
export const CartCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
  height: auto;

  p {
    font-size: 24px;
    font-weight: 600;
  }
`;
export const CartShippingAndSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
export const ShipOrSubDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

`;
export const ShipOrSubTextLeft = styled.p`
  font-weight: 600;
`;

export const CartBottomContain = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid var(--grey-dark);
`;

export const CartBottomTextLeft = styled.h3`
  font-size: 30px;
  font-weight: 800;
  background: linear-gradient(to right, var(--blue-light), var(--red));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 10px;
  text-shadow: 1px 1px 4px var(--shadows);
`;
export const CartBottomTextRight = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: var(--red);
  text-shadow: 1px 1px 4px var(--shadows);
`;

export const CartBottomBtns = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
`;
export const CartBtnConfirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 30px;
  background-color: ${({ addcart }) =>
    addcart ? "var(--green-light)" : "var(--red)"};
  border-radius: 10px;
  border: 2px solid var(--black);
  color: var(--black);
  cursor: pointer;
  transition: all ease 0.3s;

  &svg {
    pointer-events: none;
  }

  &:hover {
    opacity: 0.8;
    transition: all ease-out 0.3s;
  }
`;
