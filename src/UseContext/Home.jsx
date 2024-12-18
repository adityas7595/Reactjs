import { useContext } from "react";
import { BioContext } from ".";

const Home = () => {
    const myname = useContext(BioContext)
    return <h1>Hello Use context. my name is {myname.name} and age is {myname.age}</h1>;
}

export default Home;