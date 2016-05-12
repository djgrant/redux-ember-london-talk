const NAVIGATE_LEFT = 'NAVIGATE_LEFT';
const NAVIGATE_RIGHT = 'NAVIGATE_RIGHT';

export const navigateLeft = () => ({
  type: NAVIGATE_LEFT
});

export const navigateRight = () => ({
  type: NAVIGATE_RIGHT
});

export const navigateTo = index => ({
  type: NAVIGATE_RIGHT,
  index
});

export const isCurrentSlide = (state, index) => {
  return index === state.slideDeck;
};

export default function reducer (state = 0, action) {
  if (action.type === NAVIGATE_LEFT) {
    return state - 1;
  }

  if (action.type === NAVIGATE_RIGHT) {
    return state + 1;
  }

  return state;
}
