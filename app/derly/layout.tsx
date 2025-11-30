import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SidebarDemo } from "@/components/shared/SidebarDemo";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Derly",
  description: "Derly is a dashboard for managing your market to saveing and tracking your money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <div className="flex">
          <SidebarDemo>
            <div className="p-2 md:p-8">{children}</div>
          </SidebarDemo>
        </div>
      </body>
    </html>
  );
}
