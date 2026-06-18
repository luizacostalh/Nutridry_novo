import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { PRODUCTS } from "../../data/products";

type OrderModalProps = {
  open: boolean;
  onClose: () => void;
  selectedProducts: string[];
};

type SelectedItem = {
  id: string;
  name: string;
  emoji: string;
  weight: string;
};

export default function OrderModal({
  open,
  onClose,
  selectedProducts,
}: OrderModalProps) {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [customFruit, setCustomFruit] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
  const initialItems = selectedProducts
    .map((id) => {
      const product = PRODUCTS.find((p) => p.id === id);

      if (!product) return null;

      return {
  id: product.id,
  name: product.name,
  emoji: product.emoji,
  weight:
    product.options.length > 0
      ? product.options[0].weight
      : "",
};
    })
    .filter(Boolean) as SelectedItem[];

  setSelectedItems(initialItems);
}, [selectedProducts, open]);

  function toggleFruit(product: (typeof PRODUCTS)[number]) {
    const exists = selectedItems.find((item) => item.id === product.id);

    if (exists) {
      setSelectedItems((old) =>
        old.filter((item) => item.id !== product.id)
      );
      return;
    }

    setSelectedItems((old) => [
      ...old,
      {
        id: product.id,
        name: product.name,
        emoji: product.emoji,
        weight:
          product.options.length > 0
            ? product.options[0].weight
            : "",
      },
    ]);
  }

  function changeWeight(id: string, weight: string) {
    setSelectedItems((old) =>
      old.map((item) =>
        item.id === id
          ? {
              ...item,
              weight,
            }
          : item
      )
    );
  }

  function resetForm() {
    setSelectedItems([]);
    setCustomFruit("");
    setNotes("");
  }

  function handleWhatsApp() {
  if (selectedItems.length === 0) {
    alert("Escolha pelo menos uma fruta.");
    return;
  }

  let message = `Olá!

Gostaria de fazer um pedido.

`;
console.log(selectedItems);

  selectedItems.forEach((item) => {
  console.log("ITEM:", item);

  const fruit =
    item.name === "Outra fruta"
      ? customFruit || "Outra fruta"
      : item.name;

  message += `${item.emoji} ${fruit}
Quantidade: ${item.weight}

`;
});

  if (notes.trim()) {
    message += `📝 Observações:

${notes}

`;
  }

  message += "Aguardo retorno. Obrigado!";

  window.open(
    `https://wa.me/5567999224158?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  resetForm();
  onClose();
}

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: .95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: .95, opacity: 0, y: 20 }}
            transition={{ duration: .25 }}
            onClick={(e) => e.stopPropagation()}
           className="w-full max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto rounded-[28px] md:rounded-[32px] border border-white/10 bg-[oklch(0.16_0.018_150)] p-5 md:p-8 shadow-2xl"
          >

            {/* Cabeçalho */}

            <div className="flex items-start justify-between">

              <div>

                <span className="text-xs uppercase tracking-[0.25em] text-gold">
                  Pedido
                </span>

                <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                  Monte seu pedido
                </h2>

                <p className="mt-3 text-sm leading-relaxed md:text-base text-[oklch(0.78_0.015_80)]">
                  Escolha a fruta, quantidade e envie pelo WhatsApp.
                </p>

              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-white/10 p-2 transition hover:bg-white/10"
              >
                <X className="h-5 w-5 text-white" />
              </button>

            </div>

            {/* FRUTAS */}

<div className="mt-10">

  <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-gold">
    Escolha uma ou mais frutas
  </h3>

  <div className="flex flex-wrap gap-3">

    {PRODUCTS.map((product) => {

      const selected = selectedItems.find(
        (item) => item.id === product.id
      );

      return (

        <button
          key={product.id}
          onClick={() => toggleFruit(product)}
          className={`rounded-full px-4 py-2.5 text-sm transition-all duration-300

          ${
            selected
              ? "bg-gradient-gold text-[oklch(0.16_0.02_150)] scale-105 shadow-lg"
              : "border border-white/10 bg-white/5 text-white hover:border-gold hover:bg-white/10"
          }`}
        >

          <span className="mr-2">
            {product.emoji}
          </span>

          {product.name}

        </button>

      );

    })}

  </div>

</div>





{/* FRUTAS ESCOLHIDAS */}

{selectedItems.length > 0 && (

<div className="mt-10 space-y-5">

  <h3 className="text-sm uppercase tracking-[0.2em] text-gold">

    Quantidade de cada fruta

  </h3>

  {selectedItems.map((item) => {

    const product = PRODUCTS.find(
      (p) => p.id === item.id
    );

    return (

      <div
        key={item.id}
        className="rounded-2xl border border-white/10 bg-white/5 p-5"
      >

        <div className="mb-4 flex items-center gap-2 text-white">

          <span className="text-xl">

            {item.emoji}

          </span>

          <span className="font-medium">

            {item.name}

          </span>

        </div>

        {item.name === "Outra fruta" ? (

          <input
            value={customFruit}
            onChange={(e) =>
              setCustomFruit(e.target.value)
            }
            placeholder="Digite a fruta..."
            className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold"
          />

        ) : null}

        <div className="flex flex-wrap gap-2">

          {product?.options.map((option) => (

            <button
              key={option.weight}
              onClick={() =>
                changeWeight(item.id, option.weight)
              }
              className={`rounded-full px-4 py-2 text-sm transition

              ${
                item.weight === option.weight
                  ? "bg-gradient-gold text-[oklch(0.16_0.02_150)]"
                  : "border border-white/10 bg-white/5 text-white hover:border-gold"
              }`}
            >

              {option.weight}

            </button>

          ))}

        </div>

      </div>

    );

  })}

</div>

)}
            {/* BOTÕES */}

            <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row">

              <button
                onClick={onClose}
                className="w-full sm:flex-1 rounded-full border border-white/10 py-4 text-white transition hover:bg-white/10"
              >
                Cancelar
              </button>

              <button
                onClick={handleWhatsApp}
                className="flex w-full sm:flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold py-4 font-semibold text-[oklch(0.16_0.02_150)] transition hover:scale-[1.02]"
              >
                Continuar
                <ChevronRight className="h-4 w-4" />
              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}