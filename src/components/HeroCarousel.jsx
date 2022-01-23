import { useState } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      console.log("left clicc");
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      console.log("right clicc");
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <HeroContainer>
      <Arrow direction='left'>
        <ArrowBackIosNew onClick={() => handleClick("left")} />
      </Arrow>

      <Carousel slideIndex={slideIndex}>
        <SlideWrapper id='1'>
          <ImgContainer>
            <Img src='https://raw.githubusercontent.com/defenestrat0r/ecommerce/master/src/assets/grey_landscape_casuals.jpg' />
          </ImgContainer>

          <InfoContainer>
            <Title>Classy Casuals Sale</Title>
            <Desc>UPGRADE YOUR WARDROBE WITH A FLAT 40% OFF ON CASUALS!</Desc>
            <Button>Go now!</Button>
          </InfoContainer>
        </SlideWrapper>

        <SlideWrapper id='2'>
          <ImgContainer>
            <Img src='https://raw.githubusercontent.com/defenestrat0r/ecommerce/master/src/assets/grey_landscape_casuals.jpg' />
          </ImgContainer>

          <InfoContainer>
            <Title>New Arrivals</Title>
            <Desc>UP TO 50% OFF ON NEW ARRIVALS!</Desc>
            <Button>Go now!</Button>
          </InfoContainer>
        </SlideWrapper>

        <SlideWrapper id='3'>
          <ImgContainer>
            <Img src='https://raw.githubusercontent.com/defenestrat0r/ecommerce/master/src/assets/grey_landscape_casuals.jpg' />
          </ImgContainer>

          <InfoContainer>
            <Title>Shoe them up</Title>
            <Desc>UP YOUR FOOT GAME WITH A 20% FLAT DISCOUNT ON FOOTWEAR!</Desc>
            <Button>Go now!</Button>
          </InfoContainer>
        </SlideWrapper>
      </Carousel>

      <Arrow direction='right'>
        <ArrowForwardIos onClick={() => handleClick("right")} />
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

function Carousel(props) {
  return (
    <div className={`carousel no${props.slideIndex}`}>{props.children}</div>
  );
}

function SlideWrapper(props) {
  return <div className='slide-wrapper'>{props.children}</div>;
}

function ImgContainer(props) {
  return <div className='slide-img-container'>{props.children}</div>;
}

function Img(props) {
  return <img src={props.src} alt='hot deals' />;
}

function InfoContainer(props) {
  return <div className='slide-info-container'>{props.children}</div>;
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
