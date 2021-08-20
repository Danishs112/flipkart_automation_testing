const webUrl = "https://www.flipkart.com";
const searchPath ="input[name='q']";
//const searchButtonPath ='button[class="L0Z3Pu"]';
const productPath ='#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > a.s1Q9rs';
const addToCartButtonPath = 'button[class="_2KpZ6l _2U9uOA _3v1-ww"]';

const product = async function (productName) {
    return await $(productName);
}

const buttonPath = async function (buttonPath) {
    return $(buttonPath);
}
const productLink = async function (productName) {
    let productLink = await product(productName);
    productLink = await productLink.getAttribute('href');
    return productLink;
}

const productTitle = async function() {
    let productPath = await product(productPath);
    let productTitle = await productPath.getAttribute('title');
    productTitle = productTitle.toString();
    return productTitle;
}

const browserUrlSet = async function(url) {
    return browser.url(url);
}

const visit_page = async function (){
    let webPage = browserUrlSet(webUrl);
    return webPage;
}

const SearchInputValue = async function(productName) {
    let searchInput = await product(searchPath); 
    let searchInputValue = await searchInput.setValue(productName);
    return searchInputValue;
} 

const pageContent = async function(url = browser){
    return (await url.$("body")).getText();
}

const cartButton = async function(){
    return buttonPath(addToCartButtonPath);
}

const currentUrl = async function(){
    return browser.getUrl()
}


exports.selectProduct = async function () {
    let link = await productLink(productPath);
    return browserUrlSet(webUrl + link);

}

exports.addToCart = async function () {
    const currentBrowserUrl = currentUrl();
    const bodyText = pageContent(currentBrowserUrl);
    if (bodyText.includes(productTitle)){
        return true;
    }
    else{
        return false;
    }
}

exports.searchItem = async function(productName) {
    await SearchInputValue(productName);
    browser.keys("\uE007");
    
}


exports.page = {
    visitPage : visit_page,
    pageContent : pageContent,
}

exports.button = {
    cartButton : cartButton,
}


exports.searchContent  = async function (parameter) {
    const currentBrowserUrl = currentUrl();
    const bodyText = pageContent(currentBrowserUrl);
    if (bodyText.includes(parameter)){
        return true;
    }
    else{
        return false;
    }
}
