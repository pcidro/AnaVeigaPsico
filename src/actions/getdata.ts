export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B"type":"posts"%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
      {
        next: {
          revalidate: 60,
        },
      },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to fetch data", error);
    }
  }
}
