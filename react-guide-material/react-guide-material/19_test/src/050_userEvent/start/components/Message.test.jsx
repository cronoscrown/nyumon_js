import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";


describe("Messageコンポーネントの動作確認", () => {
    describe("初期表示の確認", () => {
        test("h2要素の初期表示確認", () => {
            render(<Message />);
            const h2Element = screen.getByRole("heading", { level: 2 });
            expect(h2Element).toBeInTheDocument();
        });
    });
        test("h2要素の初期表示確認", () => {
            render(<Message />);
            const h2Element = screen.getByRole("heading", { level: 2 });
            expect(h2Element).toBeInTheDocument();
        });
    });