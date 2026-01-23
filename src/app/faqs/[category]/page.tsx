import { faqData } from "@/data/faqs";
import { notFound } from "next/navigation";
import AccordionItem from "@/components/faqs/AccordionItem";
import Script from "next/script";
import { Metadata } from "next";

// Define params as a Promise for Next.js 15+ compatibility
interface Props {
  params: Promise<{ category: string }>;
}

// 1. DYNAMIC METADATA FOR SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = faqData.find((c) => c.slug === categorySlug);
  
  if (!category) return { title: "Category Not Found | Lap-X Indore" };

  return {
    title: `${category.title} FAQ | Laptop Repair in Vijay Nagar Indore`,
    description: `Expert ${category.title} support. ${category.description} Visit Lap-X, the best laptop repair shop near Orbit Mall, Vijay Nagar.`,
    alternates: { canonical: `/faqs/${categorySlug}` },
  };
}

// 2. GENERATE STATIC PARAMS (Optional but recommended for performance)
export async function generateStaticParams() {
  return faqData.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryFAQPage({ params }: Props) {
  // Await params to prevent the "sourceMapURL could not be parsed" / runtime error
  const { category: categorySlug } = await params;
  const category = faqData.find((c) => c.slug === categorySlug);

  if (!category) notFound();

  // 3. FAQ SCHEMA (JSON-LD)
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
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-gray-900 uppercase">
              {category.title} <span className="text-sky-500">FAQs</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg border-l-4 border-sky-500 pl-4">
              {category.description}
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {category.questions.map((item, index) => (
              <AccordionItem key={index} item={item} />
            ))}
          </div>
          
          {/* Bottom SEO Section */}
          <div className="mt-16 p-8 bg-white border border-gray-100 rounded-3xl text-center shadow-sm">
            <h4 className="font-bold text-gray-900 mb-2">
              Looking for an {category.title === 'Asus' ? 'Asus Service Center in Indore Vijay Nagar' : 
                          category.title === 'MSI' ? 'MSI Service Center Indore' : 
                          `${category.title} Laptop Repair Indore`}?
            </h4>
            <p className="text-sm text-gray-500 mb-6">
              We provide <b>same-day repair</b> with <b>genuine parts</b> and <b>transparent pricing</b>. 
              Our expert technicians specialize in <b>chip-level repairing</b> near Orbit Mall.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="tel:09111000757" className="px-8 py-3 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all">
                Call Technician: 091110 00757
              </a>
              <p className="text-xs text-gray-400">Location: Near Orbit Mall, Vijay Nagar</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}