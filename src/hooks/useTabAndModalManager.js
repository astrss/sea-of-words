import { useState, useEffect } from "react";
import { LOCALSTORAGE_STATE } from "../constants";

const useTabAndModalManager = (
  guessedWords,
  totalWords,
  onNextLevel,
  clearWordSelectionState
) => {
  const [showLevelCompleteModal, setShowLevelCompleteModal] = useState(false);
  const [showInactiveTabModal, setShowInactiveTabModal] = useState(false);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "activeTab" && event.newValue.startsWith("true")) {
        setShowInactiveTabModal(true);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    localStorage.setItem(LOCALSTORAGE_STATE.activeTab, `true-${Date.now()}`);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      localStorage.setItem(LOCALSTORAGE_STATE.activeTab, "false");
    };
  }, []);

  useEffect(() => {
    if (guessedWords.length === totalWords) {
      setShowLevelCompleteModal(true);
      clearWordSelectionState();
      onNextLevel();
    }
  }, [clearWordSelectionState, guessedWords, onNextLevel, totalWords]);

  const closeLevelCompleteModal = () => {
    setShowLevelCompleteModal(false);
  };

  const closeInactiveTabModal = () => {
    setShowInactiveTabModal(false);
  };

  const handleRefresh = () => {
    localStorage.setItem(LOCALSTORAGE_STATE.activeTab, `true-${Date.now()}`);
    window.location.reload();
  };

  return {
    showLevelCompleteModal,
    showInactiveTabModal,
    closeLevelCompleteModal,
    closeInactiveTabModal,
    handleRefresh,
  };
};

export default useTabAndModalManager;
