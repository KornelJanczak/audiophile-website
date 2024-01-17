import WhiteHeader from "@/components/UI/WhiteHeader";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WhiteHeader />
      {children}
    </>
  );
}
