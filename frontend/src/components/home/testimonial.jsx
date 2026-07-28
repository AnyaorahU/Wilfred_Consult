import { Quote, Star } from "lucide-react";

const data = [
  {
    id: 1,
    note: `"EduVoyage made my dream of studying in London a reality. Their team guided me through every step, from university selection to visa approval. I couldn't have done it without them!"`,
    name: "Sarah Johnson",
    study: "MBA Graduate, London",
  },
  {
    id: 2,
    note: `"The educational tour to Canada was incredible! Not only did I get to visit potential universities, but I also experienced the culture and made lifelong friends. Highly recommended!"`,
    name: "Michael Chen",
    study: "Engineering Student, Toronto",
  },
  {
    id: 3,
    note: `"Their 24/7 support was a game-changer. Even when I had issues settling in Australia, they were just a call away. Professional, caring, and truly invested in student success."`,
    name: "Pria Patel",
    study: "Medical Student, Melbourne",
  },
];

function Testimonial() {
  return (
    <div className="py-10 space-y-8">
      <div className="flex flex-col items-center w-150 mx-auto text-center p-4 space-y-2">
        <div className="px-2 rounded-full bg-[#e9a227]/10 text-[#e9a227]">
          Testimonials
        </div>
        <h2 className="text-3xl font-semibold">What Our Students Say</h2>
        <p className="text-neutral-500">
          Hear from students who have successfully embarked on their
          international education journey with us.
        </p>
      </div>

      {/* card  */}
      <div className="grid grid-cols-3 gap-8 ">
        {data.map((d) => (
          <div className="p-4 border rounded-2xl space-y-4 border-neutral-300 hover:shadow-lg">
            <div>
              <Quote color="#e9a227" size={30} />
            </div>
            <div className="flex gap-2">
              <Star color="#e9a227" size={18} />
              <Star color="#e9a227" size={18} />
              <Star color="#e9a227" size={18} />
              <Star color="#e9a227" size={18} />
              <Star color="#e9a227" size={18} />
            </div>
            <p>{d.note}</p>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full shadow-lg bg-[#e9a227]/20"></div>
              <div>
                <p className="font-semibold">{d.name}</p>
                <p className="text-neutral-500">{d.study}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
