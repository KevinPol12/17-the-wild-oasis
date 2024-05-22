import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      {/*The GlobalStyles component doesnt take any children to style them, instead, it targets it's siblings. So How can we apply its styles to our app then? We just have to place our app and the GlobalStyles under a common parent (which makes them siblings) therefore the styles will be applied. In this case, we placed them both under a fragment*/}
      <GlobalStyles />
      {/*To style the whole app, we can style a div and name it as StyledApp */}
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        {/*Styled components will take the usual tag attributes as primitive tags would such as onClick */}
        <Button onClick={() => alert("Check in")}> Check In</Button>
        <Button onClick={() => alert("Check out")}> Check Out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
