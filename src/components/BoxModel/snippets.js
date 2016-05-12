export default {
  Action: "store.dispatch({ type: 'ADD_PERSON', value: 'Lilly' })",
  Reducer: `const reduceAppState = (state, action) => {
  if (action.type === 'ADD_PERSON') {
    return [...state, action.value];
  }
  return state;
}
`,
  Subscriber: 'store.subscribe(renderApp);',
  Selector: 'const getFirstPerson = (state) => state[0];',
  View: `const renderApp = () => {
  console.log('First Person', getFirstPerson(store.getState()));
}`
};
