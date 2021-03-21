import React, {useState} from "react";

function Toggle() {
  const [state, setState] = useState(false)

  return <button style={state ? {background:"red"} : null} onClick={() => setState(!state)}>{state ? "ON" : "OFF"}</button>;
}

export default Toggle;
