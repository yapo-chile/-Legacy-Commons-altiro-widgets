import { Ad } from './Ad';
import ads from './suggestedAdsData';

export class SuggestedService {
  ads: any;
  constructor() {
    this.ads = ads;
  }
  public getSuggestedAds(adId: string): Promise<Array<Ad>> {
    const ads: Array<Ad> = this.ads[adId]? this.ads[adId] : [];
    return Promise.resolve(ads);
  }
}
