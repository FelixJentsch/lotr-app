import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";

const VolumeDetails = () => {
  const volume = volumes.find((volume) => volume.slug === "the-two-towers");

  const volumeIndex = volumes.indexOf(volume);
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  const previousUrl = previousVolume ? `/volumes/${previousVolume.slug}` : null;
  const nextUrl = nextVolume ? `/volumes/${nextVolume.slug}` : null;

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
        src={volume.cover}
        /* src={"/images/" + volume.slug + ".png"} */
        width={140}
        height={230}
        alt={volume.title}
      ></Image>
      <br />
      {previousUrl && <a href={previousUrl}>⬅️ Previous Volume </a>}

      {nextUrl && <a href={nextUrl}> Next Volume ➡️ </a>}
    </div>
  );
};

export default VolumeDetails;
