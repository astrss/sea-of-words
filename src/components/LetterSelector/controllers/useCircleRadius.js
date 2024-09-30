import { useState, useEffect } from "react";
import { MOBILE_DEVICE } from "../../../constants";
import { MOBILE_CIRCLE_RADIUS, DESKTOP_CIRCLE_RADIUS } from "../constants";

const useCircleRadius = () => {
  const [circleRadius, setCircleRadius] = useState(
    window.innerWidth <= MOBILE_DEVICE
      ? MOBILE_CIRCLE_RADIUS
      : DESKTOP_CIRCLE_RADIUS
  );

  useEffect(() => {
    const handleResize = () => {
      setCircleRadius(
        window.innerWidth <= MOBILE_DEVICE
          ? MOBILE_CIRCLE_RADIUS
          : DESKTOP_CIRCLE_RADIUS
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return circleRadius;
};

export default useCircleRadius;
