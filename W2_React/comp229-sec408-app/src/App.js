import React from 'react';

// Define a component that uses props.children
const List = (props) => {
  return (
    <ul>
      {props.children} {/* Render child elements here */}
    </ul>
  );
};

const App = () => {
  return (
    <List>
      <li>2 lb salmon</li>
      <li>5 sprigs fresh rosemary</li>
      <li>2 tablespoons olive oil</li>
      <li>2 small lemons</li>
      <li>1 teaspoon kosher salt</li>
      <li>4 cloves of chopped garlic</li>
    </List>
  );
};
export default App;