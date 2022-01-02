import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  return (
    <HeroContainer>
      <Arrow direction='left'>
        <ArrowBackIosNew />
      </Arrow>
      <Arrow direction='right'>
        <ArrowForwardIos />
      </Arrow>
    </HeroContainer>
  );
};

function HeroContainer(props) {
  return <div className='hero-container'>{props.children}</div>;
}

/** Conditional Classes!
 ** We're applying some logic here to pick the right class
 ** If the direction is left, we return class "left"
 ** else, we return class "right"
 */
function Arrow(props) {
  return (
    <div
      className={`arrow ${
        props.direction === "left" ? "left-arrow" : "right-arrow"
      }`}
    >
      {props.children}
    </div>
  );
}

export default HeroCarousel;
