import React, { useState, useContext } from "react";
import { MyContext } from "../domain/count/Context";

export function Main() {
  const { state, dispatch } = useContext(MyContext);
  const [job, setJob] = useState("");
  const [annualIncome, setAnnualIncome] = useState(0);
  return (
    <div className="Main">
      <ul>
        {Object.entries(state).map(([key, value]) => {
          return (
            <li key={key}>
              <dl>
                <dt>{key}:</dt>
                <dd>{value}</dd>
              </dl>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => dispatch({ type: "getOld" })}>getOld</button>
      </div>
      <div>
        <p>
          job:
          <input
            id="job"
            name="job"
            type="text"
            value={job}
            onChange={e => setJob(e.target.value)}
          />
        </p>
        <p>
          annualIncome:
          <input
            type="number"
            name="annualIncome"
            id="annualIncome"
            value={annualIncome}
            onChange={e => setAnnualIncome(e.target.value)}
          />
        </p>
        <button
          onClick={() => dispatch({ type: "changeJob", job, annualIncome })}
        >
          changeJob
        </button>
      </div>
    </div>
  );
}
