import { ResponseSuggestedAd } from './types';

export class SuggestedService {
  ads: any;
  uri: string;
  constructor(uri: string) {
    this.uri = uri;
  }
  public getSuggestedAds(adId: string): Promise<ResponseSuggestedAd> {
    var misCabeceras = new Headers();
    var miInit: RequestInit = { 
        method: 'GET',
        headers:
          {
            'Content-Type': 'application/json',
          },
        cache: 'default',
      };
    return fetch(this.uri, miInit).then((data: Response) => {
      return data.json();
    });
  }
}