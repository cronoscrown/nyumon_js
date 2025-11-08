import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("h1が存在します", () => {
    render(<Greet />);
    const h1Element = screen.getByText("こんにちは");
    expect(h1Element).toBeInTheDocument();
});