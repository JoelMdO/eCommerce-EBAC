import { LoaderCircle } from "lucide-react";
import StyledLoader from "../../styles/loader_styled";
import { HOME_PRODUCTS } from "../../constants/home_products";

const Loader = () => {
  return (
    <>
      <StyledLoader>
        <LoaderCircle
          className="loader-icon"
          size={34}
          strokeWidth={2}
          color="var(----banner-h2-color)"
        />
        <div className="loader-text">
          <p className="loader-text_words">{HOME_PRODUCTS.loadingText}</p>
          <p className="loader-text_dots">{HOME_PRODUCTS.loadingDots}</p>
        </div>
      </StyledLoader>
    </>
  );
};

export default Loader;
