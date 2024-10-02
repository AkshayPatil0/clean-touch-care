import { Droplet } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Droplet className="h-6 w-6 text-blue-600" />
        <span className="ml-2 text-2xl font-bold">Clean Touch</span>
      </Link>
    </header>
  );
}
