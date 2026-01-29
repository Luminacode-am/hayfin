import { ArrowRight } from 'lucide-react';
import heroImage from './finance.png';

export default function Hero() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-light-text dark:text-dark-text mb-4 leading-tight">
            Վստահություն կերտել յուրաքանչյուր գործարքի մեջ։
          </h1>
          <p className="text-lg text-light-text-primary dark:text-dark-text-primary mb-8">
            Ձեր վստահելի գործընկերը ֆինանսների և աճի հարցերում։
          </p>
          <button className="inline-flex items-center gap-2 bg-light-btn dark:bg-dark-btn text-light-text-tertiary px-6 py-3 rounded-xl font-semibold hover:bg-light-btn-hover dark:hover:bg-dark-btn-hover transition">
            Սկսել <ArrowRight size={18} />
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Finance illustration"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
}
