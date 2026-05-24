export type DepoimentoGoogle = {
  authorName: string;
  authorPhoto: string | null;
  text: string;
  rating: number | null;
};

type GoogleLocalizedText = {
  text?: string;
  languageCode?: string;
};

type GoogleAuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

export type GoogleReview = {
  name?: string;
  rating?: number;
  text?: GoogleLocalizedText;
  originalText?: GoogleLocalizedText;
  authorAttribution?: GoogleAuthorAttribution;
  publishTime?: string;
};

export type GooglePlaceDetailsResponse = {
  displayName?: GoogleLocalizedText;
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
};

export type DepoimentosResult =
  | {
      ok: true;
      userRatingCount: number | null;
      reviews: DepoimentoGoogle[];
      error: null;
      placeUrl: null | string;
    }
  | {
      ok: false;
      placeName: null;
      userRatingCount: null;
      reviews: [];
      error: string;
    };
