import CustomerReview from "../sections/CustomerReview";
import Featured from "../sections/Featured";
import NewArrivals from "../sections/NewArrivals";
import Story from "../sections/Story";
import Subscribe from "../sections/Subscribe";

const Main = () => {
  return (
    <div>
      <Featured />
      <Story />
      <NewArrivals />
      <CustomerReview />
      <Subscribe />
    </div>
  );
};
export default Main;
