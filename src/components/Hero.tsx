import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-neutral-800 rounded-full text-sm text-neutral-300">
            Portfolioma xoş gəlmisiniz{" "}
          </span>
        </div>

        <h1 className="mb-6 text-neutral-50">
          Salam, mən <span className="text-purple-500">Nuranə Əhmədova</span>
        </h1>

        <p className="mb-8 text-neutral-300 max-w-2xl mx-auto">
          Frontend developer, yaradıcı və funksional veb tətbiqlər qurmağı
          sevirəm.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-neutral-50 rounded-lg transition-colors"
          >
            Əlaqə saxlayın
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-50 rounded-lg transition-colors"
          >
            Layihələrə baxın{" "}
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-neutral-400" size={32} />
        </div>
      </div>
    </section>
  );
}
