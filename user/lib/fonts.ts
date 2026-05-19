import { Cormorant_Garamond, DM_Sans, Montserrat } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const fontVariables = `${cormorant.variable} ${montserrat.variable} ${dmSans.variable}`;
