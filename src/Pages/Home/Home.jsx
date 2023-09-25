// import Header from "../../Components/Header/Header";

import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Phones from "../../Components/PhonesCard/Phones";

const Home = () => {
  const phones = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Phones phones={phones}></Phones>
    </div>
  );
};

export default Home;
