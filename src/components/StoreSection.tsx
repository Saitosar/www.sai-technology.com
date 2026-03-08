"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { store } from "@/content/aurosy";
import { useAnalytics } from "@/hooks/useAnalytics";
import { springTransition, staggerContainer, fadeUp } from "@/lib/motion";
import { useSectionInView } from "@/hooks/useActiveSectionOnScroll";

function buildOrderUrl(modelName: string): string {
  const text = `${store.orderMessageTemplate} ${modelName}`;
  return `${store.telegramSalesUrl}?text=${encodeURIComponent(text)}`;
}

type Product = (typeof store.products)[number];

function ProductCard({
  product,
  onOrderClick,
}: {
  product: Product;
  onOrderClick: (name: string) => void;
}) {
  const hasImage = "image" in product && product.image;
  const hasCapabilities = "capabilities" in product && product.capabilities;
  const overview = "overview" in product ? product.overview : "";

  return (
    <motion.div
      variants={fadeUp}
      transition={springTransition}
      className="glass rounded-xl border border-electric-blue/20 flex flex-col overflow-hidden"
    >
      {hasImage && (
        <div className="relative w-full aspect-[4/3] bg-black/40">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
        <p className="text-sm text-gray-400 mb-4 flex-1">{overview}</p>
        {hasCapabilities && (
          <ul className="space-y-2 mb-6">
            {product.capabilities.map((cap) => (
              <li key={cap.title} className="text-sm">
                <span className="text-electric-blue font-medium">
                  {cap.title}
                </span>
                <span className="text-gray-400"> — {cap.description}</span>
              </li>
            ))}
          </ul>
        )}
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={() => onOrderClick(product.name)}
          className="cursor-pointer w-full px-4 py-3 rounded-lg font-medium border border-cyber-lime text-cyber-lime bg-cyber-lime/5 hover:bg-cyber-lime/10 btn-neon-lime focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 text-center"
        >
          Order
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function StoreSection() {
  const sectionRef = useSectionInView("store");
  const { track } = useAnalytics();

  const handleOrderClick = (productName: string) => {
    track("cta_agibot_order_click");
    window.open(buildOrderUrl(productName), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      id="store"
      className="relative py-20 md:py-24 overflow-hidden border-t border-white/5"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            <span className="text-cyber-lime text-glow-lime">{store.title}</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            {store.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {store.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrderClick={handleOrderClick}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
