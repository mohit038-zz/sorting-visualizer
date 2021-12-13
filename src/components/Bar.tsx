import React from "react";

interface BarProps {
  value: number;
  currentSwapper: boolean;
  currentBubble: boolean;
  currentSorted: boolean;
}

export const Bar: React.FC<BarProps> = React.memo(
  ({ value, currentSwapper, currentBubble, currentSorted }: BarProps) => {
    return (
      <div
        className={
          currentSwapper
            ? "bar bar-danger"
            : currentBubble
            ? "bar bar-active"
            : currentSorted
            ? "bar bar-selected"
            : "bar"
        }
        style={{
          height: `${value / 6}rem`,
        }}
      >
        <span className="bar-value">{value}</span>
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.value === nextProps.value &&
    prevProps.currentBubble === nextProps.currentBubble &&
    prevProps.currentSorted === nextProps.currentSorted &&
    prevProps.currentSwapper === nextProps.currentSwapper
);
