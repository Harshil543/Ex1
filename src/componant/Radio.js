// import React from "react";

// export default function Radio(props) {
//   const genderlist = [
//     { id: "M", name: "Male", value: "MALE" },
//     { id: "F", name: "Female", value: "FEMALE" },
//   ];
//   return (
//     <>
//       <label className="my-3">{props.label}</label>
//       {genderlist.map((gender) => {
//         return (
//           <div key={gender.id} className="form-group">
//             <input
//               type="radio"
//               id={gender.id}
//               name="gender"
//               value={gender.value}
//               onChange={props.onChange}
//               required
//             />
//             <label htmlFor={gender.id}>{gender.name}</label>
//           </div>
//         );
//       })}
//     </>
//   );
// }

import React from "react";

export default function Radio(props) {
  return (
    <>
      <div key={props.id} className="form-group">
        <input
          type="radio"
          id={props.id}
          name="gender"
          value={props.value}
          onChange={props.onChange}
          required
        />
        <label htmlFor={props.id}>{props.name}</label>
      </div>
    </>
  );
}
