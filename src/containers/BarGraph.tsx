import React from "react";
import { Bar } from "../components/Bar";
import { useBubbleSort } from "../contexts/BubbleSortContext";

interface BarGraphProps {}

export const BarGraph: React.FC<BarGraphProps> = () => {
  const { state } = useBubbleSort();
  const { array, currentBubbleTwo, currentSorted, currentSwapper } = state;
  return (
    <div className="bar-graph">
      <div className="bar-graph-container">
        {array.map((val, index) => (
          <Bar
            key={index}
            value={val}
            currentBubble={currentBubbleTwo.includes(index)}
            currentSwapper={currentSwapper.includes(index)}
            currentSorted={currentSorted.includes(index)}
          />
        ))}
      </div>
    </div>
  );
};
