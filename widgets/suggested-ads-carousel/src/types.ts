export interface imageGroup {
  full: string;
  medium: string;
  small: string
}

export interface ResponseSuggestedAd{
  ads: Array<Ad>;
}
export interface Ad {
    images?: imageGroup;
    url?: string;
    price?: number;
    title?: string;
    id: string;
    currency?: string;
}