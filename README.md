1. What is JSX, and why is it used?

Answer:
JSX (JavaScript XML) is a syntax that allows writing HTML elements inside JavaScript.
It makes React code more readable and lets you easily describe the UI structure.
JSX is compiled into React.createElement() by Babel.

Example:

const element = <h1>Hello, World!</h1>;

⚙️ 2. What is the difference between State and Props?

Answer:

State: Managed inside a component; can change over time using setState or useState.

Props: Passed from parent to child; read-only and cannot be changed by the child.

Feature	State	Props
Controlled by	Component itself	Parent component
Can be changed?	Yes	No
Used for	Dynamic data	Passing data
⚡ 3. What is the useState hook, and how does it work?

Answer:
useState is a React Hook that lets you add state to a functional component.
It returns a state variable and a function to update it.

Example:

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}


count → current value

setCount → updates the value and re-renders the component

🔄 4. How can you share state between components in React?

Answer:
You can share state between components in several ways:

Lift state up to a common parent component.

Use React Context API for global state.

Use state management libraries like Redux or Zustand.

Store in localStorage or URL params for persistence.

🖱️ 5. How is event handling done in React?

Answer:
React uses camelCase for event names and functions as event handlers.

Example:

function Button() {
  const handleClick = () => alert('Clicked!');
  return <button onClick={handleClick}>Click Me</button>;
}


Events like onClick, onChange, onSubmit are used.

React uses a synthetic event system for better browser compatibility.