import React from "react";

type Matcher = React.FC;
export const findChildrenByType = (
  children: React.ReactNode,
  ...matchers: Matcher[]
) => {
  const picked = new Map<number, boolean>();
  // TODO: improve typings
  const result: any[][] = new Array(matchers.length + 1).fill(0).map(() => []);
  React.Children.forEach(children, (child, childIdx) => {
    for (let i = 0; i < matchers.length; i++) {
      const matcher = matchers[i];
      if (picked.has(childIdx)) continue;
      if (React.isValidElement(child) && matcher && child.type === matcher) {
        result.at(i)?.push(child);
        picked.set(childIdx, true);
      } else if (!React.isValidElement(child)) {
        result.at(-1)?.push(child);
        picked.set(childIdx, true);
      }
    }
  });

  return result;
};
