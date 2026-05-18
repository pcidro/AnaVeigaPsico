import { PostsResponse } from "@/types/postType";

export default async function getPostBySlug(slug: string) {
  try {
    const query = encodeURIComponent(JSON.stringify({ slug }));

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?type=posts&query=${query}&read_key=${process.env.READ_KEY}`,
      {
        next: {
          revalidate: 60,
        },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.status}`);
    }

    const data: PostsResponse = await res.json();

    return data.objects[0] ?? null;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}
