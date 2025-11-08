import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("h1が存在します", () => {
     const { debug } = render(<Greet />);
    const h1Element = screen.getByText("こんにちは");
    expect(h1Element).toBeInTheDocument();

    // const radioElement = screen.getByRole("radio");
    // expect(radioElement).toBeInTheDocument();

    const imgElement = screen.getByRole("img");

    debug(imgElement);
});