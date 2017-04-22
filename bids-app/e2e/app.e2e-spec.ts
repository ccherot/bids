import { BidsAppPage } from './app.po';

describe('bids-app App', function() {
  let page: BidsAppPage;

  beforeEach(() => {
    page = new BidsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
