// import React from "react";
import "./App.css";
// import ClassComp from "./Components/class/ClassComp";
// import FirstFunctionComp from "./Components/functions/functionalComponent";
import AddUser from "./Components/users/AddUser";
// Called as stateless or functional component ( doing nothing just returning html content)

function App() {
  console.clear();
  return (
    <header>
      <div>
        {/* <FirstFunctionComp name="from app.tsx" />
        <ClassComp name="from app.tsx" /> */}
        <AddUser />
      </div>
    </header>
  );
}

export default App;
