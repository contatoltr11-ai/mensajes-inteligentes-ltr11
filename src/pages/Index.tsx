import { useEffect, useState, useRef } from "react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { SectionTitle } from "@/components/SectionTitle";
import { ExitIntentPopupMain } from "@/components/ExitIntentPopupMain";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  MessageSquare,
  Dumbbell,
  CalendarHeart,
  ShieldCheck,
  X,
  Lock,
  Sparkles,
  Users,
  FileText,
  Search,
  Clock,
} from "lucide-react";

const scrollToOferta = () =>
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });

const Index = () => {
  const [vagas] = useState(47);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/2b985c2c-cbb1-45b0-8bbc-c1d5adf6f7aa/players/6abe712a54dd918176f5aead/v4/player.js";
      script.async = true;
      script.onload = () => {
        if (window.vturb) {
          window.vturb.render();
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  // ✅ NOVO: Klarity Script para rastreamento de leads
  useEffect(() => {
    const klarityScript = document.createElement('script');
    klarityScript.type = 'text/javascript';
    klarityScript.innerHTML = `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wdpxl8yts0");`;
    document.head.appendChild(klarityScript);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pb-28">
      <ExitIntentPopupMain />
      {/* HEADER */}
      <header className="px-4 pt-6 max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xs tracking-wide">TU COMPRA AÚN NO ESTÁ COMPLETA</span>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline">Acceso exclusivo · Post-compra</span>
      </header>
      {/* SECCIÓN 1 — HERO */}
      <section className="px-4 pt-10 md:pt-16 pb-12 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 mb-6 fade-in-up">
          <Lock className="w-4 h-4 text-gold" />
          <span className="text-sm text-gold font-semibold uppercase tracking-wider">NO CIERRES NI SALGAS DE ESTA PÁGINA</span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-gold leading-[1.05] mb-6 fade-in-up">
          ¡Acaba de Dar el Primer Paso!
        </h1>
        <p className="text-xl md:text-3xl text-foreground font-semibold mb-5 fade-in-up">
          Ahora, 10 Minutos para Tener las <span className="text-gold">Palabras Exactas</span> y Recuperarla
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up">
          El próximo mensaje puede cambiarlo todo, para bien o para mal. No dejes que la confusión te paralice. Tienes solo
          <span className="text-warning font-bold"> 10 minutos </span> para asegurar tu acceso.
        </p>
      </section>
      {/* SECCIÓN 2 — VIDEO CON VTURB */}
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <h2 className="text-center font-display text-2xl md:text-4xl font-bold text-foreground mb-6">
          Mira Cómo Funciona el <span className="text-gold">Protocolo</span> por Dentro
        </h2>
        <div ref={videoRef} className="rounded-2xl overflow-hidden border-2 border-gold shadow-glow bg-card flex justify-center p-6">
          <vturb-smartplayer id="vid-6abe712a54dd918176f5aead" style={{display: 'block', margin: '0 auto', width: '100%', maxWidth: '600px'}}></vturb-smartplayer>
        </div>
        <p className="text-center text-muted-foreground mt-5 text-base md:text-lg">
          <Users className="inline w-5 h-5 text-success mr-2 -mt-1" />
          + 1.500 hombres ya usan nuestros scripts
        </p>
      </section>
      {/* SECCIÓN 3 — PROBLEMA */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <SectionTitle className="text-center mb-6">
          El Error Fatal que Destruye el <span className="text-warning">73%</span> de las Reconquistas
        </SectionTitle>
        <p className="text-center text-lg md:text-xl text-foreground mb-10">
          ¿Estás emocionalmente exhausto por los <em>"vaivenes"</em> de ella?
        </p>
        <div className="bg-card border-2 border-gold/40 rounded-2xl p-6 md:p-10 shadow-gold">
          <ul className="space-y-4 text-base md:text-lg">
            {[
              "No saber qué decir en el momento exacto",
              "Un simple 'hola' parecer desesperación",
              "Una frase mal colocada = defensas activadas",
              "Vuelves a ser el 'amiguito'",
              "Es como caminar sobre huevos",
              "Un error enfría todo de una vez, sin vuelta atrás",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center text-xl md:text-2xl font-bold text-gold mt-10">
          ¿Cuántas chances más estás dispuesto a perder?
        </p>
      </section>
      {/* SECCIÓN 4 — SOLUCIÓN */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <SectionTitle className="text-center mb-4">
          El Protocolo de Mensajes Inteligentes es Tu Mapa Estratégico
        </SectionTitle>
        <p className="text-center text-lg md:text-xl text-foreground mb-12">
          Sabrás exactamente <span className="text-gold font-semibold">qué enviar</span>, <span className="text-gold font-semibold">cuándo enviarlo</span> y <span className="text-gold font-semibold">cómo enviarlo</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: MessageSquare, title: "PAQUETE 1: Scripts de Reacercamiento", desc: "Mensajes para romper el hielo sin parecer desesperado" },
            { icon: Dumbbell, title: "PAQUETE 2: Scripts de Valor", desc: "Muestran tu transformación y reaviva el interés de ella" },
            { icon: CalendarHeart, title: "PAQUETE 3: Invitación Estratégica", desc: "Propón citas que ella no querrá rechazar" },
            { icon: ShieldCheck, title: "PAQUETE 4: Resolución de Conflictos", desc: "Maneja objeciones y dudas de forma asertiva" },
          ].map((p, i) => (
            <div
              key={p.title}
              className="bg-card border border-gold/40 hover:border-gold rounded-2xl p-6 transition-all hover:shadow-gold hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-gold mb-2 text-sm uppercase tracking-wide">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg md:text-xl text-foreground font-semibold mt-10">
          Cada paquete contiene scripts <span className="text-gold">LISTOS PARA COPIAR Y USAR</span>
        </p>
      </section>
      {/* SECCIÓN 5 — PRUEBA SOCIAL */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <SectionTitle className="text-center mb-12">
          Hombres Como Tú Ya Lograron Resultados
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { name: "GUSTAVO", time: "3 semanas", quote: "Revirtió de 'amigo' a 'cita programada'" },
            { name: "MIGUEL", time: "20 días", quote: "Recuperó respeto y admiración de su ex" },
          ].map((t) => (
            <div key={t.name} className="bg-card border-2 border-success/40 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-6 h-6 text-success" />
                <span className="font-bold text-foreground">{t.name}</span>
                <span className="text-sm text-muted-foreground">· {t.time}</span>
              </div>
              <p className="text-lg text-muted-foreground italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
        <div className="text-center bg-card border border-gold/30 rounded-2xl p-8">
          <div className="font-display text-6xl md:text-7xl font-black text-gradient-gold mb-2">85%+</div>
          <p className="text-xl text-foreground font-semibold">Tasa de respuesta y engagement en conversaciones</p>
          <p className="text-muted-foreground mt-2">+1.500 hombres usando nuestros scripts</p>
        </div>
      </section>
      {/* SECCIÓN 6 — OFERTA + PRECIO */}
      <section id="oferta" className="px-4 py-16 max-w-4xl mx-auto">
        <SectionTitle className="text-center mb-10">
          Tu Inversión Hoy: Solo $ 27
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="bg-secondary/50 border border-muted rounded-2xl p-6 text-center opacity-60">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Valor normal</p>
            <p className="text-4xl font-bold text-muted-foreground line-through">$ 97</p>
            <p className="text-xs text-muted-foreground mt-2">Hora de especialista en psicología conductual</p>
          </div>
          <div className="relative gradient-gold rounded-2xl p-8 text-center shadow-glow scale-105">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warning text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Exclusivo
            </span>
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-2">Precio exclusivo</p>
            <p className="text-6xl font-black text-primary-foreground">$ 27</p>
            <p className="text-xs text-primary-foreground/80 mt-2">Solo para quien adquirió el método principal</p>
          </div>
        </div>
        <p className="text-center text-xl md:text-2xl font-bold text-foreground mt-10">
          Esta oferta exclusiva es válida por <span className="text-warning">10 MINUTOS</span>
        </p>
        <p className="text-center text-warning mt-2">Después de ese período, el precio vuelve a $ 97</p>
        <p className="text-center text-foreground mt-4 text-lg">
          Tú eliges: ¿Invertir <span className="text-gold font-bold">$ 27 ahora</span> o <span className="text-warning font-bold">$ 97 después</span>?
        </p>
        {/* ✅ BOTÃO DE COMPRA — SUBSTITUI O SNIPPET DA HOTMART */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <a
            href="https://go.centerpag.com/PPU38CQA482?upsell=true"
            className="block w-full gradient-gold text-primary-foreground font-black text-lg md:text-2xl px-8 py-6 rounded-2xl shadow-gold hover:scale-[1.02] transition-transform bounce-cta text-center"
          >
            ¡SÍ! QUIERO EL PROTOCOLO POR SOLO $ 27
          </a>
          <div className="mt-4">
            <a
              href="/downsell"
              className="text-muted-foreground text-sm underline hover:text-warning transition-colors"
            >
              No, gracias. Prefiero seguir intentándolo solo y perder esta oportunidad.
            </a>
          </div>
        </div>
      </section>
      {/* SECCIÓN 7 — BONOS */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <SectionTitle className="text-center mb-3">
          Además, 3 Bonos Exclusivos GRATIS
        </SectionTitle>
        <p className="text-center text-lg text-foreground mb-12">
          Valor total de estos bonos: <span className="text-gold font-bold">+$ 300</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: FileText, title: 'Guía "Qué NUNCA Decir"', desc: "Frases y actitudes que destruyen la reconquista" },
            { icon: Search, title: "Análisis de Perfil de Mensajes", desc: "Identifica su estilo de comunicación y adapta tus scripts" },
            { icon: Users, title: "Acceso Grupo VIP de Soporte", desc: "Intercambia experiencias con +1.500 hombres" },
          ].map((b, i) => (
            <div key={b.title} className="bg-card border-2 border-success/40 rounded-2xl p-6 hover:border-success transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="text-success text-xs font-bold uppercase tracking-wider">Bono #{i + 1}</span>
              </div>
              <b.icon className="w-8 h-8 text-gold mb-3" />
              <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg text-foreground mt-10">
          Todos los bonos son tuyos <span className="text-success font-bold">GRATIS</span> al adquirir hoy
        </p>
      </section>
      {/* SECCIÓN 8 — COMPARACIÓN */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <SectionTitle className="text-center mb-10">
          Sin el Protocolo vs Con el Protocolo
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-8 border-2 border-danger/40" style={{ background: "rgba(239, 68, 68, 0.08)" }}>
            <h3 className="font-bold text-danger text-2xl mb-6 text-center">SIN el Protocolo</h3>
            <ul className="space-y-3">
              {["Emocionalmente exhausto", "Caminas sobre huevos", "Mensajes que la alejan", "Confusión y miedo", "Probabilidad de éxito: 54%"].map((i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-8 border-2 border-success/50" style={{ background: "rgba(74, 222, 128, 0.08)" }}>
            <h3 className="font-bold text-success text-2xl mb-6 text-center">CON el Protocolo</h3>
            <ul className="space-y-3">
              {["Tienes claridad", "Confianza total", "Palabras exactas", "Al control", "Probabilidad de éxito: 89%"].map((i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* SECCIÓN 9 — FAQ */}
      <section className="px-4 py-16 max-w-3xl mx-auto">
        <SectionTitle className="text-center mb-10">Preguntas Frecuentes</SectionTitle>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Mi caso es diferente, ¿funcionarán estos scripts?", a: "Sí. Los scripts están basados en psicología conductual y se adaptan a la mayoría de situaciones. Tendrás variaciones para cada escenario y aprenderás a personalizar el tono según el contexto." },
            { q: "Ya intenté de todo, ¿por qué esto sería diferente?", a: "Porque tendrás un protocolo, un mapa claro, no solo intentos aislados. La diferencia entre éxito y fracaso suele ser tener una estrategia probada en lugar de improvisar." },
            { q: "No quiero parecer manipulador.", a: "El objetivo no es manipular, sino comunicar tu valor de forma estratégica y auténtica. Los scripts te ayudan a expresar lo que ya sientes — pero de la manera correcta." },
            { q: "¿Es muy caro solo por mensajes?", a: "Por $ 27, estás invirtiendo en claridad que puede costar tu reconquista si fallas. Una sola conversación bien conducida vale infinitamente más que el precio." },
            { q: "No tengo tiempo para aprender todo esto.", a: "Los scripts están listos para usar. Solo cópialos, personalízalos en segundos y envíalos. No requiere estudios largos." },
          ].map((item, i) => (
            <AccordionItem key={i} value={`q${i}`} className="bg-card border border-gold/30 rounded-xl px-5">
              <AccordionTrigger className="text-left text-foreground font-semibold hover:text-gold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      {/* SECCIÓN 10 — GARANTÍA */}
      <section className="px-4 py-16 max-w-3xl mx-auto">
        <SectionTitle className="text-center mb-10">
          30 Días de Garantía 100% Libre de Riesgos
        </SectionTitle>
        <div className="bg-card border-2 border-success/50 rounded-2xl p-8 md:p-10 text-center">
          <div className="text-6xl mb-4">🛡️</div>
          <p className="text-foreground text-lg leading-relaxed mb-5">
            Prueba el Protocolo de Mensajes Inteligentes por <span className="text-success font-bold">30 días completos</span>.
            <br />Usa los scripts, aplica las estrategias.
          </p>
          <p className="text-muted-foreground mb-2">Si no sientes que te dio claridad para reconquistarla:</p>
          <ul className="text-foreground space-y-2 mb-6 inline-block text-left">
            <li>📧 Solo envía un email</li>
            <li>💰 Tu reembolso se procesa en 48 horas</li>
            <li>🎁 Los bonos son tuyos para siempre</li>
          </ul>
          <p className="text-gold text-xl font-bold">Sin preguntas, sin burocracia</p>
        </div>
      </section>
      {/* SECCIÓN 11 — URGENCIA FINAL */}
      <section className="px-4 py-16 max-w-3xl mx-auto text-center">
        <Clock className="w-12 h-12 text-warning mx-auto mb-4 animate-pulse" />
        <h2 className="font-display text-3xl md:text-5xl font-black text-warning leading-tight mb-4">
          Solo 10 Minutos para Asegurar Tu Acceso
        </h2>
        <p className="text-foreground text-lg md:text-xl mb-8">
          Después de ese período, el precio vuelve a <span className="text-warning font-bold">$ 97</span>
        </p>
        <div className="mb-3">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Vacantes disponibles</span>
            <span className="text-warning font-bold">{vagas} de 50</span>
          </div>
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div className="h-full gradient-gold" style={{ width: `${(vagas / 50) * 100}%` }} />
          </div>
        </div>
        <p className="text-muted-foreground mt-8 text-base md:text-lg">
          Tu decisión es clara: invierte <span className="text-gold font-bold">$ 27 ahora</span> o arrepiéntete después
        </p>
        <div className="mt-8">
          <CountdownTimer />
        </div>
      </section>
      {/* SECCIÓN 12 — CTA FINAL */}
      <section className="px-4 py-16 max-w-3xl mx-auto text-center">
        <a
          href="https://go.centerpag.com/PPU38CQA482?upsell=true"
          className="block w-full gradient-gold text-primary-foreground font-black text-lg md:text-2xl px-8 py-6 rounded-2xl shadow-gold hover:scale-[1.02] transition-transform bounce-cta"
        >
          ¡SÍ! QUIERO EL PROTOCOLO POR SOLO $ 27
        </a>
        <p className="text-muted-foreground text-sm mt-4">
          Compra 100% segura · Acceso inmediato · 30 días de garantía
        </p>
        <div className="mt-8">
          <a
            href="https://go.centerpag.com/PPU38CQA482?upsell=true"
            className="text-gold border-2 border-gold rounded-xl px-8 py-3 font-semibold hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            Sí, asegurar mi acceso ahora
          </a>
        </div>
        <div className="mt-6">
          <a
            href="/downsell"
            className="text-muted-foreground text-sm underline hover:text-warning transition-colors"
          >
            No, gracias. Prefiero seguir intentándolo solo y perder esta oportunidad.
          </a>
        </div>
        <p className="text-muted-foreground text-xs mt-12">
          © Protocolo de Mensajes Inteligentes · Todos los derechos reservados
        </p>
      </section>
    </div>
  );
};

export default Index;

