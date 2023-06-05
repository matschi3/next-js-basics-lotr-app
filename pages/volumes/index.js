import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

export default function Index() {
  return (
    <div>
      <Link href="/">← Main</Link>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
