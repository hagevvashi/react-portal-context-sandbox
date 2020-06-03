import React, { useContext } from "react";
import { MyContext } from "../domain/count/Context";

export function Header() {
  const { state } = useContext(MyContext);

  return (
    <div className="Header">
      {Object.entries(state).map(([key, value]) => {
        return `${key}: ${value} / `;
      })}
    </div>
  );
}
