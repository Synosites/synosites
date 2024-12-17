import { Code2Icon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-1 items-center gap-4 px-8 md:gap-2 md:px-0">
          <Code2Icon className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <Link href="/" className="font-medium underline underline-offset-4">
              Syno Sites
            </Link>
            . All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="text-sm font-medium underline underline-offset-4"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium underline underline-offset-4"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}