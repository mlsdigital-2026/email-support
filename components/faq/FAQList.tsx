import FAQItem from "./FAQItem";
import { faqs } from "@/data/faqs";

export default function FAQList() {
  return (
    <div className="space-y-5">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}