import styled from "styled-components";

export const StyledBanner = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 20dvh;
  background-image: url("../assets/banner.jpg");
  opacity: 0.8;
  background-size: cover;
  background-position-x: 75%;

  h2 {
    width: 100%;
    font-size: 40px; 
    font-weight: 800;
    margin-top: 10px;
    margin-bottom: 0;
    border: 0;
    color: var(--banner-h2-color);
  }

  p {
    width: 100%;
    margin: 0;
    font-size: 25px;
    font-weight: 600;
    opacity: 0.8;
    color: var(--black-color);
  }
}

@media (max-width: 674px) {
  .banner {
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 20px;
    }
  }
}
`;
