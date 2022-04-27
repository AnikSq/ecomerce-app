import styled from "styled-components";
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Logo = styled.h1``;
const Desc = styled.h1`
  margin: 20px 0px 40px 0;
  font-weight: 500;
  font-size: 20px;
  width: 80%;
`;

const ReachUs = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SocialContainer = styled.h1`
  display: flex;
  justify-content: space-between;
  width: 30%;
  ${mobile({
    width: "40vw",
  })}
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 40px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 25px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
`;

const ListItem = styled.li`
  width: 120px;
  font-weight: 500;
  font-size: 16px;
`;

const Right = styled.div`
  flex: 1;
  padding: 40px;
  ${mobile({ backgroundColor: "#fff7f7" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

const Payment = styled.div``;

const PaymentList = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

const PaymentTitle = styled.p`
  font-size: 24px;
`;

const PaymentItem = styled.img`
  width: 75px;
  height: 75px;
  ${mobile({ width: "50px", height: "50px" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Phalnax</Logo>
        <Desc>
          We frimly Believe that Style and Elegance should go hand in hand, And
          We work to make that happen, In the most simple and profound way
          possible
        </Desc>
        <ReachUs>You can reach us on</ReachUs>
        <SocialContainer>
          <SocialIcon color="#339af0">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#fd7e14">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#228be6">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title style={{ marginLeft: "" }}>Helpful Links</Title>
        <List>
          <ListItem>Men Fashion</ListItem>
          <ListItem>In-house</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Decoration</ListItem>
          <ListItem>Gift Cards</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Gift</ListItem>
          <ListItem>Jewels</ListItem>
          <ListItem>Orders</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>ToS</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room /> 127 WindFord Valley, CA, 98072
        </ContactItem>
        <ContactItem>
          <Phone />
          +1 9854344321
        </ContactItem>
        <ContactItem>
          <Email />
          contact@phalnax.com
        </ContactItem>
        <Payment>
          <PaymentTitle>We accept all the major cards</PaymentTitle>
          <PaymentList>
            <PaymentItem src="https://ik.imagekit.io/anik/Payments/visa-svgrepo-com_YOR3nDsxa.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649656059021" />
            <PaymentItem src="https://ik.imagekit.io/anik/Payments/amex-svgrepo-com__1__Edtp-2UGn.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649657472445" />
            <PaymentItem src="https://ik.imagekit.io/anik/Payments/dinersclub-svgrepo-com_N1AoQhZKe.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649656073499" />
            <PaymentItem src="https://ik.imagekit.io/anik/Payments/paypal-svgrepo-com_0dgp9VQJR.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649657972506" />
          </PaymentList>
        </Payment>
      </Right>
    </Container>
  );
};

export default Footer;
