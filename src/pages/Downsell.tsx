import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CountdownTimer } from "@/components/CountdownTimer";
import { SectionTitle } from "@/components/SectionTitle";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { CheckCircle2, Sparkles, ShieldCheck, Gift, Clock } from "lucide-react";

const Downsell = () => {
  const scrollToOferta = () =>
    document.getElementById("oferta-downsell")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <ExitIntentPopup onAccept={scrollToOferta} />
      {/* HEADER - MANTER IDÊNTICO */}
      <header className="px-4 pt-6 max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-gold tracking-wide">PROTOCOLO</span>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline">Última oportunidad</span>
      </header>

      {/* HERO DOWNSELL - MANTER IDÊNTICO */}
      <section className="px-4 pt-10 md:pt-16 pb-12 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warning/10 border border-warning/40 mb-6 fade-in-up">
          <Clock className="w-4 h-4 text-warning" />
          <span className="text-sm text-warning font-semibold uppercase tracking-wider">
            Espera... antes de irte
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-black text-gold leading-[1.05] mb-6 fade-in-up">
          Entiendo... $ 27 No Era el Momento
        </h1>

        <p className="text-xl md:text-2xl text-foreground font-semibold mb-5">
          Pero <span className="text-gold">no quiero que te vayas con las manos vacías</span>
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Sé que cada peso cuenta. Por eso, solo en esta página, te ofrezco el{" "}
          <span className="text-gold font-bold">Protocolo de Mensajes Inteligentes</span> con un
          descuento aún mayor — para que <span className="text-foreground font-bold">nada</span> se interponga
          entre tú y la mujer que quieres reconquistar.
        </p>

        <CountdownTimer />
      </section>

      {/* OFERTA DOWNSELL - SUBSTITUIÇÃO AQUI */}
      <section id="oferta-downsell" className="px-4 py-12 max-w-4xl mx-auto">
        <SectionTitle className="text-center mb-10">
          Última Oferta: Solo $ 17
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="bg-secondary/50 border border-muted rounded-2xl p-6 text-center opacity-60">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Valor normal</p>
            <p className="text-3xl font-bold text-muted-foreground line-through">$ 97</p>
          </div>

          <div className="bg-secondary/50 border border-muted rounded-2xl p-6 text-center opacity-60">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Oferta inicial</p>
            <p className="text-3xl font-bold text-muted-foreground line-through">$ 27</p>
          </div>

          <div className="relative gradient-gold rounded-2xl p-8 text-center shadow-glow scale-105">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warning text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Última chance
            </span>
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-2">Hoy pagas solo</p>
            <p className="text-6xl font-black text-primary-foreground">$ 17</p>
            <p className="text-xs text-primary-foreground/80 mt-2">Oferta exclusiva e irrepetible</p>
          </div>
        </div>

        <p className="text-center text-foreground text-lg mt-10">
          Por menos que un café, tendrás acceso a los mismos scripts que ya ayudaron a{" "}
          <span className="text-gold font-bold">+1.500 hombres</span> a reconquistar a su ex.
        </p>

        {/* ✅ BOTÃO DE COMPRA — SUBSTITUI O SNIPPET DA HOTMART */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <a
            href="https://go.centerpag.com/PPU38CQAAAS?upsell=true"
            className="block w-full gradient-gold text-primary-foreground font-black text-lg md:text-2xl px-8 py-6 rounded-2xl shadow-gold hover:scale-[1.02] transition-transform bounce-cta text-center"
          >
            ¡SÍ! QUIERO EL PROTOCOLO POR SOLO $ 17
          </a>
          <div className="mt-4">
            <Link
              to="https://alumnomrd.vercel.app/"
              className="text-muted-foreground text-sm underline hover:text-gold transition-colors"
            >
              No, prefiero rechazar esta oferta única para siempre
            </Link>
          </div>
        </div>
      </section>

      {/* QUE INCLUYE - MANTER IDÊNTICO */}
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <SectionTitle className="text-center mb-10">
          Todo Esto Por $ 17
        </SectionTitle>

        <div className="bg-card border-2 border-gold/40 rounded-2xl p-6 md:p-10 shadow-gold">
          <ul className="space-y-4 text-base md:text-lg">
            {[
              "Paquete 1: Scripts de Reacercamiento",
              "Paquete 2: Scripts de Valor",
              "Paquete 3: Invitación Estratégica",
              "Paquete 4: Resolución de Conflictos",
              'Bono: Guía "Qué NUNCA Decir"',
              "Bono: Análisis de Perfil de Mensajes",
              "Acceso al Grupo VIP de Soporte",
              "30 días de garantía total",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GARANTIA - MANTER IDÊNTICO */}
      <section className="px-4 py-12 max-w-3xl mx-auto">
        <div className="bg-card border-2 border-success/50 rounded-2xl p-8 text-center">
          <ShieldCheck className="w-14 h-14 text-success mx-auto mb-4" />
          <h3 className="font-display text-2xl md:text-3xl font-bold text-gold mb-3">
            Garantía de 30 Días
          </h3>
          <p className="text-foreground leading-relaxed">
            Si no obtienes claridad ni resultados, te devolvemos cada centavo.{" "}
            <span className="text-success font-bold">Sin preguntas.</span>
          </p>
        </div>
      </section>

      {/* CTA FINAL - MANTER IDÊNTICO */}
      <section className="px-4 py-16 max-w-3xl mx-auto text-center">
        <Gift className="w-12 h-12 text-gold mx-auto mb-6 pulse-gold" />
        <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-6">
          Esta es Tu <span className="text-gold">Última Oportunidad</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Si sales ahora, esta página no volverá a aparecer. El precio regresa a $ 97.
        </p>

        <a
          href="https://go.centerpag.com/PPU38CQAAAS?upsell=true"
          className="block w-full gradient-gold text-primary-foreground font-black text-lg md:text-2xl px-8 py-6 rounded-2xl shadow-gold hover:scale-[1.02] transition-transform bounce-cta"
        >
          ¡SÍ! QUIERO EL PROTOCOLO POR SOLO $ 17
        </a>
        <p className="text-muted-foreground text-sm mt-4">
          Compra 100% segura · Acceso inmediato · 30 días de garantía
        </p>

        <div className="mt-10">
          <Link
            to="https://alumnomrd.vercel.app/"
            className="text-muted-foreground text-sm underline hover:text-gold transition-colors"
          >
            No, prefiero rechazar esta oferta única para siempre
          </Link>
        </div>

        <p className="text-muted-foreground text-xs mt-12">
          © Protocolo de Mensajes Inteligentes · Todos los derechos reservados
        </p>
      </section>
    </div>
  );
};

export default Downsell;