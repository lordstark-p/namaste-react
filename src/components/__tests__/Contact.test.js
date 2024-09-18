import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  test("Should load Contact Us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact Us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load 2 input boxes in Contact Us component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
