import { useCallback } from "react";

const useTouchMoveHandler = (
  isMouseDown,
  minimalLetters,
  letterRefs,
  handleMouseEnter
) => {
  const handleTouchMove = useCallback(
    (e) => {
      if (isMouseDown) {
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        minimalLetters.forEach((letter, index) => {
          const target = letterRefs.current[index];

          if (target) {
            const { left, top, right, bottom } = target.getBoundingClientRect();

            if (x >= left && x <= right && y >= top && y <= bottom) {
              handleMouseEnter(letter, index);
            }
          }
        });
      }
    },
    [isMouseDown, minimalLetters, letterRefs, handleMouseEnter]
  );

  return { handleTouchMove };
};

export default useTouchMoveHandler;
