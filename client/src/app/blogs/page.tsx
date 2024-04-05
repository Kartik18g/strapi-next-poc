import apiEndpoints from "@/routes/apiEndpoints";
import fetchWithAuth from "@/utils/fetch";
import BlogItem from "./BlogItem";

export default async function Home() {
  const response = await fetchWithAuth(apiEndpoints.BLOG.ALL.URL);
  return (
    <main>
      <h1>Home Page</h1>
      {response.data.map((blog: any) => (
        <BlogItem
          key={blog.id}
          id={blog.id}
          title={blog.attributes.title}
          description={blog.attributes.description}
          draft={blog.attributes.draft}
          imageUrl={blog.attributes.imageUrl}
        />
      ))}
    </main>
  );
}
