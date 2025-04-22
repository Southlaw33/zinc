"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { tanstackQueryCLient } from "@/lib/integrations/tanstack";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import React, { PropsWithChildren } from "react";

const rootLayout = (props: PropsWithChildren) => {
  return (
    <>
      <QueryClientProvider client={tanstackQueryCLient}>
        <html lang="en" className={inter.className}>
          <body>{props.children}</body>
        </html>
      </QueryClientProvider>
    </>
  );
};

export default rootLayout;
