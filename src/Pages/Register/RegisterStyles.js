import { styled } from "styled-components";
import BackgroundBG from "../../assets/imgs/register/bg-img.png";

export const RegisterWrapper = styled.div`
  margin-top: 80px;
  background-image: url("${BackgroundBG}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 40px 80px 80px 80px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const RegisterTitle = styled.h1`
  font-size: 48px;
  color: var(--orange);
  text-shadow: -1px 0 1px var(--white);
  font-family: "Under-Rated";
`;

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    align-items: center;
    gap: 20px;
    background-color: var(--white-menus);
    box-shadow: -6px 6px 6px var(--shadows);
    max-width: 500px;
    width: 100%;

    p{
        font-size: 16px;
        color: var(--orange);
    }

    p a {
        margin-left: 8px;
        color:  var(--orange);
        font-weight: 600;
    }
`

export const RegisterContainInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;

    p{
        color: var(--red);
    }
`

export const RegisterLabel = styled.label`
    color: var(--orange);
    font-size: 20px;
    font-weight: 600;

`
export const RegisterInput = styled.input`
    text-align: center;
    background-color: transparent;
    padding: 10px;
    font-size: 20px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid var(--light-orange);
    position: relative;
    transition: all ease .15s;

    &:focus{
        border-color: var(--orange2);
        transition: all ease .15s;
    }

    &::placeholder{
        transform: scale(1);
        transition: all ease .15s;
        position: absolute;
        text-align: left;
    }

    &:focus::placeholder{
        top: -5px;
        left: -30px;
        transform: scale(0.6);
        transition: ease-in .15s;
        color: var(--blue);
    }
`
export const RegisterBtn = styled.input`
    margin-top: 40px;
    width: 100%;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 22px;
    border: 1px solid var(--light-orange);
    background-color: var(--orange);
    color: var(--white);
    cursor: pointer;

    transition: all ease .2s;

    &:hover{
        background-color: var(--orange2);
        color: var(--grey-light);
        transition: all ease-in .2s;
    }

`