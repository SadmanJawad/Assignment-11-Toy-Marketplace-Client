import Banner from "../Banner/Banner";
import ExtraSectionOne from "../ExtraSection/ExtraSectionOne";
import ExtraSectionTwo from "../ExtraSection/ExtraSectionTwo";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <ExtraSectionOne></ExtraSectionOne>
            <ExtraSectionTwo></ExtraSectionTwo>
        </div>
    );
};

export default Home;