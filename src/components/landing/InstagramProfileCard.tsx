import { Instagram, MessageCircle, BadgeCheck, Plus } from "lucide-react";
import perfil from "@/assets/perfil/dai-perfil.jpg";

const stats = [
  { value: "+650", label: "Posteos" },
  { value: "+30", label: "Clientes" },
  { value: "+150", label: "Reels" },
];

const bio = [
  "✨ Gestiono las redes de tu negocio",
  "📸 Creo el contenido que necesitás",
  "📍 Santa Fe, Argentina 🇦🇷",
];

const WHATSAPP_URL =
  "https://wa.me/5493424625118?text=Hola%20Dai!%20Vi%20tu%20perfil%20y%20quiero%20que%20gestiones%20las%20redes%20de%20mi%20negocio";
const INSTAGRAM_URL = "https://www.instagram.com/daiparet.cm/";

const InstagramProfileCard = () => {
  return (
    <div className="relative w-full max-w-[22rem] sm:max-w-sm lg:max-w-md mx-auto">
      {/* Resplandor de marca detrás de la tarjeta */}
      <div className="pointer-events-none absolute -inset-6 bg-brand-hotpink/25 blur-3xl rounded-[3rem]" />

      <div className="relative rounded-3xl border border-white/10 bg-[#181320]/90 backdrop-blur-xl shadow-2xl p-5 sm:p-6 lg:p-8">
        {/* Encabezado: usuario + logo IG */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5">
            <span className="text-base lg:text-lg font-semibold text-white">
              daiparet.cm
            </span>
            <BadgeCheck
              size={17}
              className="text-brand-hotpink fill-brand-hotpink/20"
            />
          </div>
          <Instagram className="text-white/70 size-5 lg:size-6" />
        </div>

        {/* Avatar + métricas */}
        <div className="flex items-center gap-4 sm:gap-5 mb-4">
          {/* Avatar con anillo de historia */}
          <div className="shrink-0 rounded-full bg-gradient-to-tr from-brand-yellow via-brand-hotpink to-brand-lavender p-[3px]">
            <div className="rounded-full bg-[#181320] p-[2px]">
              <img
                src={perfil}
                alt="Dai — Community Manager"
                className="h-20 w-20 lg:h-24 lg:w-24 rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-1 justify-around text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-lg lg:text-xl font-bold text-white leading-none">
                  {s.value}
                </p>
                <p className="mt-1 text-xs lg:text-sm text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nombre + bio */}
        <div className="space-y-0.5 mb-5">
          <p className="text-sm lg:text-base font-semibold text-white">
            Dai | Community Manager 📲
          </p>
          {bio.map((line) => (
            <p
              key={line}
              className="text-sm lg:text-[0.95rem] text-white/70 leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#0095f6] px-4 py-2.5 lg:py-3 text-sm lg:text-base font-semibold text-white transition-colors hover:bg-[#1aa1ff]"
          >
            <Plus size={16} />
            Seguir
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 lg:py-3 text-sm lg:text-base font-semibold text-white transition-colors hover:bg-white/15"
          >
            <MessageCircle size={16} className="text-[#25d366]" />
            Mensaje
          </a>
        </div>
      </div>

      {/* Pill flotante de contacto */}
      <div
        className="absolute -bottom-3 right-1 sm:-right-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#181320]/95 px-3 py-1.5 shadow-lg backdrop-blur animate-float"
        style={{ animationDelay: "0.6s" }}
      >
        <span className="h-2 w-2 rounded-full bg-[#25d366] shadow-[0_0_8px_#25d366]" />
        <span className="text-xs font-medium text-white/80">
          Respondo en el día
        </span>
      </div>
    </div>
  );
};

export default InstagramProfileCard;
