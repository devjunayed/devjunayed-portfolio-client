import type { Metadata } from "next";
import Navbar from "@/components/Shared/Navbar";

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
    <div className=" ">
      <Navbar />
      {children}
    </div>
  );
}
