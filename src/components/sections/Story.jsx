import storyImg from "../../assets/watch05.png";

const Story = () => {
  return (
    <section className="flex sm:flex-row flex-col max-w-[1600px] mx-auto px-5 py-[100px] gap-4">
      <div className="flex-1 grid place-content-center">
        <div className="sm:shadow-[-280px_80px_0px_0px_#f06d48] shadow-none">
          <img src={storyImg} alt="" className="w-[600px] bg-gray-800" />
        </div>
      </div>
      <div className="flex-1 grid place-content-center">
        <div className="space-y-3 max-w-[60ch]">
          <h3 className="uppercase text-center font-semibold text-xl border-t-4 border-[#f06d48] w-fit py-4">
            Our Story
          </h3>
          <h2 className="text-3xl font-bold">
            Time Well Spent: A Legacy of Adventure
          </h2>
          <p>
            {`For generations, we've been driven by the belief that a watch tells
            more than just time. It tells the story of your experiences, your
            accomplishments, and your relentless pursuit of adventure. We
            meticulously design and engineer our timepieces to be as reliable as
            they are stylish, ensuring they stand by side through every
            challenge and triumph.`}
          </p>
          <button className="bg-black text-white px-5 py-2">Discover</button>
        </div>
      </div>
    </section>
  );
};
export default Story;
