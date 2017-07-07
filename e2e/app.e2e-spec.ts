import { UmsPage } from './app.po';

describe('ums App', () => {
  let page: UmsPage;

  beforeEach(() => {
    page = new UmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
