import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}