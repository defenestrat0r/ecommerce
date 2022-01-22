import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  return (
    <HeroContainer>
      <ArrowContainer>
        <Arrow direction='left'>
          <ArrowBackIosNew />
        </Arrow>
      </ArrowContainer>

      <SlideWrapper>
        <ImgContainer>
          <Img src='https://raw.githubusercontent.com/defenestrat0r/ecommerce/master/src/assets/grey_landscape_casuals.jpg' />
        </ImgContainer>

        <InfoWrapper>
          <InfoContainer>
            <Title>Classy Casuals Sale</Title>
            <Desc>UPGRADE YOUR WARDROBE WITH A FLAT 40% OFF ON CASUALS!</Desc>
            <Button>Go now!</Button>
          </InfoContainer>
        </InfoWrapper>
      </SlideWrapper>

      <ArrowContainer>
        <Arrow direction='right'>
          <ArrowForwardIos />
        </Arrow>
      </ArrowContainer>
    </HeroContainer>
  );
};

function HeroContainer(props) {
  return <div className='hero-container'>{props.children}</div>;
}

function ArrowContainer(props) {
  return <div className='arrow-container'>{props.children}</div>;
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

function SlideWrapper(props) {
  return <div className='carousel-wrapper'>{props.children}</div>;
}

function ImgContainer(props) {
  return <div className='carousel-img-container'>{props.children}</div>;
}

function Img(props) {
  return <img src={props.src} alt='hot deals' />;
}

function InfoWrapper(props) {
  return <div className='info-wrapper'>{props.children}</div>;
}

function InfoContainer(props) {
  return <div className='info-container'>{props.children}</div>;
}

function Title(props) {
  return <h1>{props.children}</h1>;
}

function Desc(props) {
  return <p>{props.children}</p>;
}

function Button(props) {
  return <button>{props.children}</button>;
}

export default HeroCarousel;
