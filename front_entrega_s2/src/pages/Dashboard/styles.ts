import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-gray-850);
  padding: 10px 20px 0 20px;
  position: relative;

  .nav {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
  }

  .buttonOut {
    width: 50px;
    height: 32px;
    background: var(--color-gray-800);
    border-radius: 4px;
    margin-top: 15px;
    color: white;
    font-size: 12px;
  }
  ul {
    background:var(--color-gray-700);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 5px;
  }

  .movieTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    color: var(--color-gray-100);
    weight: 500;
  }
  h2 {
    font-size: 18px;
    color: white;
    margin: 30px 0 20px 0;
  }
  li {
    color: white;
    background: var(--color-gray-850);
    border-radius: 4.06066px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    font-size: 15px;
    padding: 0 5px;
    margin: 0 px;
  }
  .divStatusTrash {
    display: flex;
    gap: 30px;
    align-items: center;
    width: 40px
  }

  .buttonTrash{
    weight:100px
  }
  

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;

    
    .divMain {
      width: 100%;
      max-width: 1440px;
      margin-top: 30px;
    }

    .TitleTech {
      width: 100%;
      max-width: 1440px;
    }
    ul {
      width: 100%;
      max-width: 1440px;
      padding: 15px 15px;
    }
    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }
    li:hover {
      background-color: var(--color-gray-800);
    }
    .trash {
      color: white;
      weight: 20px;
      height: 10px;
      cursor: pointer;
    }
}
  `