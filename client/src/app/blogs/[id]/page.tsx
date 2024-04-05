import apiEndpoints from "@/routes/apiEndpoints";
import fetchWithAuth from "@/utils/fetch";
import { GetStaticPaths } from "next";
import React from "react";

type Props = {};
export async function generateStaticParams() {
  const response = await fetchWithAuth(apiEndpoints.BLOG.ALL.URL);

  return response.data.map((blog: any) => ({
    id: blog.id + "",
    title: "sf",
  }));
}

export default function page(props: Props) {
  console.log(props, "df");
  return <div>page</div>;
}
