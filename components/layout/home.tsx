import Link from "next/link";

export default function Home() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        className="fill-current"
      >
        <path d="M22.672 15.226l-2.432.811..."></path>
      </svg>
      <span className="font-semibold text-2xl">My Components</span>
    </Link>
  );
}
