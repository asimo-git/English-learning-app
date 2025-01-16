import { Footer } from "./footer";
import { Header } from "./header";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}
