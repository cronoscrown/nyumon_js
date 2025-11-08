import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import Counter from "./Counter";


/* POINT テストコードを書く際の注意点
Arrage:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/
test('現在のカウントが＋１されるか', () => {
    // Arrange
    render(<Counter originCount={0} />);

    // Act
    const btn = screen.getByRole("button", { name: "カウントアップ" });
    fireEvent.click(btn);

    // Assertion - 0 + 1 = 1 が正しい期待値
    const spanEl = screen.getByText("現在のカウント:1");
    expect(spanEl).toBeInTheDocument();
});
