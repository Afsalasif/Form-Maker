import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FormContextProvider } from './generator/FormComponents/FormContext';

import FormGenerator from './generator/FormGenerator';


function App() {
  return (
    <FormContextProvider>
      <div className="App">
      <FormGenerator />
    </div>
    </FormContextProvider>
    
  );
}

export default App;
