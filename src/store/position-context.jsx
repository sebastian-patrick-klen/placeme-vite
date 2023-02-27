import { createContext, useState } from 'react';

const PositionContext = createContext({
  position: null,
  newPlacePos: null,
  setPosition: function (pos) {},
  setNewPlacePos: function (pos) {},
});

export function PositionContextProvider({ children }) {
  const [pos, setPos] = useState(null);
  const [newPos, setNewPos] = useState(null);

  function setPositionFunc(coords) {
    setPos(coords);
  }

  function setNewPlacePosFunc(coords) {
    setNewPos(coords);
  }

  const context = {
    position: pos,
    newPlacePos: newPos,
    setPosition: setPositionFunc,
    setNewPlacePos: setNewPlacePosFunc,
  };

  return (
    <PositionContext.Provider value={context}>
      {children}
    </PositionContext.Provider>
  );
}

export default PositionContext;
