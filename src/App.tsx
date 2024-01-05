import { useEffect, useState } from "react";
import "./App.css";
import GridElement from "./components/GridElement";
import { randomizer } from "./utils/functions";

function App() {
  const [grid, setGrid] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const initialGrid = generateGrid();
    setGrid(initialGrid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // a cell containing 0 or 7 is a border
  const generateGrid = (): JSX.Element[] => {
    const grid: JSX.Element[] = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const gridElement = (
          <GridElement
            key={`el-${i}${j}`}
            index={`${i}${j}`}
            gridType={`${randomizer(j) ? "water" : "plains"}`}
            onCellClick={setFire}
          />
        );
        grid.push(gridElement);
      }
    }
    return grid;
  };

  const setFire = (idx: string, type: string) => {
    console.log(`This cell ${idx} is of type ${type}`);
  };

  return (
    <>
      <div className="matrix">{grid}</div>
    </>
  );
}

export default App;
