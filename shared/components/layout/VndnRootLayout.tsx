import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface VndnRootLayoutProps {
  children: React.ReactNode;
  bodyClassName?: string;
}

export function VndnRootLayout({ children, bodyClassName = "" }: VndnRootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <body className={`min-h-full ${bodyClassName}`.trim()}>{children}</body>
    </html>
  );
}
