import React from "react";

const SlotM = (props) => {
  // let x = "😄";
  // let y = "😄";
  // let z = "😺 ";

  // following code represent object destructuring
  //   let x = props.x;
  //   let y = props.y;
  //   let z = props.z;

  // and this code short form of array destructuring
  let { x, y, z } = props;

  if (x == y && y == z) {
    return (
      <>
        <h1>
          {" "}
          {x} {y} {z}
        </h1>
        <h1>This is Matching.</h1>
        <hr></hr>
      </>
    );
  } else {
    return (
      <>
        <h1>
          {" "}
          {x} {y} {z}
        </h1>
        <h1>This is Not Matching.</h1>
        <hr></hr>
      </>
    );
  }
};

export default SlotM;
