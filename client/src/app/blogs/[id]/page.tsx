import apiEndpoints from "@/routes/apiEndpoints";
import fetchWithAuth from "@/utils/fetch";
import { GetStaticPaths } from "next";
import React from "react";

type Props = {};
export async function generateStaticParams() {
  const response = await fetchWithAuth(apiEndpoints.BLOG.ALL.URL);

  return response.data.map((blog: any) => ({
    id: blog.id + "",
  }));
}

export default function page({}: Props) {
  return <div>page</div>;
}
