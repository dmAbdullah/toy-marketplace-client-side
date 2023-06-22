import Title from "../../../Hook/Title";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Shop from "./Shop";

const Home = () => {
    Title("Home")
    return (
           <>
           <Banner/> 
           <Gallery/>
           </>
    );
};

export default Home;