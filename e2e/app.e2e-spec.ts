import { EskyPage } from './app.po';

describe('esky App', () => {
  let page: EskyPage;

  beforeEach(() => {
    page = new EskyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
