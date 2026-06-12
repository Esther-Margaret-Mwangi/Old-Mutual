import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Layout from "../components/Layout";
import faqItems from "../data/faqData";
import "../styles/Help.css";

export default function Help() {
  const [openId, setOpenId] = useState(null);

  return (
    <Layout pageTitle="FAQ" headerRight={<span aria-hidden="true" />}>
      <div className="faq-page">
        <section className="faq-help-card">
          <div className="faq-help-icon">
            <HelpCircle size={22} />
          </div>
          <div>
            <h2 className="faq-help-title">Need Help?</h2>
            <p className="faq-help-text">
              Find answers to common questions about this event. If you
              can&apos;t find what you&apos;re looking for, reach out to your
              event organisers.
            </p>
          </div>
        </section>

        <div className="faq-list">
          {faqItems.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-item-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </button>
                {isOpen && <p className="faq-item-answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
