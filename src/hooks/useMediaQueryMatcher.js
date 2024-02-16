// react
import { useEffect, useCallback } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  mobileMatched,
  smallTabletMatched,
  largeTabletMatched,
  computerMatched,
  mobileQuery,
  smallTabletQuery,
  largeTabletQuery,
  computerQuery,
} from "./../features/mediaQuery/mediaQuerySlice";

export default function useMediaQueryMatcher() {
  const dispatch = useDispatch();
  const {
    isMobile,
    isSmallTablet,
    isLargeTablet,
    isComputer,
    isLargeScreen,
    isSmallScreen,
  } = useSelector((state) => state.mediaQuery);

  const customSizeDetector = (size) => {
    const matches = window.matchMedia(size).matches;
    return matches;
  };

  const setMobileMatched = useCallback(
    (e) => {
      if (e.matches) {
        dispatch(mobileMatched());
      }
    },
    [dispatch]
  );

  const setSmallTabletMatched = useCallback(
    (e) => {
      if (e.matches) {
        dispatch(smallTabletMatched());
      }
    },
    [dispatch]
  );

  const setLargeTabletMatched = useCallback(
    (e) => {
      if (e.matches) {
        dispatch(largeTabletMatched());
      }
    },
    [dispatch]
  );

  const setComputerMatched = useCallback(
    (e) => {
      if (e.matches) {
        dispatch(computerMatched());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    mobileQuery.addEventListener("change", setMobileMatched);
    smallTabletQuery.addEventListener("change", setSmallTabletMatched);
    largeTabletQuery.addEventListener("change", setLargeTabletMatched);
    computerQuery.addEventListener("change", setComputerMatched);

    return () => {
      mobileQuery.removeEventListener("change", setMobileMatched);
      smallTabletQuery.removeEventListener("change", setSmallTabletMatched);
      largeTabletQuery.removeEventListener("change", setLargeTabletMatched);
      computerQuery.removeEventListener("change", setComputerMatched);
    };
  }, [
    setMobileMatched,
    setSmallTabletMatched,
    setLargeTabletMatched,
    setComputerMatched,
  ]);

  return {
    isMobile,
    isSmallTablet,
    isLargeTablet,
    isComputer,
    isLargeScreen,
    isSmallScreen,
    customSizeDetector,
  };
}
