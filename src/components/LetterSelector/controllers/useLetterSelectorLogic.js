import { useState, useEffect, useRef } from "react";

const useLetterSelectorLogic = (
  minimalLetters,
  isMouseDown,
  selectedLetters
) => {
  const letterRefs = useRef([]);
  const [letterPositions, setLetterPositions] = useState({});
  const [mousePosition, setMousePosition] = useState(null);

  const buildSmoothPathData = (points) => {
    if (points.length === 0) return "";

    let path = `M ${points[0].x} ${points[0].y}`;
    if (points.length === 1) {
      return path;
    }

    const cps = getCubicBezierPath(points);
    for (let i = 0; i < cps.length; i++) {
      const cp = cps[i];
      path += ` C ${cp.cp1x},${cp.cp1y} ${cp.cp2x},${cp.cp2y} ${cp.x},${cp.y}`;
    }

    return path;
  };

  const getCubicBezierPath = (points) => {
    const cps = [];
    const n = points.length - 1;

    for (let i = 0; i < n; i++) {
      const p0 = i === 0 ? points[0] : points[i - 1];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = i + 2 < points.length ? points[i + 2] : p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      cps.push({
        cp1x,
        cp1y,
        cp2x,
        cp2y,
        x: p2.x,
        y: p2.y,
      });
    }

    return cps;
  };

  useEffect(() => {
    const updateLetterPositions = () => {
      const positions = {};
      minimalLetters.forEach((_, index) => {
        const ref = letterRefs.current[index];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;
          positions[index] = { x, y };
        }
      });
      setLetterPositions(positions);
    };

    requestAnimationFrame(updateLetterPositions);
    window.addEventListener("resize", updateLetterPositions);
    return () => window.removeEventListener("resize", updateLetterPositions);
  }, [minimalLetters]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isMouseDown) {
        const x = event.clientX;
        const y = event.clientY;
        setMousePosition({ x, y });
      }
    };

    const handleTouchMove = (event) => {
      if (isMouseDown) {
        const touch = event.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isMouseDown]);

  useEffect(() => {
    if (!isMouseDown) {
      setMousePosition(null);
    }
  }, [isMouseDown]);

  const selectedPositions = selectedLetters
    .map((item) => letterPositions[item.index])
    .filter(Boolean);

  let pathData = buildSmoothPathData(selectedPositions);

  if (isMouseDown && mousePosition && selectedPositions.length > 0) {
    pathData += ` L ${mousePosition.x},${mousePosition.y}`;
  }

  return { letterRefs, pathData, letterPositions };
};

export default useLetterSelectorLogic;
