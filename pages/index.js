import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>LordOfTheRingsApp</h1>
      <Link href="/volumes">Volumes overview</Link>
    </div>
  );
}
