export default function FAQLoading() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-pulse">
      <div className="h-12 w-64 bg-gray-200 rounded-lg mb-6"></div>
      <div className="h-6 w-full bg-gray-100 rounded-lg mb-12"></div>
      
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-20 w-full bg-gray-50 rounded-2xl mb-4"></div>
      ))}
    </div>
  );
}