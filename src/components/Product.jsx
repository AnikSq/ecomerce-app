import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  object-fit: cover;
  z-index: 2;
  transition: 0.3s all;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Icon = styled.div`
  opacity: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin: 10px;
  gap: 15px;
  background-color: #fff;
  display: flex;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
  transition: 0.3s all;
  cursor: pointer;
`;
const Container = styled.div`
  margin: 5px;
  min-width: 280px;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  max-height: 500px;
  transition: 0.3s all;
  &:hover ${Image} {
    transform: scale(1.2);
  }

  &:hover ${Info}, &:hover ${Icon} {
    opacity: 1;
  }
  width: 450px;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
