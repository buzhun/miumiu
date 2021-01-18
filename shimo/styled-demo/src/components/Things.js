import styled, { createGlobalStyle } from "styled-components";

const Thing = styled.div.attrs(() => ({
  tabIndex: 0,
  className: "my-component",
}))`
  color: pink;

  &:hover {
    color: red;
  }

  & - & {
    background: tomato;
  }

  & + & {
    background: lime;
  }

  &.some-thing {
    background: orange;
  }

  .wrap & {
    border: 1px solid;
  }

  & .some-label {
    color: black;
  }

  && {
    color: red;
  }
`;

const GlobalStyle = createGlobalStyle`
    div${Thing}{
        color: grey;
    }
`;

const NewThing = styled(Thing)``;

const Things = () => {
  return (
    <>
      <GlobalStyle />
      <Thing>think default</Thing>
      <Thing>think default 2</Thing>
      <NewThing>NewThing</NewThing>
      <Thing className="some-thing">think default 2</Thing>
      <div className="wrap">
        <Thing> innner</Thing>
      </div>
      <Thing>
        <label htmlFor="foo" className="some-label">
          private button
        </label>
        <button id="foo">what can i do?</button>
      </Thing>
    </>
  );
};

export default Things;
