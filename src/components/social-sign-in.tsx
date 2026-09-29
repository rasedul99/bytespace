import Image from "next/image";

const providers = [
  { name: "Facebook", icon: "/images/icons/facebook.svg" },
  { name: "Google", icon: "/images/icons/google.svg" },
];

// Not connected to OAuth yet — the buttons do nothing.
export function SocialSignIn() {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-3 body-m text-gray-400">
        <span className="h-px flex-1 bg-gray-400/50" />
        or
        <span className="h-px flex-1 bg-gray-400/50" />
      </div>
      <div className="mt-14 flex justify-center gap-4">
        {providers.map((provider) => (
          <button
            key={provider.name}
            type="button"
            aria-label={`Continue with ${provider.name}`}
            className="flex size-18 items-center justify-center rounded-[22px] border border-gray-400/60 transition-colors hover:border-gray-950"
          >
            <Image src={provider.icon} alt="" width={34} height={34} className="size-8.5" />
          </button>
        ))}
      </div>
    </div>
  );
}
