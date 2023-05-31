import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const FormRegister = styled.div`
  width: 100vw;
  height: 800px;
  background-color: var(--color-gray-850);
  font-size: 10px;

  .divContainer {
    width: 100%;
    height: 550px;
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
    background: var(--color-gray-700);
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
  h2 {
    color: var(--color-gray-100);
    font-size: 16px;
    text-align: center;
    margin: 20px 0;
  }
  h3 {
    color: var(--color-gray-600);
    font-size: 12px;
    text-align: center;
  }
  label {
    color: var(--color-gray-100);
    font-size: 14px;
    margin: 20px 0 8px 0;
  }
  input,
  textarea,
  select {
    background: var(--color-gray-800);
    border: 0.973988px solid var(--color-gray-800);
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
    background-color: var(--color-blue-700);
    border: 1.2182px solid var(--color-blue-700);
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

export const Link = styled(LinkRouter)`
  background-color: var(--color-gray-700);
  color: white;
  width: 80px;
  height: 30px;
  font-size: 10px;
  border-radius: 4px;
  text-align: center;
  padding-top: 8px;
`;
