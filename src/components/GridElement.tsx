import { useState } from "react";
import "./GridElement.css";

interface GridProps {
  index: string;
  gridType: string;
  onCellClick: (idx: string, type: string) => void;
}

const GridElement = (props: GridProps) => {
  const { gridType, index, onCellClick } = props;
  const [onFire, setOnFire] = useState<boolean>(false);

  const getColorByType = (gridType: string): string => {
    if (onFire) {
      return "red";
    }
    if (gridType === "water") {
      return "aqua";
    }
    return "white";
  };

  const handleCellClick = () => {
    if (gridType !== "water") setOnFire(true);
    onCellClick(index, gridType);
  };

  return (
    <div
      className="gridElement"
      style={{ backgroundColor: getColorByType(gridType) }}
      onClick={() => handleCellClick()}
    ></div>
  );
};

export default GridElement;
