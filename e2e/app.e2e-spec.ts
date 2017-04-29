import { SeekheartsGrandAdventurePage } from './app.po';

describe('seekhearts-grand-adventure App', () => {
  let page: SeekheartsGrandAdventurePage;

  beforeEach(() => {
    page = new SeekheartsGrandAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
