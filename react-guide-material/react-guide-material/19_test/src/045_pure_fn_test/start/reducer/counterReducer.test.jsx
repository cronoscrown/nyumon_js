import { describe } from "vitest";
import { counterReducer } from "./components/CounterReducer.jsx";


describe("counterReducerの動作確認", () => {

  test("action.typeが'up'の場合、countがstep分増加するか", () => {
    const initialState = { count: 0, step: 2 };
    const action = { type: "up" };
    const newState = counterReducer(initialState, action);

    expect(newState.count).toBe(2);
  });

  test("action.typeが'down'の場合、countがstep分減少するか", () => {
    const initialState = { count: 5, step: 3 };
    const action = { type: "down" };
    const newState = counterReducer(initialState, action);

    expect(newState.count).toBe(2);
  });
    test("action.typeが'clear'の場合、countが0にリセットされるか", () => {
  test("action.typeが'clear'の場合、countが0にリセットされるか", () => {
    const initialState = { count: 5, step: 3 };
    const action = { type: "clear" };
    const newState = counterReducer(initialState, action);

    expect(newState.count).toBe(0);
  });