import React from 'react';
import { render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
import sum from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders with or without a name", () => {
//   act(() => {
//     render(<Hello />, container);
//   });
//   expect(container.textContent).toBe("Hey, Stranger");

//   act(() => {
//     render(<Hello name="Jenny" />, Container);
//   });
//   expect(Container.textContent).toBe("Hello, Jenny!");

//   act(() => {
//     render(<Hello name="Margaret" />, Container);
//   });
//   expect(Container.textContent).toBe("Hello, Margaret!");
// });
