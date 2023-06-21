import "./App.css";
// import Form from "./Form";
import FormComponent from "./componant/FormComponent";
import { FormProvider } from "./componant/FormContext";

function App() {
  return (
    <>
      <FormProvider>
        {/* <Form /> */}
        <div className="my-4 d-flex justify-content-center align-items-center">
          <FormComponent />
        </div>
      </FormProvider>
    </>
  );
}

export default App;
