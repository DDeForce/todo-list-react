import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  margin: 5px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.22);
  }

  &:focus {
    background-color: ${({ bg }) => bg || "#dedede"};
  }
`;

export const SubmitButton = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  margin: 5px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.22);
  }

  &:focus {
    background-color: ${({ bg }) => bg || "#dedede"};
  }
`;

export const Buttons = styled.div`
  flex-flow: column-reverse;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  text-align: right;

  h4 {
    margin-bottom: 1rem;
    margin-left: 20px;
    text-align: left;
  }
`;

export const PopupInner = styled.div`
  background: #e6efef;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 480px;
  overflow: auto;
  max-height: calc(100vh - 4rem);

  form {
    padding: 16px;
    width: 16px * 20;
    margin: 0 auto;

    input,
    textarea {
      border: 0;
      outline: 0;
      font-size: 16px;
      border-radius: 50px;
      padding: 16px;
      background-color: #ebecf0;
      text-shadow: 1px 1px 0 #fff;
      margin-right: 16px/2;
      margin-bottom: 20px;
      box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
      width: 100%;
      box-sizing: border-box;
      transition: all 0.2s ease-in-out;
      appearance: none;
      -webkit-appearance: none;

      &:focus {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
      }
    }

    a {
      display: flex;
      flex-direction: row-reverse;
      text-align: center;
      font-weight: 600;
      font-size: 15.6px;
      text-decoration: none;
    }
  }
`;
