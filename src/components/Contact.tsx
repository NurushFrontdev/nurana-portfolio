import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    alert("Thanks for reaching out! I'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-center text-neutral-50">Əlaqə saxlayın</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-neutral-300 mb-8">
              Yeni layihələr və yaradıcı ideyalar haqqında danışmağa hər zaman
              açığam. Gəlin, ideyalarınızı birlikdə reallaşdıraq!
            </p>

            <div className="space-y-6">
              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-purple-500" size={20} />
                </div>

                <div>
                  <div className="text-neutral-50 mb-1">Instagram</div>

                  <a
                    href="https://www.instagram.com/nurushahmadova?igsh=MTZwb3lteGVzZ3dvcw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-50 transition-colors"
                  >
                    @nurushahmadova
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="text-purple-500" size={20} />
                </div>

                <div>
                  <div className="text-neutral-50 mb-1">GitHub</div>

                  <a
                    href="https://github.com/NurushFrontdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-50 transition-colors"
                  >
                    NurushFrontdev
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin className="text-purple-500" size={20} />
                </div>

                <div>
                  <div className="text-neutral-50 mb-1">LinkedIn</div>

                  <a
                    href="https://www.linkedin.com/in/nurana-ahmadova-604489431/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-50 transition-colors"
                  >
                    Nurana Ahmadova
                  </a>
                </div>
              </div>

              {/* Gmail */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-purple-500" size={20} />
                </div>

                <div>
                  <div className="text-neutral-50 mb-1">Gmail</div>

                  <a
                    href="mailto:SENIN-EMAILIN@gmail.com"
                    className="text-neutral-400 hover:text-neutral-50 transition-colors"
                  >
                    nurana.workdev@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-neutral-800 text-center text-neutral-400">
          <p>© 2026 Nuranə Əhmədova. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </section>
  );
}
