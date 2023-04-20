import React from 'react';
import { Container } from 'react-bootstrap';
import './Components.css'; // import your CSS file

function Grid(props) {
  // generate an array of grid items based on the size of the grid
  const gridItems = [];
  for (let i = 0; i < props.row; i++) {
    for (let j = 0; j < props.column; j++) {
      gridItems.push(<div key={`${i}-${j}`} className="grid-item"></div>);
    }
  }

  // create a CSS grid container and add the grid items
  return (
    <Container className="grid-container mw-100 p-1" style={{ gridTemplateColumns: `repeat(${props.row}, 1fr)` }}>
      {gridItems}
    </Container>
  );
}

export default Grid;
