import Link from "next/link";
import { introduction, volumes } from "@/resources/lib/data";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>

      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`} passHref={false}>
              {volume.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
