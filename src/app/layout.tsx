import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Porviders";



export const metadata: Metadata = {
  title: "Md Junayed | Protfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-slate-900  antialiased`}
      >
        <div className=" overflow-y-hidden">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
