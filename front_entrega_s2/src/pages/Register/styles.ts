import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import backgroundColor from "../../assets/pastel.jpg"
import { Link } from "react-router-dom";

export const FormRegister = styled.div`
  width: 100vw;
  height: 800px;
  background: url(${backgroundColor}) no-repeat center center fixed;
  background-size: cover;
  font-size: 10px;

  .divContainer {
    width: 100%;
    height: 560px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgLogo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 10px 0;
  }

  form {
    width: 95%;
    background: #F3E88D;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
  h2 {
    color: black;
    font-size: 16px;
    text-align: center;
    margin: 20px 0;
  }
  h3 {
    color: black;
    font-size: 12px;
    text-align: center;
  }
  label {
    color: black;
    font-size: 14px;
    margin: 20px 0 8px 0;
  }
  input,
  textarea,
  select {
    background: white;
    border: none;
    border-radius: 3.19812px;
    width: 100%;
    height: 38px;
    padding-left: 10px;
    font-size: 12px;
    color: var(--color-gray-600);
    font-family: "Inter";
  }
  textarea {
    padding-top: 10px;
  }
  .buttonSubmit {
    width: 100%;
    height: 38px;
    background-color: #F7A94D;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 12px;
    margin-top: 20px;
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
      height: 720px;
      padding: 0 15px;
    }


  }
`;

/* export const Link = styled(LinkRouter)`
  background-color: var(--color-gray-700);
  color: white;
  width: 80px;
  height: 30px;
  font-size: 10px;
  border-radius: 4px;
  text-align: center;
  padding-top: 8px;
`; */

export const LinkLogin = styled(Link)`
  border-radius: 3.19812px;
  width: 100%;
  height: 45px;
  padding-left: 10px;
  background-color: #F7A94D;
  margin-top: 15px;
  color: white;
  text-align: center;
  padding-top: 14px;
  font-size: 14px;
  text-decoration: none;
`;