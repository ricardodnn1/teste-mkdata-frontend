import { MkdataFrontendPage } from './app.po';

describe('mkdata-frontend App', function() {
  let page: MkdataFrontendPage;

  beforeEach(() => {
    page = new MkdataFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
