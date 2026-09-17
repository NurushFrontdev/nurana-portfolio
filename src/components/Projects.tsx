import { ImageWithFallback } from "./figma/ImageWithFallback";
import petisiaImg from "./img/image.png";
import xariImg from "./img/image copy.png";
import TechStore from "./img/image copy 2.png";

export function Projects() {
  const projects = [
    {
      title: "Petisia.az",
      description:
        "İnsanların ehtiyacı olan şəxslərə və sosial məsələlərə dəstək ola biləcəyi platforma. İstifadəçilər kampaniyalara imza ataraq və ya maddi dəstək göstərərək kömək edə, həmçinin öz kampaniyalarını yarada bilərlər. Platforma jurnalistlər və media nümayəndələri üçün də kampaniyaları izləyərək onları xəbər məzmununda paylaşmaq imkanı təqdim edir.",
      image: petisiaImg,
      tags: ["React", "Vite", "HTML", "SCSS"],
    },

    {
      title: "Xari Travel",
      description:
        "Qarabağa səyahət edənlər üçün hazırlanmış turizm platforması. İstifadəçilər rahat istirahət üçün otelləri, gəzmək və əylənmək üçün müxtəlif fəaliyyətləri və turları kəşf edə, seçdikləri turlarda iştirak etmək üçün qeydiyyatdan keçə bilərlər.",
      image: xariImg,
      tags: ["React", "Vite", "HTML", "SCSS"],
    },

    {
      title: "TechStore",
      description:
        "Onlayn elektronika satış platforması. İstifadəçilər elektron məhsullara baxa, məhsullar haqqında ətraflı məlumat əldə edə və məhsulları onlayn şəkildə satın ala bilərlər. Saytda həmçinin cihazlarda yaranan nasazlıqların AI dəstəyi ilə müəyyənləşdirilməsi və mümkün həll yollarının təqdim olunması funksiyası mövcuddur.",
      image: TechStore,
      tags: ["PHP", "HTML", "CSS", "SQL"],
    },

    {
      title: "SmartEdu",
      description: "",
      tags: ["PHP", "HTML", "CSS", "SQL", "JavaScript"],
      status: "Hazırlanır",
    },

    {
      title: "Dövlət və elmi veb layihələr",
      description:
        "Literature.az layihəsini sıfırdan hazırlamış, həmçinin AMEA üçün müxtəlif kiçik veb layihələri hazırlamışam.",
      tags: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
      sites: ["Literature.az", "AMEA"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-center text-neutral-50">Layihələr</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800 hover:border-purple-600 transition-colors group"
            >
              {/* Şəkil varsa şəkli göstər */}
              {project.image ? (
                <div className="relative aspect-video overflow-hidden bg-neutral-800">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                /* Şəkil yoxdursa xüsusi layihə bloku */
                <div className="relative aspect-video overflow-hidden bg-neutral-900 border-b border-neutral-800 flex items-center justify-center">
                  {project.status ? (
                    <div className="text-center">
                      <p className="text-neutral-300 text-lg">
                        {project.status}
                      </p>

                      <p className="text-neutral-500 text-sm mt-1">
                        Layihə üzərində iş davam edir
                      </p>
                    </div>
                  ) : (
                    <div className="text-center px-6">
                      <p className="text-neutral-300 text-lg mb-4">
                        Dövlət və elmi platformalar
                      </p>

                      <div className="flex flex-wrap justify-center gap-2">
                        {project.sites?.map((site) => (
                          <span
                            key={site}
                            className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm"
                          >
                            {site}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="p-6">
                <h3 className="mb-3 text-neutral-50">{project.title}</h3>

                <p className="text-neutral-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
