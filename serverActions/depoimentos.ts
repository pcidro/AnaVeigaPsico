"use server";

import {
  DepoimentoGoogle,
  DepoimentosResult,
  GooglePlaceDetailsResponse,
  GoogleReview,
} from "@/types/googledepoimentostypes";
const PLACE_DETAILS = "displayName,rating,userRatingCount,reviews";

function normalizeReview(review: GoogleReview): DepoimentoGoogle | null {
  const text = review.text?.text || review.originalText?.text;

  if (!text) return null;

  return {
    authorName: review.authorAttribution?.displayName || "Paciente",
    authorPhoto: review.authorAttribution?.photoUri || null,
    text,
    rating: typeof review.rating === "number" ? review.rating : null,
  };
}

export async function getDepoimentosGoogle(): Promise<DepoimentosResult> {
  const placeId = process.env.GOOGLE_PLACE_ID as string;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY as string;
  const endpoint = `https://places.googleapis.com/v1/places/${placeId}`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": PLACE_DETAILS,
      },
      next: { revalidate: 60 * 60 * 24 * 3 },
    });

    if (!response.ok) {
      return {
        ok: false,
        placeName: null,
        userRatingCount: null,

        reviews: [],
        error: "Não foi possível carregar os depoimentos agora.",
      };
    }

    const data = (await response.json()) as GooglePlaceDetailsResponse;
    const reviews = (data.reviews ?? [])
      .map(normalizeReview)
      .filter((review): review is DepoimentoGoogle => Boolean(review));

    return {
      ok: true,
      userRatingCount:
        typeof data.userRatingCount === "number" ? data.userRatingCount : null,
      placeUrl: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      reviews,
      error: null,
    };
  } catch {
    return {
      ok: false,
      placeName: null,
      userRatingCount: null,
      reviews: [],
      error: "Não foi possível carregar os depoimentos agora.",
    };
  }
}
