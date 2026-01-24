import { StyledBanner } from "../../styles/banner_styled";
import { HOME_BANNER } from "../../constants/home_banner";

const Banner = () => {
  return (
    <>
      <StyledBanner>
        <h2 lang="es">{HOME_BANNER.heading}</h2>
        <p lang="es">{HOME_BANNER.subtitle}</p>
      </StyledBanner>
    </>
  );
};
export default Banner;
