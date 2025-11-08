import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe('Counterコンポーネントの動作確認', () => {

  
  
  test("「カウントアップ」押下で「現在のカウント」が+1されるか", () => {
    render(<Counter originCount={0} />);
    
    const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
    expect(spanElBeforeUpdate).toBeInTheDocument();
    
    const btn = screen.getByRole("button", { name: "カウントアップ" });
    fireEvent.click(btn);
    
    const spanEl = screen.getByText("現在のカウント:1");
    expect(spanEl).toBeInTheDocument();
  });
  
  test("「カウントダウン」押下で「現在のカウント」が-1されるか", () => {
    render(<Counter originCount={0} />);
    
    const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
    expect(spanElBeforeUpdate).toBeInTheDocument();

    const btn = screen.getByRole("button", { name: "カウントダウン" });
    fireEvent.click(btn);

    const spanEl = screen.getByText("現在のカウント:-1");
    expect(spanEl).toBeInTheDocument();
  });
  
  test("複数回「カウントアップ」押下で「現在のカウント」が正しく更新されるか", () => {
    render(<Counter originCount={0} />);  
    const btn = screen.getByRole("button", { name: "カウントアップ" });
    fireEvent.click(btn);
    
    const spanEl = screen.getByText("現在のカウント:1");
    expect(spanEl).toBeInTheDocument();
  });
  
});