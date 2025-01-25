import React from "react";

export const pickChildrenByType = (
  children: React.ReactNode,
  Component: React.FC
) => {
  return React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === Component
  );
};
