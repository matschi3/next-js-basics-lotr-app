import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function TheFellowshipOfTheRing() {
  const specificVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{specificVolume.title}</h1>
      <p>{specificVolume.description}</p>
      <ul>
        {specificVolume.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={specificVolume.cover}
        alt={specificVolume.title}
        width={140}
        height={230}
      ></Image>
    </>
  );
}
