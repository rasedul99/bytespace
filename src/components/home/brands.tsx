import Image from "next/image";

import waves from "../../../public/images/brands/waves.png";
import burst from "../../../public/images/brands/burst.png";
import bolt from "../../../public/images/brands/bolt.png";
import clover from "../../../public/images/brands/clover.png";
import rings from "../../../public/images/brands/rings.png";

const brands = [
  { name: "Logoipsum", logo: waves },
  { name: "Logoipsum", logo: burst },
  { name: "Logoipsum", logo: bolt },
  { name: "Logoipsum", logo: clover },
  { name: "Logoipsum", logo: rings },
];

export function Brands() {
  return (
    <section className="bg-gray-50 py-20">
      <ul className="mx-auto flex max-w-300 flex-wrap items-center justify-center gap-x-18 px-4">
        {brands.map(({ name, logo }, i) => (
          <li key={i}>
            <Image
              src={logo}
              alt={name}
              className="h-10 w-auto max-w-41.75 object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
