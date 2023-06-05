import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  const { volumesSlug } = router.query;
  //console.log(volumesSlug);
  const specificVolume = volumes.find((volume) => volume.slug === volumesSlug);
  //console.log(specificVolume);
  if (!specificVolume) {
    return <p>Volume with specificSlug: {volumesSlug} was not found.</p>;
  }
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
