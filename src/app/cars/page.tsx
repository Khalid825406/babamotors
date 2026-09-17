import { Suspense } from "react";
import type { Metadata } from "next";
import CarsPageClient from "./CarsPageClient";

export const metadata: Metadata = {
  title: "Used Cars in Ranchi | Baba Motors",
  description: "Browse quality pre-owned cars in Ranchi from Baba Motors.",
};

export default function CarsPage() {
  return (
    <Suspense>
      <CarsPageClient />
    </Suspense>
  );
}
