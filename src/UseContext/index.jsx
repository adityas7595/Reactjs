// import { createContext } from "react";

// const BioContext = createContext();

// const BioProvide = ({ children }) => {
//   const name = "Aditya Singh";
//   const age = 25;
//   console.log("children============>", children);
//   return (
//     <BioContext.Provider value={(name, age)}>{children}</BioContext.Provider>
//   );
// };

// export default {BioProvide, BioContext}


import { createContext } from "react";

const BioContext = createContext();

const BioProvide = ({ children }) => {
  const name = "Aditya Singh";
  const age = 25;
  console.log("children============>", children);

  return (
    <BioContext.Provider value={{ name, age }}>
      {children}
    </BioContext.Provider>
  );
};

// Use named exports for better compatibility
export { BioProvide, BioContext };
