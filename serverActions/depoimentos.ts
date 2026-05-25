"use server";

import {
  DepoimentoGoogle,
  DepoimentosResult,
  GooglePlaceDetailsResponse,
  GoogleReview,
} from "@/types/googledepoimentostypes";
const PLACE_DETAILS = "displayName,rating,userRatingCount,reviews";
const DEFAULT_PLACE_QUERY = "Ana Veiga Psicanalista";

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

function getGoogleMapsPlaceUrl(placeId: string, placeName?: string) {
  const params = new URLSearchParams({
    api: "1",
    query: placeName || DEFAULT_PLACE_QUERY,
    query_place_id: placeId,
  });

  return `https://www.google.com/maps/search/?${params.toString()}`;
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
      placeUrl: getGoogleMapsPlaceUrl(placeId, data.displayName?.text),
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
