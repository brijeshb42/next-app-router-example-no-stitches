"use client";

import { useState } from "react";
// @ts-ignore
import { styled, icss } from "no-stitches/runtime";

const CountButton = styled("button", {
  borderRadius: "9px",
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
  fontSize: "1em",
  fontWeight: 500,
  fontFamily: "inherit",
  backgroundColor: "#1a1a1a",
  cursor: "pointer",
  transition: "border-color 0.25s",
  "&:hover": { borderColor: "#646cff" },
  "&:focus,&:focus-visible": {
    outline: "4px auto -webkit-focus-ring-color",
  },
});

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <CountButton
      // @ts-ignore
      css={
        count % 2
          ? icss({
              color: "red",
            })
          : icss({
              color: "blue",
            })
      }
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </CountButton>
  );
}
