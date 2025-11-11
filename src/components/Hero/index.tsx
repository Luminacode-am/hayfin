import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white text-center py-24 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Welcome to HAYFIN ! Your friend is in finance.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. luptatem reprehenderit labore asperiores provident officiis exercitationem, 
        </p>
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
          Get Started <ArrowRight size={18} />
        </button>
    
    </section>
  );
}
