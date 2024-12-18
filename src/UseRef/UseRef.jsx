import { forwardRef } from "react";
import { useRef } from "react";

const UseRefs = () => {
    
  const password = useRef(null);
  console.log("username===========>", username);
  console.log("password===========>", password);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username===========>", username.current.value);
    console.log("password===========>", password.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username_ss"
          ref={username}
          placeholder="Enter username"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password_ss"
          ref={password}
          placeholder="Enter password"
        />
        <br />*/}
        <BeforeReact19Input label="username" ref={username} />
        <BeforeReact19Input label="password" ref={password} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const BeforeReact19Input = (props) => {
    console.log("props=======>",props);
    
  return <>
  <label htmlFor={props.label}></label>
  <input
          type="text"
          ref={props.ref}
          placeholder="Enter password"
        />
  </>;
};

export default UseRefs;
