import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(170, 170, 170, 0.479), #aaaaaa89),
    url("https://img.freepik.com/free-photo/curly-lady-with-ponytails-screams-putting-palm-mouth-photo-woman-dressed-stylish-blouse-boater_197531-14879.jpg?w=1380&t=st=1649679616~exp=1649680216~hmac=12c38b50bbc814f056c349d55fb807a3cc9492e84f6f341e13263db09cc5b65b")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  border: 1px solid #ebfbee;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 20px 0px;
  padding: 10px;
  max-width: 80%;
  border: none;
  border: 1px solid teal;
  border-radius: 2px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: #099268;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s all;
  &:hover {
    background-color: #087f5b;
  }
  margin: 0 auto;
  margin: 20px 0px;
`;

const Link = styled.a`
  display: flex;
  margin: 5px 0px;
  font-size: 20px;
  cursor: pointer;
  color: #495057;
  justify-content: center;

  &:hover {
    color: #212529;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Line />
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Sign In</Button>
        </Form>
        <Link>I Forgot My Password!</Link>
        <Link>Create A New Account</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
