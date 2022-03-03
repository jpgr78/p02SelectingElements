const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class challengingdompage extends Page {
    /**
     * define selectors using getter methods
     */
    get FooterText(){return $('=Elemental Selenium')}
    get FooterPartialText(){return $('*=Element')}
    get Tabletext(){return $('td=Apeirian0')}
    get TabletextPartial(){return $('td*=Ape')}

    
 async click2(word) {
        
        await this.option2.click();
    }
     
     open() {
        return super.open('challenging_dom');
    }
}

module.exports = new challengingdompage();