import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import OrderModal from "@/components/ui/OrderModal";
import { PRODUCTS } from "@/data/products";
import {
  Leaf,
  Sparkles,
  Hand,
  Clock,
  Award,
  Citrus,
  Wine,
  MessageCircle,
  Instagram,
  ChevronRight,
  ChevronDown,
  Quote,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Frutas Desidratadas Premium — Drinks, Snacks e Gastronomia" },
      {
        name: "description",
        content:
          "Frutas desidratadas artesanais para drinks, snacks fitness e gastronomia gourmet. Produção em pequenos lotes, sem conservantes, qualidade premium.",
      },
      { property: "og:title", content: "Frutas Desidratadas Premium" },
      {
        property: "og:description",
        content:
          "Sabor, sofisticação e energia natural. Frutas desidratadas artesanais para drinks, snacks e gastronomia.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP_URL =
  "https://wa.me/5567999224158?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20de%20frutas%20desidratadas.";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  dark = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${dark ? "bg-[oklch(0.16_0.018_150)] text-[oklch(0.95_0.012_80)]" : ""}`}
    >
      <div className="container mx-auto max-w-7xl px-6">
        {(eyebrow || title || intro) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            {eyebrow && (
              <motion.p
                variants={fadeUp}
                className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-secondary"
              >
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl font-medium leading-[1.1] md:text-5xl lg:text-6xl"
              >
                {title}
              </motion.h2>
            )}
            {intro && (
              <motion.p
                variants={fadeUp}
                className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${dark ? "text-[oklch(0.78_0.015_80)]" : "text-muted-foreground"}`}
              >
                {intro}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="container mx-auto max-w-7xl px-6 py-5">
        <div className="glass-dark flex items-center justify-between rounded-full px-6 py-3">
          <a href="#top" className="flex items-center gap-2 text-[oklch(0.97_0.01_80)]">
            <Citrus className="h-5 w-5 text-gold" strokeWidth={1.5} />
            <span className="font-display text-lg tracking-wide">Nutridry</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[oklch(0.85_0.012_80)] md:flex">
            <a href="#produtos" className="transition hover:text-gold">Produtos</a>
            <a href="#kits" className="transition hover:text-gold">Kits</a>
            <a href="#processo" className="transition hover:text-gold">Processo</a>
            <a href="#contato" className="transition hover:text-gold">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[oklch(0.16_0.02_150)] shadow-soft transition hover:scale-[1.03]"
          >
            Pedir agora
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div id="top" ref={ref} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Drinks premium com frutas desidratadas em mesa rústica iluminada"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl text-[oklch(0.97_0.01_80)]"
          >
            <motion.div variants={fadeUp} className="mt-6 mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-[oklch(0.9_0.012_80)]">
                Artesanal · 100% Natural
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl font-medium leading-[1.05] md:text-7xl lg:text-[5.5rem]"
            >
              Frutas desidratadas para{" "}
              <span className="italic text-gradient-gold">drinks</span>, snacks e
              experiências únicas.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg leading-relaxed text-[oklch(0.88_0.012_80)] md:text-xl"
            >
              Produção artesanal que preserva o melhor da fruta: sabor, aroma e autenticidade.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#produtos"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[oklch(0.16_0.02_150)] shadow-premium transition hover:scale-[1.03]"
              >
                Conhecer Produtos
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" />
                Pedir no WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[oklch(0.85_0.012_80)]"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Descubra nossa coleção</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-8 w-px bg-gold/60"
          />
        </div>
      </motion.div>
    </div>
  );
}

