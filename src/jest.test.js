import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

it("should use jest-dom matchers", () => {
  const { getByText } = render(<div>Hello World</div>);
  expect(getByText("Hello World")).toBeInTheDocument();
});
