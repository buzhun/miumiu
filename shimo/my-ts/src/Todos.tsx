import React, { useEffect, useReducer, useRef } from "react";
import { Container } from "unstated";
import TodoContainer from "./containers/todoContainer";

console.log(111);
type Selector<S, P> = (state: S) => P;

function isEqual(a: any, b: any) {
  return a === b;
}

export function createUseUnstated<S extends Object>(container: Container<S>) {
  return function useUnstated<R>(
    selector: Selector<S, R>,
    equalityFn = isEqual
  ) {
    console.log(1);
    const [, forceRender] = useReducer((s: number) => s + 1, 0);
    const latestStoreState = useRef<S>(container.state);
    const latestResult = useRef<R>(selector(container.state));

    useEffect(() => {
      const onChange = () => {
        if (latestStoreState.current === container.state) {
          return;
        }
        latestStoreState.current = container.state;
        const result = selector(container.state);
        if (!equalityFn(result, latestResult.current)) {
          latestResult.current = result;
          forceRender();
        }
      };
      container.subscribe(onChange);
    }, []);
    return latestResult.current;
  };
}

function Todos() {
  const useTodo = createUseUnstated<TodoContainer>(TodoContainer);
  const todo = useTodo((state) => state.todo);
  return (
    <>
      {todos.map((item) => (
        <li key={item}>
          <span>{item}</span>
        </li>
      ))}
    </>
  );
}

export default Todos;
