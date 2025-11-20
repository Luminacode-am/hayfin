
// import { ArrowRight } from "lucide-react";
// import heroImage from './finance.png'

// export default function Hero() {
//   return (
//     <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
     
//         <div className="text-center md:text-left md:w-1/2">
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//             Building trust in every transaction.
//           </h1>
//           <p className="text-lg text-gray-600 mb-8">
//             Your reliable partner in finance and growth.
//           </p>
//           <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
//             Get Started <ArrowRight size={18} />
//           </button>
//         </div>
//         <div className="md:w-1/2 flex justify-center">
//           <img
//             src={heroImage}
//             alt="Finance illustration"
//             className="w-full max-w-md h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }




import Card from "./card";
     
const cards = [
  {
title: "Easy-to-use system",
    description:
      "Everyone can quickly understand how to use the site: simple design, Armenian interface, and fast response.",
  },
  {
    title: "Control your finances in one place",
    description:
      "You can track expenses, plan your budget, and save money without complicated calculations.",
  },
  {
    title: "Security and Trust",
    description:
      "All data is kept confidential; the site protects your personal information.",
  },
];
export default function Advantages() {
  return (
    <section className=" max-w-7xl mx-auto py-16 px-6">
      <div className = "flex flex-col md:flex-row gap-10">
    <div className="md:w-1/3 text-left">
    <h1 className="text-4xl font-bold mb-6">
    The advantage and importance of this website in todays world
    </h1>
    </div>
    <div className="md:w-1/3 flex flex-col gap-6 items-end ">
          {cards.map((item) => (
          <Card
  key={item.title}
  className="flex flex-col justify-between p-8  border border-neutral-400 bg-neutral-400 "
>
  <h3 className="text-lg font-semibold text-black mb-4 mt-2 ml-2">{item.title}</h3>
  <p className="text-base text-zinc-700 mt-2 ml-2">{item.description}</p>
</Card>
          ))}
        </div>
      </div>
    </section>
  );
}