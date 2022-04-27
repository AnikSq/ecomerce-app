import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  background-color: #ebfbee;
  height: 60vh;
  ${mobile({ height: "70vh" })}
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: 600;
  ${mobile({ fontSize: "50px" })}
`;
const Desc = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding: 20px;
  &:focus {
    outline: none;
  }
  ${mobile({ width: "50vw", marginBottom: "20px" })}
`;
const InputContainer = styled.div`
  display: flex;
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ flexWrap: "wrap" })}
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #51cf66;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: #fff;
  ${mobile({ padding: "10px" })}
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Our Newsletter</Title>
      <Desc>Get informed about all the latest products from us!</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
