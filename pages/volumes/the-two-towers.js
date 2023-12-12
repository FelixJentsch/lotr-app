import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";

const VolumeDetails = () => {
  const volume = volumes.find((volume) => volume.slug === "the-two-towers");

  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}. {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={`/images/${volume.cover}`}
        width={140}
        height={230}
        alt={volume.title}
      ></Image>
    </div>
  );
};

export default VolumeDetails;
