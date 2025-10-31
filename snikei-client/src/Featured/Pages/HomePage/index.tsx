import HeroBanner from "../../Sections/HeroBanner";
import OurServices from "../../Sections/OurServices";
import OurProducts from "../../Sections/OurProducts";
import OurCategories from "../../Sections/OurCategories";
import OfferSlider from "../../Sections/OfferSlider";
import NewArrivals from "../../Sections/NewArrivals";
import ReviewSlider from "../../Sections/ReviewSlider";
import ArticleSection from "../../Sections/ArticleSection";
const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <div className="container mx-auto px-12 my-30">
        <OurServices />
        <OurProducts />
        <OurCategories />
        <OfferSlider />
        <NewArrivals />
        <ReviewSlider />
        <ArticleSection />
      </div>
    </div>
  );
};

export default HomePage;
