import styled, { keyframes } from "styled-components";
import Counter from "./components/Counter";
import Things from "./components/Things";

const Container = styled.div`
  text-align: center;
  background-color: yellow;
  width: 1000px;
  padding: 20px;
  margin: 30px auto;
`;

const Title = styled.h3``;

const Button = styled.button`
  color: ${(props) => (props.primary ? "white" : "pink")};
  background-color: ${(props) => (props.primary ? "pink" : "white")};
  border: 2px solid pink;
  line-height: 30px;
  border-radius: 10px;
  margin: 1em;
`;

const TomatoButton = styled(Button)`
  border-color: orange;
  color: orange;
`;

const ReversedButton = (props) => (
  <div {...props} children={props.children.split(" ").reverse().join(" ")} />
);

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: pink;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 0;
  border-radius: 4px;
  background: papayawhip;
  padding: ${(props) => props.size};
  margin: ${(props) => props.size};
  color: ${(props) => (props.color ? props.color : "pink")};
`;

const PasswordInput = styled(Input).attrs({ type: "password" })`
  border: 2px solid red;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

function App() {
  return (
    <Container>
      <Title>styled-components demo</Title>
      <Things />
      <Counter />
      <Title>test styled-components</Title>
      <Button>Pink Button</Button>
      <Button as="a" href="/">
        Link with Button styles
      </Button>
      <Button as="div">div with Button styles</Button>
      <Button primary>Pink Button</Button>
      <TomatoButton as="a" href="/">
        Tomato Button link
      </TomatoButton>

      <Button as={ReversedButton}>my reverse test button</Button>
      <Link>apple.com</Link>
      <br />
      <StyledLink>new.apple.com</StyledLink>

      <Input defaultValue="@linlin" size="2em"></Input>
      <PasswordInput color="blue"></PasswordInput>
      <Rotate>rotate</Rotate>
    </Container>
  );
}

export default App;
