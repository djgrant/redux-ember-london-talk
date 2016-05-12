const ACTIVATE_BOX = 'ACTIVATE_BOX';
const DECLARE_BOXES = 'DECLARE_BOXES';

export const declareBoxes = (boxes) => ({
  type: DECLARE_BOXES,
  boxes
});

export const activateBox = (id) => ({
  type: ACTIVATE_BOX,
  id
});

export const getActiveID = (state) => {
  const activeBox =  state.boxModel.filter(box => box.active)[0];
  if (activeBox) {
    return activeBox.id;
  }
};

export default function reducer (state = [], action) {
  if (action.type === DECLARE_BOXES) {
    return action.boxes.map(id => ({ id, active: false }));
  }

  if (action.type === ACTIVATE_BOX) {
    return [...state].map(box => {
      if (box.id === action.id) {
        return Object.assign({}, box, { active: true });
      }
      return Object.assign({}, box, { active: false });
    });
  }

  return state;
}
