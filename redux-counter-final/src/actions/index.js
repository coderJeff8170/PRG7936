export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});
// Passes whatever's typed into input to the state
export const onChangeCount = (num) => ({
  type: 'CHANGE_COUNT',
  num
});
// On click, updates value of counter to whatever is in 'changeCount' state property
export const onUpdateCount = () => ({
  type: 'UPDATE_COUNT'
});

