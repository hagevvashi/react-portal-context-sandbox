import React, { useState } from "react";

export function Footer() {
  const [hoge, setHoge] = useState("");

  return (
    <div>
      <input
        type="text"
        id="hoge"
        name="hoge"
        value={hoge}
        onChange={e => setHoge(e.target.value)}
      />
      <p>{hoge}</p>
    </div>
  );
}
