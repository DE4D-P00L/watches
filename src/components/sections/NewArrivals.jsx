import { newArrival } from "../../data/watch";
import Card from "../UI/Card";

const NewArrivals = () => {
  return (
    <section
      className="flex flex-col items-center gap-3 min-h-[70dvh] justify-center"
      id="store">
      <h2 className="uppercase text-center font-semibold text-xl py-4 border-t-4 border-[#f06d48]">
        New Arrivals
      </h2>
      <div className="flex py-5 gap-5 flex-wrap justify-center px-3">
        {newArrival.map((watch, i) => (
          <Card
            key={i}
            className="min-h-[300px] group max-w-[300px] min-w-[200px]">
            <img
              src={watch.image}
              alt=""
              className="w-[100px] h-[150px] object-contain"
            />
            <h3 className="font-semibold text-xl">{watch.name}</h3>
            <div className="flex items-center justify-between w-full p-2 mt-auto">
              <p className="text-[#f06d48] font-semibold group-hover:text-white">
                ₹{watch.price}
              </p>
              <button className="bg-black text-white mt-auto px-3 py-1.5">
                Add to Cart
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default NewArrivals;
