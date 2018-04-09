import React from 'react';

const Playground = () => {
  return (
    <div className="container">
      <h2>Playground</h2>
      <hr />
      <h3><a style={{ color: 'blue' }} href="https://www.youtube.com/watch?v=JJSoEo8JSnc">Flexbox</a></h3>

      {/* Flex Set 1 */}
      <div className="parent1">
        <div className="child1">
          <h3>Box 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="child2">
          <h3>Box 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="child3">
          <h3>Box 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Flex Set 2 */}
      <div className="parent2">
        <div className="parent2child">
          <h3>Box 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="parent2child">
          <h3>Box 5</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="parent2child">
          <h3>Box 6</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Flex Set 3 */}
      <div className="parent3">
        <div className="parent3child">
          <h3>Box 7</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="parent3child">
          <h3>Box 8</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="parent3child">
          <h3>Box 9</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="parent3child">
          <h3>Box 10</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="parent3child">
          <h3>Box 11</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="parent3child">
          <h3>Box 12</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Playground;
