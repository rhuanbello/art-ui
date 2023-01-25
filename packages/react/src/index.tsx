import { ComponentProps } from "react";

import { styled } from "./styles";

export type ButtonProps = ComponentProps<typeof Button>;

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$primary300",
  borderRadius: "$sm",
  border: 0,
  fontWeight: "$bold",
  color: "$white",

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },

      big: {
        fontSize: 14,
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});