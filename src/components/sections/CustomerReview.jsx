import { RiDoubleQuotesL } from "react-icons/ri";
import customerImage from "../../assets/97.jpg";
import profileImg from "../../assets/profileimg.jpg";

const CustomerReview = () => {
  return (
    <section className="flex sm:flex-row flex-col max-w-[1600px] mx-auto px-5 py-[100px] gap-4">
      <div className="flex-1 grid place-content-center">
        <div className="space-y-3 max-w-[60ch]">
          <RiDoubleQuotesL className="text-[#f06d48] text-5xl" />
          <p>
            {`Wide variety of watches at [watch website name], from timeless styles to smartwatches, kept me browsing for ages!  Detailed info and pictures on each watch made choosing easy.  Fast shipping impressed, but reaching customer service felt like a hurdle. Initiating a return could be more user-friendly. Overall, a good experience with a great selection. 4 / 5 stars.`}
          </p>
          <h3 className="text-xl font-bold">May 24, 2024</h3>
          <div className="flex items-center gap-4 pt-5">
            <img
              src={profileImg}
              alt=""
              className="size-[60px] object-cover rounded-full"
            />
            <div>
              <h3 className="font-bold text-xl">John Doe</h3>
              <p className="font-thin text-sm">CEO of ABC</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 grid place-content-center">
        <div className="sm:shadow-[280px_-80px_0px_0px_#f06d48] shadow-none">
          <img src={customerImage} alt="" className="w-[600px] bg-gray-800" />
        </div>
      </div>
    </section>
  );
};
export default CustomerReview;
