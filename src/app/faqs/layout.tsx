import React from "react";

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="faq-wrapper">
      {/* You can add a shared FAQ header here if you want */}
      {children}
    </div>
  );
}