import { RestaurantRatingWebPage } from './app.po';

describe('restaurant-rating-web App', function() {
  let page: RestaurantRatingWebPage;

  beforeEach(() => {
    page = new RestaurantRatingWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
