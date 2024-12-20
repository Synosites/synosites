import { Code2Icon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-blue/80">
      <div className="container mx-auto flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between md:py-4">
        {/* Left Section */}
        <div className="flex flex-1 items-center gap-3 px-4 md:px-0">
          <Code2Icon className="h-6 w-6 text-gray-700" />
          <p className="text-center text-sm text-gray-600 md:text-left">
            Built by
            <Link
              href="/"
              className="font-medium text-blue-600 hover:text-blue-800 underline underline-offset-4"
            >
              Syno Sites
            </Link>
            . All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 underline underline-offset-4"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 underline underline-offset-4"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
