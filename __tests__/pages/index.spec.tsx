import { render, screen } from "@testing-library/react";
import Index from "pages/index";

describe("Home", () => {
  it("Rendering Index", () => {
    render(<Index />);

    const heading = screen.getByRole("heading", {
      name: "Hello World",
    });

    expect(heading).toBeInTheDocument();
  });
});
