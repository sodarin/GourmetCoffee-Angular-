import { GourmetCoffeePage } from './app.po';

describe('gourmet-coffee App', () => {
  let page: GourmetCoffeePage;

  beforeEach(() => {
    page = new GourmetCoffeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
