import { Button } from "@/components/ui/button";
import { ArrowRight, Code2Icon, MonitorIcon, ServerIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-background py-20 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-500/10" />
        <div className="container relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
            <Code2Icon className="mx-auto h-12 w-12 text-blue-500" />
            <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="gradient-text">Modern Web Solutions</span>
              <br />
              for Your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We create exceptional digital experiences through innovative web development
              and cutting-edge technology solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
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

      <section className="container py-24">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50 to-white p-6 shadow-md transition-shadow hover:shadow-lg dark:from-blue-950/50 dark:to-background">
            <div className="relative z-10 space-y-4">
              <MonitorIcon className="h-10 w-10 text-blue-500" />
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-sm text-muted-foreground">
                Custom websites and web applications built with modern technologies.
              </p>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50 to-white p-6 shadow-md transition-shadow hover:shadow-lg dark:from-blue-950/50 dark:to-background">
            <div className="relative z-10 space-y-4">
              <ServerIcon className="h-10 w-10 text-blue-500" />
              <h3 className="text-xl font-bold">Backend Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Scalable and secure backend infrastructure for your applications.
              </p>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50 to-white p-6 shadow-md transition-shadow hover:shadow-lg dark:from-blue-950/50 dark:to-background">
            <div className="relative z-10 space-y-4">
              <Code2Icon className="h-10 w-10 text-blue-500" />
              <h3 className="text-xl font-bold">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Tailored digital solutions to meet your specific needs.
              </p>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>
      </section>
    </>
  );
}