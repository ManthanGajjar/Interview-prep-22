// import React from "react";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import PackageListing from "./Components/NPM-Finder/components/PackageListing";
import SearchPackage from "./Components/NPM-Finder/components/SearchPackage";
import { store } from "./Components/NPM-Finder/redux";
// import ClassComp from "./Components/class/ClassComp";
// import FirstFunctionComp from "./Components/functions/functionalComponent";
// import AddUser from "./Components/users/AddUser";
// Called as stateless or functional component ( doing nothing just returning html content)

function App() {
  console.clear();
  return (
    // <header>
    //   <div>
    //     <FirstFunctionComp name="from app.tsx" />
    //     <ClassComp name="from app.tsx" /> */}
    //   </div>
    // </header>

    // for REDUX
    <Provider store={store}>
      <SearchPackage />
      <PackageListing />
    </Provider>
  );
}

export default App;
