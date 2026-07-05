import * as React from "react";

import { Button, type ButtonProps } from "./button";
import { useTabsFlow } from "./tabs";

export type NextTabButtonProps = Omit<ButtonProps, "onClick">;

const NextTabButton = React.forwardRef<HTMLButtonElement, NextTabButtonProps>(
  ({ children = "Next", disabled, ...props }, ref) => {
    const { goToNext, isLast } = useTabsFlow();

    return (
      <Button ref={ref} onClick={goToNext} disabled={disabled ?? isLast} {...props}>
        {children}
      </Button>
    );
  }
);
NextTabButton.displayName = "NextTabButton";

export { NextTabButton };
