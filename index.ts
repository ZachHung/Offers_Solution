export function offerDemo(response: Res, checkinDate: string) {
  // const response: Res = await fetch(
  //   'https://61c3deadf1af4a0017d990e7.mockapi.io/offers/near_by?lat=1.313492&lon=103.860359&rad=20'
  // ).then((d) => d.json());
  return new OfferList(response.offers, checkinDate).filterOut();
}

enum CategoryEnum {
  Restaurant = 1,
  Retail = 2,
  Hotel = 3,
  Activity = 4,
}

type Merchant = {
  id: number;
  distance: number;
  name: string;
};

type Offer = {
  id: number;
  title: string;
  description: string;
  category: CategoryEnum;
  merchants: Merchant[];
  valid_to: string;
};

type Res = {
  offers: Offer[];
};

class OfferList {
  constructor(public offers: Offer[], public checkinDate: string) {
    this.offers = offers;
    this.checkinDate = checkinDate;
  }

  filterOut(): Res {
    let checkinD = new Date(this.checkinDate).getTime();
    this.offers = this.offers
      // filter category and valid_to
      .filter((offer) => {
        let validTo = new Date(offer.valid_to).getTime();
        let dateDiff = Math.abs(validTo - checkinD) / (1000 * 60 * 60 * 24);
        return (
          (offer.category === CategoryEnum.Restaurant ||
            offer.category === CategoryEnum.Retail ||
            offer.category === CategoryEnum.Activity) &&
          dateDiff > 5
        );
      })
      // filter closest merchant in each offer
      .map((offer): Offer => {
        if (offer.merchants.length > 1)
          return {
            ...offer,
            merchants: [
              offer.merchants.sort((a, b) => a.distance - b.distance)[0],
            ],
          };
        return offer;
      })
      // sort by merchant's distance to get the closest offers in each category
      .sort((a, b) => a.merchants[0].distance - b.merchants[0].distance)

      // filter out duplicate category
      .filter(
        (offer, index, self) =>
          index === self.findIndex((o) => o.category === offer.category)
      );

    this.offers.splice(2);
    return {
      offers: this.offers,
    };
  }
}
