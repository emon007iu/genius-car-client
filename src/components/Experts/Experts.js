import expert1 from "../../images/experts/expert-1.jpg";
import expert2 from "../../images/experts/expert-2.jpg";
import expert3 from "../../images/experts/expert-3.jpg";
import expert4 from "../../images/experts/expert-4.jpg";
import expert5 from "../../images/experts/expert-5.jpg";
import expert6 from "../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Will Smith", img: expert1 },
  { id: 2, name: "Messy Steve", img: expert2 },
  { id: 3, name: "Dwayne Rock", img: expert3 },
  { id: 4, name: "Statham Johnson", img: expert4 },
  { id: 5, name: "Ronaldo", img: expert5 },
  { id: 6, name: "Tom Crouse", img: expert6 },
];

const Experts = () => {
  return (
    <div className="max-w-7xl mx-auto pb-10 px-2 sm:px-6 lg:px-8">
      <h2 className="text-center font-bold text-4xl py-10">
        Our Experts: ({experts.length})
      </h2>
      <div className="single-expert grid md:grid-cols-3 sm:grid-cols-1 gap-2 ">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
