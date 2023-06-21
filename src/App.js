import "./App.css";
// import Form from "./Form";
import Compform from "./componant/Compform";
import { FormProvider } from "./componant/FormContext";

function App() {
  return (
    <>
      <FormProvider>
        {/* <Form /> */}
        <div className="my-4 d-flex justify-content-center align-items-center">
          <Compform />
        </div>
      </FormProvider>
    </>
  );
}

export default App;
