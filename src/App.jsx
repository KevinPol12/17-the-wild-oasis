import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    /*To style the whole app, we can style a div and name it as StyledApp */
    <StyledApp>
      <H1>The Wild Oasis</H1>
      {/*Styled components will take the usual tag attributes as primitive tags would such as onClick */}
      <Button onClick={() => alert("Check in")}> Check In</Button>
      <Button onClick={() => alert("Check out")}> Check Out</Button>
      <Input type="number" placeholder="Number of guests" />
    </StyledApp>
  );
}

export default App;
