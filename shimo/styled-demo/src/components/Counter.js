import { useState } from "react";
import styled from "styled-components";

const StyleCounter = styled.div`
  display: flex;
  padding: 1em;
  background: #fff;
  width: 200px;
  font-size: 24px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin: 1em;
  color: pink;
`;

const Button = styled.button`
  width: 4em;
  border: 0;
  border-radius: 4px;
  background-color: pink;
  color: #fff;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);

  return (
    <StyleCounter>
      <Button onClick={decrement}>-</Button>
      <Paragraph>{count}</Paragraph>
      <Button onClick={increment}>+</Button>
    </StyleCounter>
  );
};

export default Counter;
