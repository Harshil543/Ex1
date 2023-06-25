import "./App.css";
// import Form from "./Form";
import FormComponent from "./componant/FormComponent";
import { FormProvider } from "./componant/FormContext";

function App() {
  return (
    <>
      <FormProvider>
        {/* <Form /> */}
        <div
          style={{ backgroundColor: "#0A6EBD" }}
          className="d-flex justify-content-center"
        >
          <FormComponent />
        </div>
      </FormProvider>
    </>
  );
}

export default App;
