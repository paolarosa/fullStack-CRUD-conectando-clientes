import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundColor from "../../assets/pastel.jpg"

export const FormLogin = styled.div`
  width: 100vw;
  height: 800px;
  background: url(${backgroundColor}) no-repeat center center fixed;
  background-size: cover;
  font-family: "Inter";

  .divContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    color: black;
    font-size: 16px;
    text-align: center;
    margin: 30px 0 10px 0;
  }

  form {
    width: 95%;
    height: 420px;
    background: #a5d8ff;
    -webkit-box-shadow: 0px 2px 14px 3px rgba(145,167,255,1);
-moz-box-shadow: 0px 2px 14px 3px rgba(145,167,255,1);
box-shadow: 0px 2px 14px 3px rgba(145,167,255,1);

    border-radius: 4px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
  label {
    color: var(--color-gray-100);
    font-size: 15px;
    margin: 30px 0 8px 0;
  }
  input {
    background:white;
    border: none;
    border-radius: 3.19812px;
    width: 100%;
    height: 38px;
    padding-left: 10px;
    font-size: 12px;
    color: var(--color-gray-600);
    font-family: "Inter";
  }
  input:hover {
    border: 2px solid white;
  }
  .buttonSubmit {
    border-radius: 3.19812px;
    width: 100%;
    height: 38px;
    padding-left: 10px;
    font-size: 14px;
    background-color: #4dabf7;
    color: black;
    border: none;
    margin: 20px 0 30px 0;
  }

  h4 {
    color: black;
    font-size: 12px;
    text-align: center;
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .divContainer {
      width: 400px;
    }
    form {
      height: 470px;
      padding: 0 15px;
    }
    input {
      height: 48px;
    }
    .buttonRegister {
      height: 48px;
    }
    .buttonSubmit {
      height: 48px;
    }
    p {
      padding-top: 8px;
      font-size: 10px;
      color: white;
    }
  }
`;

export const LinkRegister = styled(Link)`
  border-radius: 3.19812px;
  width: 100%;
  height: 45px;
  padding-left: 10px;
  background-color: #faa2c1;
  margin-top: 15px;
  color: black;
  text-align: center;
  padding-top: 14px;
  font-size: 14px;
  text-decoration: none;
`;
