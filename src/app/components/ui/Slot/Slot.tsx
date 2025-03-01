import React from "react";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement;
}

const Slot: React.FC<SlotProps> = ({ children, ...props }) => {
  return React.cloneElement(React.Children.only(children), props);
};

export { Slot };
