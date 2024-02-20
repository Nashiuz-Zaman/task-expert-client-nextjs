'use client';

// react
import { createContext, useCallback, useContext, useRef } from 'react';

import { PropTypes } from 'prop-types';

export const createDragDropContext = () => {
   const Context = createContext();

   const Provider = ({ children }) => {
      const dropzoneElementRefs = useRef([]);

      // find the x and y coordinates and id of the dropzones
      const findElementsScreenCoordinates = useCallback(elementRefs => {
         return elementRefs.current.map(el => {
            const id = el.id.toLowerCase();
            const { top, right, bottom, left } = el.getBoundingClientRect();

            return {
               id,
               positions: {
                  top: top + window.scrollY,
                  right: right + window.scrollX,
                  bottom: bottom + window.scrollY,
                  left: left + window.scrollX,
               },
            };
         });
      }, []);

      // function for detecting dropzone id
      const findDropzoneElementId = useCallback(
         (e, dropzoneElementRefs, curDevice) => {
            const dropzoneElementsScreenCoordinates =
               findElementsScreenCoordinates(dropzoneElementRefs);
            let pointX, pointY;

            if (curDevice === 'touch') {
               pointX = e.changedTouches[0]?.clientX;
               pointY = e.changedTouches[0]?.clientY;
            }

            if (curDevice === 'mouse') {
               pointX = e.clientX;
               pointY = e.clientY;
            }

            pointX = pointX + window.scrollX;
            pointY = pointY + window.scrollY;

            const curDropzoneElement = dropzoneElementsScreenCoordinates.find(
               el => {
                  return (
                     pointX >= el.positions.left &&
                     pointX <= el.positions.right &&
                     pointY >= el.positions.top &&
                     pointY <= el.positions.bottom
                  );
               }
            );

            if (
               !curDropzoneElement ||
               curDropzoneElement.id ===
                  e.target.closest('.drop-target').id.toLowerCase()
            ) {
               return undefined;
            }
            return curDropzoneElement.id;
         },
         [findElementsScreenCoordinates]
      );

      const providedValues = {
         findDropzoneElementId,
         dropzoneElementRefs,
      };

      return (
         <Context.Provider value={providedValues}>{children}</Context.Provider>
      );
   };

   Provider.propTypes = {
      children: PropTypes.node,
   };

   const useProvider = () => {
      return useContext(Context);
   };

   return { Provider, useProvider };
};
