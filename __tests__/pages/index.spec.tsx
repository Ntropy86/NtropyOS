import { render } from "@testing-library/react";
import Index from "pages/index";

// describe("Home", () => {
//   it("Rendering Index", () => {
//     render(<Index />);

//     const heading = screen.getByRole("heading", {
//       name: "Hello World",
//     });

//     expect(heading).toBeInTheDocument();
//   });
// });

test("Renders Index Page", () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText("Hello World");
  expect(linkElement).toBeInTheDocument();
});
