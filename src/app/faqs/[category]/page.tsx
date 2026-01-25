import { faqData } from "@/data/faqs";
import { notFound } from "next/navigation";
import AccordionItem from "@/components/faqs/AccordionItem";
import Script from "next/script";
import { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = faqData.find((c) => c.slug === categorySlug);
  
  if (!category) return { title: "Category Not Found | LapX Indore" };

  return {
    title: `${category.title} FAQ | Laptop Repair in Vijay Nagar Indore`,
    description: `Expert ${category.title} support. ${category.description} Visit LapX, the best laptop repair shop near Orbit Mall, Vijay Nagar.`,
    alternates: { canonical: `/faqs/${categorySlug}` },
  };
}

export async function generateStaticParams() {
  return faqData.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryFAQPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = faqData.find((c) => c.slug === categorySlug);

  if (!category) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": category.questions.map((q) => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-20 bg-linear-to-b from-white to-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight">
              {category.title} <span className="text-sky-500 font-black">FAQs</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg border-l-4 border-sky-500 pl-4 leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* FAQ Accordion List - UPDATED MAPPING */}
          <div className="space-y-4">
            {category.questions.map((item, index) => (
              <AccordionItem 
                key={index} 
                item={{
                  ...item,
                  categoryName: category.title // This makes the "LapX Certified" footer work!
                }} 
              />
            ))}
          </div>
          
          {/* Bottom SEO Section - SIMPLIFIED & STRONGER */}
          <div className="mt-16 p-8 bg-white border border-gray-100 rounded-3xl text-center shadow-lg shadow-sky-500/5">
            <h4 className="font-black text-gray-900 mb-2 text-xl md:text-2xl uppercase tracking-tighter">
              Trusted {category.title} Solutions
            </h4>
            <p className="text-sm text-gray-500 mb-6 max-w-2xl mx-auto">
              Looking for <b>{category.title}</b>? Visit <b>LapX</b> at LG-31, Orbit Mall. 
              We provide <b>same-day repair</b> with <b>genuine parts</b> and <b>expert technicians</b> specialized in <b>chip-level repairing</b>.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="tel:09111000757" className="px-10 py-4 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all hover:scale-105 shadow-xl shadow-sky-500/20">
                Call Expert: 91110 00757
              </a>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Visit Location</p>
                <p className="text-sm font-bold text-gray-700">LG-31, Orbit Mall, Vijay Nagar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}