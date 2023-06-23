// import React from "react";

// export default function Button(props) {
//   return (
//     <>
//       <button type="submit" className={`btn btn-${props.type} m-2`}>
//         submit
//       </button>
//     </>
//   );
// }

import React from "react";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      className={`btn btn-${props.type} m-2`}
    >
      Submit
    </button>
  );
}