function Uses() {
  return (
    <Section
      id="usos"
      title="Muito além de um ingrediente."
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Texto */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xl leading-9 font-light text-muted-foreground lg:text-[1.6rem]"
          >
            Selecionamos frutas de alta qualidade e aplicamos um processo artesanal de desidratação que preserva sabor, aroma e beleza natural. Um produto pensado para quem valoriza experiências autênticas, seja em drinks, gastronomia ou como snack saudável.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 space-y-5"
          >
            {[
              "Produção artesanal",
              "Frutas cuidadosamente selecionadas",
              "Sem conservantes artificiais",
              "Perfeitas para drinks, receitas e snacks",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                <span className="text-lg font-medium text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-sm mx-auto lg:max-w-md"
        >
          <div className="overflow-hidden rounded-3xl shadow-premium">
            <img
              src={gallery6}
              alt="Frutas desidratadas artesanais"
              className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl shadow-premium">
            <img
              src={gallery1}
              alt="Fatias de laranja desidratada artesanal"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden h-40 w-40 items-center justify-center rounded-full bg-gradient-gold text-center text-[oklch(0.16_0.02_150)] shadow-premium md:flex">
            <div>
              <div className="font-display text-3xl">100%</div>
              <div className="text-[10px] uppercase tracking-[0.2em]">Natural</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-secondary">
            Sobre a Marca
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-4xl font-medium leading-[1.1] md:text-5xl">
            Paixão por transformar frutas em <em className="text-gradient-gold not-italic">experiências</em>.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Produção artesanal com frutas selecionadas, sem conservantes e com foco em
            qualidade premium. Cada lote é cortado, desidratado e embalado à mão —
            preservando aroma, cor e a alma da fruta in natura.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { v: "07", l: "Frutas no portfólio" },
              { v: "100%", l: "Sem conservantes" },
              { v: "48h", l: "Desidratação suave" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-primary">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

const DIFFERENTIALS = [
  { icon: Leaf, label: "100% naturais" },
  { icon: Sparkles, label: "Sem conservantes" },
  { icon: Hand, label: "Produção artesanal" },
  { icon: Clock, label: "Alta durabilidade" },
  { icon: Award, label: "Seleção premium" },
  { icon: Citrus, label: "Muito sabor" },
  { icon: Wine, label: "Ideal para drinks" },
];

function Differentials() {
  return (
    <Section dark eyebrow="Diferenciais" title="Cada detalhe importa.">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-7"
      >
        {DIFFERENTIALS.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-4 bg-[oklch(0.16_0.018_150)] p-8 text-center transition hover:bg-[oklch(0.2_0.022_150)]"
          >
            <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-wider text-[oklch(0.88_0.012_80)]">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

const GALLERY = [
  { src: gallery2, alt: "Drink autoral com fruta desidratada", span: "md:col-span-2 md:row-span-2" },
  { src: gallery3, alt: "Tábua gourmet com frutas desidratadas", span: "" },
  { src: gallery4, alt: "Pessoa fitness consumindo snack natural", span: "" },
  { src: gallery5, alt: "Embalagem premium kraft com frutas desidratadas", span: "md:col-span-2" },
];

function Gallery() {
  return (
    <Section id="galeria" eyebrow="Galeria Lifestyle" title="O detalhe que transforma cada experiência">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]"
      >
        {GALLERY.map((g, i) => (
          <motion.figure
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className={`group relative overflow-hidden rounded-2xl shadow-soft ${g.span}`}
          >
            <img
              src={g.src}
              alt={g.alt}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </motion.figure>
        ))}
      </motion.div>
    </Section>
  );
}



function Products() {
  const [showPrices, setShowPrices] = useState(false);
  const [showTraditional, setShowTraditional] = useState(true);
  const [showCitrics, setShowCitrics] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  function toggleProduct(id: string) {
  setSelectedProducts((current) =>
    current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]
  );
}

  console.log("PRODUCTS:", PRODUCTS);

  return (
    <Section
      id="produtos"
      dark
      title="Frutas para qualquer ocasião."
      intro="Uma seleção de frutas desidratadas para drinks, gastronomia, cafeterias e snacks naturais. E, se você procura algo especial, produzimos sob encomenda."
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="mx-auto max-w-4xl"
      >
        {/* Lista de frutas */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
      
          {PRODUCTS.map((product) => (
  <button
  key={product.id}
  onClick={() => toggleProduct(product.id)}
  className={`
    rounded-full
    border
    px-6
    py-3
    font-medium
    backdrop-blur-sm
    transition-all
    duration-300
    hover:-translate-y-1

    ${
      selectedProducts.includes(product.id)
        ? "border-gold bg-gradient-gold text-[oklch(0.16_0.02_150)] shadow-lg scale-105"
        : "border-gold/20 bg-white/10 text-[oklch(0.95_0.012_80)] hover:border-gold hover:bg-gold/10 hover:text-gold"
    }
  `}
>
    <span className="mr-2">
      {product.emoji}
    </span>

    {product.name}
  </button>
))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <button
  onClick={() => setShowOrderModal(true)}
  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[oklch(0.16_0.02_150)] shadow-premium transition hover:scale-[1.03]"
>
  Fazer pedido
  <ChevronRight className="h-4 w-4" />
</button>

          <p className="mt-6 text-sm text-[oklch(0.78_0.015_80)]">
            Não encontrou a fruta que procura? Produzimos também sob encomenda.
          </p>

          <button
            onClick={() => setShowPrices(!showPrices)}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold transition hover:text-white"
          >
            {showPrices ? "Ocultar preços" : "Consultar preços"}

            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                showPrices ? "rotate-180" : ""
              }`}
            />
          </button>
        </motion.div>

        {/* TABELA DE PREÇOS */}
        {showPrices && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            {/* Frutas Tradicionais */}
            <button
              onClick={() => setShowTraditional(!showTraditional)}
              className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left"
            >
              <span className="font-display text-2xl text-white">
                Frutas Tradicionais
              </span>

              <ChevronDown
                className={`transition-transform ${
                  showTraditional ? "rotate-180" : ""
                }`}
              />
            </button>

            {showTraditional && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gold">
                      <th className="py-3 text-left">Fruta</th>
                      <th>50g</th>
                      <th>500g</th>
                      <th>1kg</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-4">Banana</td>
                      <td>R$15</td>
                      <td>R$150</td>
                      <td>R$270</td>
                    </tr>

                    <tr className="border-b border-white/5">
                      <td className="py-4">Maçã</td>
                      <td>R$15</td>
                      <td>R$150</td>
                      <td>R$270</td>
                    </tr>

                    <tr className="border-b border-white/5">
                      <td className="py-4">Mamão</td>
                      <td>R$15</td>
                      <td>R$150</td>
                      <td>R$270</td>
                    </tr>

                    <tr className="border-b border-white/5">
                      <td className="py-4">Manga</td>
                      <td>R$15</td>
                      <td>R$150</td>
                      <td>R$270</td>
                    </tr>

                    <tr className="border-b border-white/5">
                      <td className="py-4">Abacaxi</td>
                      <td>R$15</td>
                      <td>R$150</td>
                      <td>R$299</td>
                    </tr>

                    <tr className="border-b border-white/5">
                      <td className="py-4">Morango</td>
                      <td>R$30</td>
                      <td>R$285</td>
                      <td>R$540</td>
                    </tr>

                    <tr className="border-b border-white/5">
                      <td className="py-4">Pitaya</td>
                      <td>R$30</td>
                      <td>R$285</td>
                      <td>R$540</td>
                    </tr>

                    <tr>
                      <td className="py-4">Maçã Verde</td>
                      <td>R$30</td>
                      <td>R$285</td>
                      <td>R$540</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Linha Cítrica */}
            <button
              onClick={() => setShowCitrics(!showCitrics)}
              className="mt-8 flex w-full items-center justify-between border-b border-white/10 py-4 text-left"
            >
              <span className="font-display text-2xl text-white">
                Linha Cítrica
              </span>

              <ChevronDown
                className={`transition-transform ${
                  showCitrics ? "rotate-180" : ""
                }`}
              />
            </button>

            {showCitrics && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gold">
                      <th className="py-3 text-left">Fruta</th>
                      <th>500g</th>
                      <th>1kg</th>
                      <th>3kg</th>
                      <th>5kg</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-4">Laranja Bahia</td>
                      <td>R$109</td>
                      <td>R$199</td>
                      <td>R$567</td>
                      <td>R$925</td>
                    </tr>

                    <tr className="border-b border-white/5">
                      <td className="py-4">Laranja Pera</td>
                      <td>R$89</td>
                      <td>R$159</td>
                      <td>R$447</td>
                      <td>R$725</td>
                    </tr>

                    <tr className="border-b border-white/5">
                      <td className="py-4">Limão Siciliano</td>
                      <td>R$109</td>
                      <td>R$199</td>
                      <td>R$567</td>
                      <td>R$925</td>
                    </tr>

                    <tr>
                      <td className="py-4">Limão Tahiti</td>
                      <td>R$89</td>
                      <td>R$159</td>
                      <td>R$447</td>
                      <td>R$725</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
      <OrderModal
  open={showOrderModal}
  onClose={() => setShowOrderModal(false)}
  selectedProducts={selectedProducts}
/>
    </Section>
  );
}

const KITS = [
  {
    title: "Kit Drinks",
    description: "Laranja, limão, hibisco e especiarias selecionadas.",
    accent: "from-[oklch(0.66_0.155_50)] to-[oklch(0.74_0.135_85)]",
  },
  {
    title: "Kit Fitness",
    description: "Banana, maçã e frutas energéticas para o seu treino.",
    accent: "from-[oklch(0.34_0.055_150)] to-[oklch(0.5_0.08_150)]",
  },
  {
    title: "Kit Gourmet",
    description: "Seleção premium para experiências sofisticadas.",
    accent: "from-[oklch(0.22_0.025_150)] to-[oklch(0.4_0.04_150)]",
  },
];

function Kits() {
  return (
    <Section id="kits" eyebrow="Kits Curados" title="Coleções para cada ocasião.">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="grid gap-6 md:grid-cols-3"
      >
        {KITS.map((k) => (
          <motion.div
            key={k.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${k.accent} p-10 text-[oklch(0.97_0.01_80)] shadow-premium`}
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <Sparkles className="h-7 w-7 text-gold" strokeWidth={1.5} />
            <h3 className="mt-8 font-display text-3xl">{k.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">{k.description}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider backdrop-blur transition hover:bg-white/25"
            >
              Solicitar kit <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

const HOW = [
  "No café da manhã",
  "Como snack saudável",
  "Pré treino",
  "Pós treino",
  "Em drinks",
  "Em sobremesas",
  "Em kits presenteáveis",
];

function HowToConsume() {
  return (
    <Section eyebrow="Como Consumir" title="Sete formas de se apaixonar.">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7"
      >
        {HOW.map((h, i) => (
          <motion.div
            key={h}
            variants={fadeUp}
            className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-4 text-center shadow-soft transition hover:border-gold/40 hover:bg-gradient-warm hover:text-[oklch(0.97_0.01_80)]"
          >
            <span className="font-display text-3xl text-gold transition group-hover:text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider">{h}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

const STEPS = [
  { n: "01", t: "Seleção das frutas", d: "Escolhemos frutas no ponto exato de maturação, de fornecedores parceiros." },
  { n: "02", t: "Corte artesanal", d: "Fatias finas e uniformes cortadas à mão para preservar a estética." },
  { n: "03", t: "Desidratação", d: "Processo lento em baixa temperatura, mantendo cor, aroma e nutrientes." },
  { n: "04", t: "Controle de qualidade", d: "Cada lote é inspecionado peça por peça antes de seguir adiante." },
  { n: "05", t: "Embalagem premium", d: "Kraft com janela e selo fresco, prontas para presentear ou estocar." },
];

function Process() {
  return (
    <Section id="processo" dark eyebrow="Processo Artesanal" title="Do campo ao produto final.">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 md:block" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="space-y-12"
        >
          {STEPS.map((s) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="grid items-start gap-6 md:grid-cols-[120px_1fr] md:gap-12"
            >
              <div className="relative flex items-center gap-4">
                <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-xs font-bold text-[oklch(0.16_0.02_150)]">
                  {s.n}
                </span>
                <div className="h-px flex-1 bg-white/20 md:hidden" />
              </div>
              <div className="border-l border-white/10 pl-6 md:border-l-0 md:pl-0">
                <h3 className="font-display text-2xl text-[oklch(0.97_0.01_80)] md:text-3xl">{s.t}</h3>
                <p className="mt-3 max-w-2xl text-[oklch(0.78_0.015_80)]">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "As laranjas desidratadas levantaram o nível dos nossos drinks autorais. Visual impecável e aroma fresco.",
    author: "Rafael Monteiro",
    role: "Head Bartender · Bar Atlântico",
  },
  {
    quote:
      "Virou snack oficial dos nossos alunos. Energia limpa, sabor de verdade — nada de fórmulas químicas.",
    author: "Clarice Andrade",
    role: "CrossFit Pinheiros",
  },
  {
    quote:
      "Uso nas sobremesas e nas tábuas. A presença visual e o frescor fazem total diferença na experiência.",
    author: "Chef Júlia Bertoni",
    role: "Restaurante Maré",
  },
];

function Social() {
  return (
    <Section eyebrow="Prova Social" title="Quem prova, indica.">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="grid gap-6 md:grid-cols-3"
      >
        {TESTIMONIALS.map((t) => (
          <motion.figure
            key={t.author}
            variants={fadeUp}
            className="relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft"
          >
            <Quote className="h-7 w-7 text-gold" strokeWidth={1.5} />
            <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">
              “{t.quote}”
            </blockquote>
            <div className="mt-8 flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
              ))}
            </div>
            <figcaption className="mt-4 border-t border-border pt-4">
              <div className="font-display text-lg">{t.author}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </Section>
  );
}

function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[oklch(0.12_0.02_150)]/85" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="container relative z-10 mx-auto max-w-4xl px-6 text-center text-[oklch(0.97_0.01_80)]"
      >
        <motion.p variants={fadeUp} className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          Faça seu pedido agora
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-display text-5xl font-medium leading-[1.05] md:text-7xl">
          Pequenos lotes,<br />
          <span className="italic text-gradient-gold">grandes momentos.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg text-[oklch(0.88_0.012_80)]">
          Produção artesanal · Pequenos lotes · Qualidade premium
        </motion.p>
        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-9 py-5 text-sm font-semibold uppercase tracking-wider text-[oklch(0.16_0.02_150)] shadow-premium transition hover:scale-[1.03]"
          >
            <MessageCircle className="h-5 w-5" />
            Pedir pelo WhatsApp
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-9 py-5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15"
          >
            <Instagram className="h-5 w-5" />
            Instagram
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.018_150)] py-16 text-[oklch(0.78_0.015_80)]">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-[oklch(0.97_0.01_80)]">
              <Citrus className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <span className="font-display text-xl"> Nutridry</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Frutas desidratadas artesanais. Pequenos lotes, sabor real, sofisticação natural.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Navegação</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#produtos" className="hover:text-gold">Produtos</a></li>
              <li><a href="#kits" className="hover:text-gold">Kits</a></li>
              <li><a href="#processo" className="hover:text-gold">Processo</a></li>
              <li><a href="#galeria" className="hover:text-gold">Galeria</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contato</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  @Nutridry
                </a>
              </li>
              <li>contato@nutridry.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-[oklch(0.6_0.012_80)]">
          © {new Date().getFullYear()} Nutridry. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.62_0.18_150)] text-white shadow-premium"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[oklch(0.62_0.18_150)] opacity-30" />
    </motion.a>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Products />
      <Uses />
      <About />
      {/*<Differentials />*/}
      <Gallery />
      
      {/*<Kits />*/}
      {/*<HowToConsume />*/}
      <Process />
      <Social />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
