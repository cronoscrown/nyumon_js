import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iusto distinctio vel deserunt maiores deleniti atque vero, cum qui quam inventore velit expedita in assumenda omnis voluptates voluptate impedit cumque.</p>
    </React.Fragment>
  );
};

export default Child;
