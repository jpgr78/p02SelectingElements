const challengingdompage=require('../pageobjects/challenging_dom.page');

describe('Text into the tags', () => {
    it('Total text exists on footer', async () => {
        await challengingdompage.open();

        
        await expect(challengingdompage.FooterText).toBeExisting();
       
    });
    it('Partial text exists on footer', async () => {
        await challengingdompage.open();

        
        await expect(challengingdompage.FooterPartialText).toBeExisting();
       
    });
    it('The word Apeiriam0 exists', async () => {
        await challengingdompage.open();

        
        await expect(challengingdompage.Tabletext).toBeExisting();
       
    });
    it('The word Apeiriam0 exists partially', async () => {
        await challengingdompage.open();

        
        await expect(challengingdompage.TabletextPartial).toBeExisting();
       
    });
    
     
    
});