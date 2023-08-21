import React from "react";
import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  //   console.log(useRouter().query);

  const router = useRouter();
  console.log(router.query);
  return <div>This is a specific portfolio page</div>;
}
