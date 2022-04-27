import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  // We can write JS inside of CSS using styled components, F**KING AMAZING
  width: 50px;
  height: 50px;
  background-color: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) =>
    props.direction === "left" &&
    "10px"}; // the direction definied below is a prop, that's why we say props.direction
  right: ${(props) =>
    props.direction === "right" &&
    "10px"}; // the direction definied below is a prop, that's why we say props.direction
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  transition: 0.3s all;
  &:hover {
    opacity: 0.7;
  }
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(
    ${(props) => props.slideIndex * -100}vw
  ); // we again passed a prop to wrapper
  transition: all 0.6s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.bg}; // We can use a function in css tooo!, we are passing in the background color as a prop
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%; // 100% means the parents 100% height
`;

const Image = styled.img`
  height: 89.7vh;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 85px;
  letter-spacing: 2px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 10px;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    color: #f1f3f5;
  }

  &:active {
    vertical-align: top;
    padding: 11px 10px 9px;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ChevronLeft />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button
                  style={{
                    border: `2px solid ${item.color}`,
                    boxShadow: `5px 5px ${item.color}`,
                  }}
                >
                  {item.button}
                </Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ChevronRight />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
