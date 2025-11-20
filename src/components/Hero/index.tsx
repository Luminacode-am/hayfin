
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
    <div className="w-full flex flex-col gap-6">
  {cards.map((item) => (
    <Card
      key={item.title}
      className="flex flex-col justify-between p-8 border border-neutral-400 "
    >
      <h3 className="text-lg font-semibold text-black mb-4 mt-2">
        {item.title}
      </h3>
      <p className="text-base text-zinc-700 mt-2">{item.description}</p>
    </Card>
  ))}
</div>
      </div>
    </section>
  );
};