import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(170, 170, 170, 0.479), #aaaaaa89),
    url("https://img.freepik.com/free-photo/portrait-beauty-blonde-model-wearing-hat_246930-717.jpg?w=1380")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 30px;
  background-color: white;
  display: flex;
  gap: 40px;
  border-radius: 10px;
  ${mobile({ flexDirection: "column", width: "100%" })}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Line = styled.div`
  height: 40vh;
  border: 1px solid teal;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  max-width: 80%;
  border-radius: 10px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 20%;
  border: none;
  padding: 10px;
  background-color: #099268;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s all;
  &:hover {
    background-color: #087f5b;
  }
  ${mobile({ width: "100%" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account with Us</Title>
        <Line />
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By Creating an account with us, You are accepting our{" "}
            <b>Terms of Service</b> and our <b>Privacy Policy</b>
          </Agreement>
          <Button>Sign Up!</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
