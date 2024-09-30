import { useState } from "react";
import level1 from "../levels/1.json";
import level2 from "../levels/2.json";
import level3 from "../levels/3.json";

const useLevels = () => {
  const levels = [level1, level2, level3];

  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [levelNumber, setLevelNumber] = useState(1);

  const goToNextLevel = () => {
    setCurrentLevelIndex((prevIndex) => (prevIndex + 1) % levels.length);
    setLevelNumber((prevNumber) => prevNumber + 1);
  };

  const currentLevel = levels[currentLevelIndex];

  return { currentLevel, levelNumber, goToNextLevel };
};

export default useLevels;
