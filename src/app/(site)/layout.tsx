import { Footer } from "@/components/footer";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
