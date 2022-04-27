import styled from "styled-components";
import { mobile } from "../responsive";
import "./categoryItem.css";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s all;
  &:hover {
    padding-bottom: 20px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // this is basically corp these images
  filter: blur(1px);
  ${mobile({ height: "60vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s all;
`;
const Title = styled.h1`
  color: #f8f9fa;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #f1f3f5;
  color: #212529;
  cursor: pointer;
  font-weight: 600;
  border-radius: 10px;
  border: 2px solid #868e96;
  box-shadow: 5px 5px #868e96;
  transition: 0.3s all;
  &:hover {
    color: #868e96;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container className="card--category" style={{ backgroundColor: item.bg }}>
      <Image className="image--category" src={item.img} />
      <Info className="info--category">
        <Title>{item.title}</Title>
        <Button>{item.button}</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
