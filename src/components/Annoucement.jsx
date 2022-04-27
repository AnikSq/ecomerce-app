import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #12b886;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  padding: 20px 0;
`;
const Announcement = () => {
  return (
    <div>
      <Container>Free Shipping over $50</Container>
    </div>
  );
};

export default Announcement;
