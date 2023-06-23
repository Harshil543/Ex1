import React, { useContext } from "react";
import FormContext from "./FormContext";

const InputType = ({ label, name, type = "text" }) => {
  const formctx = useContext(FormContext);

  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        value={formctx.formik.values[name]}
        name={name}
        onChange={formctx.formik.handleChange}
      />
    </div>
  );
};

export default InputType;

// import React, { useContext } from "react";
// import { FormContext } from "./FormContext";

// export default function Inputtype(props) {
//   const formik = useContext(FormContext);
//   // console.log(formik);
//   return (
//     <div className="form-group">
//       <label htmlFor={props.label}>{props.label}</label>
//       <input
//         type={props.type}
//         id={props.name}
//         className="form-control my-4"
//         name={props.name}
//         placeholder={props.label}
//         maxLength={props.maxLength}
//         value={formik.values}
//         onChange={formik.handleChange}
//         // required={props.required}
//         // pattern={props.pattern}
//       />
//       {/* <span>{formik.values.name}</span> */}
//     </div>
//   );
// }

// import React from "react";

// export default function InputType(props) {
//   return (
//     <div className="form-group">
//       <label htmlFor={props.label}>{props.label}</label>
//       <input
//         type={props.type}
//         className="form-control my-4"
//         name={props.label}
//         id={props.label}
//         placeholder={props.label}
//         maxLength={props.maxLength}
//         value={props.value}
//         onChange={props.onChange}
//         required={props.required}
//       />
//     </div>
//   );
// }
