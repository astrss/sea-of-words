import { useState, useEffect } from "react";
import { LOCALSTORAGE_STATE } from "../constants";
import level1 from "../levels/1.json";
import level2 from "../levels/2.json";
import level3 from "../levels/3.json";

const useLevels = () => {
  const levels = [level1, level2, level3];

  const savedLevelIndex =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_STATE.currentLevelIndex)) || 0;
  const savedLevelNumber =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_STATE.levelNumber)) || 1;

  const [currentLevelIndex, setCurrentLevelIndex] = useState(savedLevelIndex);
  const [levelNumber, setLevelNumber] = useState(savedLevelNumber);

  const goToNextLevel = () => {
    const nextIndex = (currentLevelIndex + 1) % levels.length;
    setCurrentLevelIndex(nextIndex);
    setLevelNumber((prevNumber) => prevNumber + 1);

    localStorage.setItem(
      LOCALSTORAGE_STATE.currentLevelIndex,
      JSON.stringify(nextIndex)
    );
    localStorage.setItem(
      LOCALSTORAGE_STATE.levelNumber,
      JSON.stringify(levelNumber + 1)
    );
  };

  const currentLevel = levels[currentLevelIndex];

  useEffect(() => {
    const savedLevelIndex = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_STATE.currentLevelIndex)
    );
    const savedLevelNumber = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_STATE.levelNumber)
    );
    if (savedLevelIndex !== null && savedLevelNumber !== null) {
      setCurrentLevelIndex(savedLevelIndex);
      setLevelNumber(savedLevelNumber);
    }
  }, []);

  return { currentLevel, levelNumber, goToNextLevel };
};

export default useLevels;
