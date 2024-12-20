import { Button } from "@/components/ui/button";
import { ArrowRight, Code2Icon, MonitorIcon, ServerIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      Icon: MonitorIcon,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
    },
    {
      Icon: ServerIcon,
      title: "Backend Solutions",
      description:
        "Scalable and secure backend infrastructure for your applications.",
    },
    {
      Icon: Code2Icon,
      title: "Custom Solutions",
      description: "Tailored digital solutions to meet your specific needs.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-32 dark:bg-gray-900">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-500/10" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
            <Code2Icon className="mx-auto h-12 w-12 text-blue-500" />
            <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                Modern Web Solutions
              </span>
              <br />
              for Your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We create exceptional digital experiences through innovative web
              development and cutting-edge technology solutions.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Link href="/projects">
                <Button size="lg" className="gap-2">
                  View Our Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-100 to-white p-6 shadow-md transition-shadow hover:shadow-lg dark:from-gray-800 dark:to-gray-900"
            >
              <div className="relative z-10 space-y-4">
                <service.Icon className="h-10 w-10 text-blue-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
