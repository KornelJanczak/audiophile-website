import WhiteHeader from "@/components/UI/WhiteHeader";

export default function SignInLayout({
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
