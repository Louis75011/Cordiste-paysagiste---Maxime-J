import { motion } from "motion/react";
import { 
  Hammer, 
  TreePine, 
  Home, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  HardHat,
  Mountain
} from "lucide-react";

export default function App() {
  const services = [
    {
      title: "Couverture & Toiture",
      description: "Expertise en pose, rénovation et entretien de toitures. Ancien cordiste, j'interviens en toute sécurité sur tous types de hauteurs.",
      icon: <Home className="w-8 h-8 text-brand-slate" />,
      image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Jardinage & Paysage",
      description: "Entretien d'espaces verts, tonte, taille de haies et aménagement extérieur pour valoriser votre patrimoine naturel.",
      icon: <TreePine className="w-8 h-8 text-brand-green" />,
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Petits Travaux Bâtiment",
      description: "Rénovation intérieure, maçonnerie légère et bricolage général pour vos projets de maison.",
      icon: <Hammer className="w-8 h-8 text-brand-earth" />,
      image: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const regions = [
    { name: "Essonne (91)", detail: "Secteur principal actuel" },
    { name: "Vendée (85)", detail: "Zone d'intervention & future implantation" },
    { name: "Grand Est", detail: "Interventions ponctuelles" }
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-brand-green p-2 rounded-lg">
              <HardHat className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-brand-slate uppercase">Maxime Josset</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-brand-green transition-colors">Services</a>
            <a href="#about" className="hover:text-brand-green transition-colors">À propos</a>
            <a href="#contact" className="bg-brand-green text-white px-5 py-2.5 rounded-full hover:bg-brand-green/90 transition-all shadow-sm">Demander un devis</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 rounded-l-[100px] transform translate-x-1/4 -skew-x-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-6">
                Artisan Multi-Services
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                L'expertise du <span className="text-brand-green">terrain</span> au service de votre habitat.
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Ancien cordiste spécialisé en couverture et travaux paysagers. J'interviens en Essonne et en Vendée pour vos projets de toiture, jardinage et rénovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-brand-green/20 transition-all">
                  Contactez-moi <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#services" className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  Voir mes services
                </a>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">100% de satisfaction</span> sur mes interventions locales.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590066394791-b0033d47997f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Travaux de toiture" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="text-brand-accent w-5 h-5" />
                    <span className="text-sm font-semibold">Garantie Décennale & Responsabilité Civile</span>
                  </div>
                  <p className="text-xl font-bold">Sécurité et qualité certifiées</p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-accent/20 p-3 rounded-xl">
                    <Mountain className="text-brand-earth w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Spécialité</p>
                    <p className="text-sm font-extrabold text-slate-900">Travaux en Hauteur</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mes Domaines d'Intervention</h2>
            <p className="text-slate-600">
              De la toiture au jardin, je vous accompagne dans l'entretien et l'amélioration de votre habitat avec rigueur et professionnalisme.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {["Qualité artisanale", "Devis gratuit", "Respect des délais"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-brand-green" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80&w=600" 
                  alt="Chantier" 
                  className="rounded-2xl h-64 w-full object-cover mt-8"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1592150621344-c7a43422e497?auto=format&fit=crop&q=80&w=600" 
                  alt="Jardin" 
                  className="rounded-2xl h-64 w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-green text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-3xl font-bold mb-1">Ancien Cordiste</p>
                <p className="text-sm opacity-80">Une agilité et une sécurité renforcées pour vos travaux difficiles d'accès.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">À propos de Maxime Josset</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Fort d'une expérience solide en tant que cordiste urbain à Paris, j'ai choisi de mettre mes compétences au service des particuliers et des entreprises locales. Ma formation de couvreur complète mon agilité naturelle par une expertise technique pointue.
                </p>
                <p>
                  Mon approche est simple : <span className="font-bold text-brand-green">le travail bien fait</span>. Que ce soit pour une toiture à rénover, un jardin à entretenir ou des petits travaux de bâtiment, je m'engage sur la qualité et la transparence.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {regions.map((region, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <MapPin className="text-brand-green w-5 h-5 shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{region.name}</p>
                        <p className="text-xs text-slate-500">{region.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-slate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-3xl p-8 lg:p-16 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Prêt à lancer votre projet ?</h2>
                <p className="text-slate-300 mb-10 text-lg">
                  Contactez-moi dès aujourd'hui pour un devis gratuit ou simplement pour échanger sur vos besoins en Essonne ou en Vendée.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <Phone className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Téléphone</p>
                      <p className="text-xl font-bold">06 XX XX XX XX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <Mail className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-xl font-bold">contact@maxime-josset.fr</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Votre nom" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                  <option className="bg-brand-slate">Type de projet</option>
                  <option className="bg-brand-slate">Couverture / Toiture</option>
                  <option className="bg-brand-slate">Jardinage / Paysage</option>
                  <option className="bg-brand-slate">Bâtiment / Rénovation</option>
                </select>
                <textarea 
                  rows={4} 
                  placeholder="Décrivez votre projet..." 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                ></textarea>
                <button className="w-full bg-brand-accent text-brand-slate font-extrabold py-4 rounded-xl hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/20">
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-brand-green p-1.5 rounded-md">
              <HardHat className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-brand-slate uppercase">Maxime Josset</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 Entreprise Maxime Josset. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-xs font-medium uppercase tracking-widest">Partenaire : Arx Systema</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
