import { MetadataRoute } from "next";
import { getDataHome } from "@/actions/getdata";
import { areasAtendimento } from "@/types/areas";
import { Post } from "@/types/postType";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://anaveigapsico.vercel.app";

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  // Areas
  const areas = areasAtendimento.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blog posts
  let posts: Post[] = [];
  try {
    const data = await getDataHome();
    posts = data?.objects || [];
  } catch (error) {
    console.error("Failed to fetch posts for sitemap", error);
  }

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata?.data_da_publicacao
      ? new Date(post.metadata.data_da_publicacao)
      : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...routes, ...areas, ...blogPosts] as MetadataRoute.Sitemap;
}
