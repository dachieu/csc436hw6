import { Csc436hw6Page } from './app.po';

describe('csc436hw6 App', () => {
  let page: Csc436hw6Page;

  beforeEach(() => {
    page = new Csc436hw6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
