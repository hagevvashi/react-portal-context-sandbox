export function reducer(state, action) {
  switch (action.type) {
    case "getOld":
      return { ...state, age: state.age + 1 };
    case "changeJob":
      return { ...state, job: action.job, annualIncome: action.annualIncome };
    default:
      throw new Error();
  }
}
