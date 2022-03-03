const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class checkboxespage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading(){return $("h3")}
    get form(){return $("form")}
   get option1(){return $("form input:nth-child(1)")



}
    get option2(){return $("//form/input[2]")}
    
 async click2(word) {
        
        await this.option2.click();
    }
     
     open() {
        return super.open('checkboxes');
    }
}

module.exports = new checkboxespage();