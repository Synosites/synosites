import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@synosites.com",
    link: "mailto:contact@synosites.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Web Street, Digital City, 12345",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Badge>Contact Us</Badge>
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have a project in mind? We'd love to hear from you.
        </p>
      </div>
      <div className="grid gap-4">
        {contactDetails.map((detail) => {
          const Icon = detail.icon;
          return (
            <Card key={detail.title} className="p-4">
              <div className="flex items-center gap-4">
                <Icon className="h-5 w-5" />
                <div>
                  <div className="font-medium">{detail.title}</div>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      {detail.value}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
