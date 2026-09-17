import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-center text-neutral-50">Haqqımda</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-800">
              <ImageWithFallback
                src="https://i.pinimg.com/736x/d3/97/71/d39771fe522323514eded6c4d790acb2.jpg"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-6">
            <p className="text-neutral-300">
              Mən frontend development sahəsində özünü inkişaf etdirməyə
              fokuslanan və daim öyrənməyi sevən bir developerəm. İstifadəçi
              üçün rahat, estetik və funksional interfeyslər yaratmaq mənim üçün
              çox önəmlidir.
            </p>

            <p className="text-neutral-300">
              Kod yazmaqla yanaşı, yeni trendləri araşdırmağı, fərqli dizayn
              yanaşmalarını öyrənməyi və öz üzərimdə davamlı işləməyi sevirəm.
              Məqsədim hər layihədə daha yaxşı nəticə ortaya qoymaqdır.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="text-purple-500 mb-2">2</div>
                <div className="text-neutral-400">İl təcrübə</div>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="text-purple-500 mb-2">8</div>
                <div className="text-neutral-400">Tamamlanmış layihə</div>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="text-purple-500 mb-2">100+</div>
                <div className="text-neutral-400">Məmnun müştəri</div>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="text-purple-500 mb-2">10+</div>
                <div className="text-neutral-400">Texnologiya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
