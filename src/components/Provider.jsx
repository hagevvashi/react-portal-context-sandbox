import React, { useReducer } from "react";

import { MyContext } from "../domain/count/Context";
import { reducer } from "../domain/count/reducer";

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    name: "John",
    age: 1,
    job: "SE",
    annualIncome: 200,
    count: 1
  });
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}
