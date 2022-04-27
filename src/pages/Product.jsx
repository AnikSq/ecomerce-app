import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  margin-top: 50px;
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding: "0px",
  })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 48px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    width: "100%",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  ${mobile({
    gap: "5px",
    marginBottom: "20px",
  })}
`;
const FilterTitle = styled.span`
  font-style: 20px;
  font-weight: 200;
  font-size: 18px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  ${mobile({
    width: "7%",
  })}
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;

const AmmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 5px;
`;
const Ammount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Button = styled.button`
  padding: 12px;
  border: none;
  background-color: #099268;
  color: white;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background-color: #087f5b;
  }
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://ik.imagekit.io/anik/clothes/640123d55b1f7524ca7c11ee7c74c6dc_7zIMq2jHj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649584323279" />
        </ImgContainer>
        <InfoContainer>
          <Title>Gangsta T-Shirt</Title>
          <Desc>
            Own your Hood with this Gangsta T-Shirt, Your homies will run to
            you, asking where you brought it, Go and reclaim the hood
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkBlue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmmountContainer>
              <Remove />
              <Ammount>1</Ammount>
              <Add />
            </AmmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
