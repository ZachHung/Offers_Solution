import { offerDemo } from '.';

describe('testing index file', () => {
  test('Each offer should have the right structure', () => {
    const test = {
      offers: [
        {
          id: 1,
          title: 'Offer 1',
          description: 'Offer 1 description',
          category: 1,
          merchants: [{ id: 1, name: 'Offer1 Merchant1', distance: 0.5 }],
          valid_to: '2020-02-01',
        },
        {
          id: 2,
          title: 'Offer 2',
          description: 'Offer 2 description',
          category: 2,
          merchants: [{ id: 2, name: 'Offer2 Merchant1', distance: 1.3 }],
          valid_to: '2019-12-01',
        },
        {
          id: 3,
          title: 'Offer 3',
          description: 'Offer 3 description',
          category: 2,
          merchants: [
            { id: 3, name: 'Offer3 Merchant1', distance: 0.8 },
            { id: 4, name: 'Offer3 Merchant2', distance: 0.9 },
            { id: 7, name: 'Offer3 Merchant2', distance: 1 },
          ],
          valid_to: '2020-01-01',
        },
        {
          id: 4,
          title: 'Offer 4',
          description: 'Offer 4 description',
          category: 3,
          merchants: [{ id: 5, name: 'Offer4 Merchant1', distance: 0.3 }],
          valid_to: '2020-05-01',
        },
        {
          id: 5,
          title: 'Offer 5',
          description: 'Offer 5 description',
          category: 4,
          merchants: [{ id: 6, name: 'Offer5 Merchant1', distance: 1.2 }],
          valid_to: '2020-05-01',
        },
        {
          id: 6,
          title: 'Offer 6',
          description: 'Offer 6 description',
          category: 2,
          merchants: [{ id: 7, name: 'Offer6 Merchant1', distance: 1.3 }],
          valid_to: '2020-05-01',
        },
      ],
    };

    for (let offer of offerDemo(test, '2019-12-25').offers) {
      expect(offer).toHaveProperty('id');
      expect(offer).toHaveProperty('title');
      expect(offer).toHaveProperty('description');
      expect(offer).toHaveProperty('category');
      expect(offer).toHaveProperty('merchants');
      expect(offer).toHaveProperty('merchants[0].id');
      expect(offer).toHaveProperty('merchants[0].name');
      expect(offer).toHaveProperty('merchants[0].distance');
      expect(offer).toHaveProperty('valid_to');
    }
  });

  test('Each offer should only have one merchant', () => {
    const test = {
      offers: [
        {
          id: 1,
          title: 'Offer 1',
          description: 'Offer 1 description',
          category: 1,
          merchants: [{ id: 1, name: 'Offer1 Merchant1', distance: 0.5 }],
          valid_to: '2020-02-01',
        },
        {
          id: 2,
          title: 'Offer 2',
          description: 'Offer 2 description',
          category: 2,
          merchants: [{ id: 2, name: 'Offer2 Merchant1', distance: 1.3 }],
          valid_to: '2019-12-01',
        },
        {
          id: 3,
          title: 'Offer 3',
          description: 'Offer 3 description',
          category: 2,
          merchants: [
            { id: 3, name: 'Offer3 Merchant1', distance: 0.8 },
            { id: 4, name: 'Offer3 Merchant2', distance: 0.9 },
            { id: 7, name: 'Offer3 Merchant2', distance: 1 },
          ],
          valid_to: '2020-01-01',
        },
        {
          id: 4,
          title: 'Offer 4',
          description: 'Offer 4 description',
          category: 3,
          merchants: [{ id: 5, name: 'Offer4 Merchant1', distance: 0.3 }],
          valid_to: '2020-05-01',
        },
        {
          id: 5,
          title: 'Offer 5',
          description: 'Offer 5 description',
          category: 4,
          merchants: [{ id: 6, name: 'Offer5 Merchant1', distance: 1.2 }],
          valid_to: '2020-05-01',
        },
        {
          id: 6,
          title: 'Offer 6',
          description: 'Offer 6 description',
          category: 2,
          merchants: [{ id: 7, name: 'Offer6 Merchant1', distance: 1.3 }],
          valid_to: '2020-05-01',
        },
      ],
    };

    for (let offer of offerDemo(test, '2019-12-25').offers) {
      expect(offer.merchants).toHaveLength(1);
    }
  });

  test('Should only return at most 2 offers', () => {
    const test1 = {
      offers: [
        {
          id: 1,
          title: 'Offer 1',
          description: 'Offer 1 description',
          category: 1,
          merchants: [{ id: 1, name: 'Offer1 Merchant1', distance: 0.5 }],
          valid_to: '2020-02-01',
        },
        {
          id: 2,
          title: 'Offer 2',
          description: 'Offer 2 description',
          category: 2,
          merchants: [{ id: 2, name: 'Offer2 Merchant1', distance: 1.3 }],
          valid_to: '2019-12-01',
        },
        {
          id: 3,
          title: 'Offer 3',
          description: 'Offer 3 description',
          category: 2,
          merchants: [
            { id: 3, name: 'Offer3 Merchant1', distance: 0.8 },
            { id: 4, name: 'Offer3 Merchant2', distance: 0.9 },
            { id: 7, name: 'Offer3 Merchant2', distance: 1 },
          ],
          valid_to: '2020-01-01',
        },
        {
          id: 4,
          title: 'Offer 4',
          description: 'Offer 4 description',
          category: 3,
          merchants: [{ id: 5, name: 'Offer4 Merchant1', distance: 0.3 }],
          valid_to: '2020-05-01',
        },
        {
          id: 5,
          title: 'Offer 5',
          description: 'Offer 5 description',
          category: 4,
          merchants: [{ id: 6, name: 'Offer5 Merchant1', distance: 1.2 }],
          valid_to: '2020-05-01',
        },
        {
          id: 6,
          title: 'Offer 6',
          description: 'Offer 6 description',
          category: 2,
          merchants: [{ id: 7, name: 'Offer6 Merchant1', distance: 1.3 }],
          valid_to: '2020-05-01',
        },
      ],
    };

    const test2 = {
      offers: [
        {
          id: 1,
          title: 'Offer 1',
          description: 'Offer 1 description',
          category: 1,
          merchants: [{ id: 1, name: 'Offer1 Merchant1', distance: 0.5 }],
          valid_to: '2020-02-01',
        },
      ],
    };

    const test3 = {
      offers: [],
    };

    expect(offerDemo(test1, '2019-12-25').offers.length).toBeLessThanOrEqual(2);
    expect(offerDemo(test2, '2019-12-25').offers.length).toBeLessThanOrEqual(2);
    expect(offerDemo(test3, '2019-12-25').offers.length).toBeLessThanOrEqual(2);
  });

  test('Test mock api example', () => {
    const test = {
      offers: [
        {
          id: 1,
          title: 'Offer 1',
          description: 'Offer 1 description',
          category: 1,
          merchants: [{ id: 1, name: 'Offer1 Merchant1', distance: 0.5 }],
          valid_to: '2020-02-01',
        },
        {
          id: 2,
          title: 'Offer 2',
          description: 'Offer 2 description',
          category: 2,
          merchants: [{ id: 2, name: 'Offer2 Merchant1', distance: 1.3 }],
          valid_to: '2019-12-01',
        },
        {
          id: 3,
          title: 'Offer 3',
          description: 'Offer 3 description',
          category: 2,
          merchants: [
            { id: 3, name: 'Offer3 Merchant1', distance: 0.8 },
            { id: 4, name: 'Offer3 Merchant2', distance: 0.9 },
          ],
          valid_to: '2020-01-01',
        },
        {
          id: 4,
          title: 'Offer 4',
          description: 'Offer 4 description',
          category: 3,
          merchants: [{ id: 5, name: 'Offer4 Merchant1', distance: 0.3 }],
          valid_to: '2020-05-01',
        },
        {
          id: 5,
          title: 'Offer 5',
          description: 'Offer 5 description',
          category: 4,
          merchants: [{ id: 6, name: 'Offer5 Merchant1', distance: 1.2 }],
          valid_to: '2020-05-01',
        },
        {
          id: 6,
          title: 'Offer 6',
          description: 'Offer 6 description',
          category: 2,
          merchants: [{ id: 7, name: 'Offer6 Merchant1', distance: 1.3 }],
          valid_to: '2020-05-01',
        },
      ],
    };
    const expected = {
      offers: [
        {
          id: 1,
          title: 'Offer 1',
          description: 'Offer 1 description',
          category: 1,
          merchants: [
            {
              id: 1,
              name: 'Offer1 Merchant1',
              distance: 0.5,
            },
          ],
          valid_to: '2020-02-01',
        },
        {
          id: 3,
          title: 'Offer 3',
          description: 'Offer 3 description',
          category: 2,
          merchants: [
            {
              id: 3,
              name: 'Offer3 Merchant1',
              distance: 0.8,
            },
          ],
          valid_to: '2020-01-01',
        },
      ],
    };
    expect(offerDemo(test, '2019-12-25')).toStrictEqual(expected);
  });
});
