import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import React, { PropsWithChildren } from "react";

const rootLayout = (props: PropsWithChildren) => {
  return (
    <>
      <html lang="en" className={inter.className}>
        <body>{props.children}</body>
      </html>
    </>
  );
};

export default rootLayout;
