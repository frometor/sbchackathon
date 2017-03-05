import { SbchackathonPage } from './app.po';

describe('sbchackathon App', () => {
  let page: SbchackathonPage;

  beforeEach(() => {
    page = new SbchackathonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
