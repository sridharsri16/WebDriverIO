describe('Amazon page', () => {
    it('should have the right title', () => {
        browser.url('https://www.amazon.in/')
        expect(browser).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    })
    //search bar test 
    it('search the category and bring the right page', () => {

        $('#twotabsearchtextbox').addValue('Samsung Mobiles');
        $('#nav-search-submit-button').click();
        expect($('#twotabsearchtextbox')).toHaveValue('Samsung Mobiles');
    })
    
    //searched page title
    it('searched Page Title', () => {
        expect($('#twotabsearchtextbox')).toHaveTitle('Amazon.in : Samsung Mobiles');
    })
    

    //searched page Brand Top list check
    it('searched page Brand Top list check',()=>{
        let str=$('#twotabsearchtextbox').getValue();
        let searchedText = str.split(" ");
        console.log(searchedText);
        expect($('#brandsRefinements ul li span a span:nth-child(2)')).toHaveText(searchedText[0]);
    })
   
})