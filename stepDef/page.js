const web_url = "https://www.flipkart.com";
const search_path ="input[title='Search for products, brands and more']";
const search_button_path ='button[class="L0Z3Pu"]';
const product_path ='#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div > a.s1Q9rs';
const add_to_cart_button_path = 'button[class="_2KpZ6l _2U9uOA _3v1-ww"]';

const product = async function (product_name) {
    return await $(product_name);
}

const button_set_path = async function (button_path) {
    return $(button_path);
}

const product_href = async function (product_name) {
    let product_href = await product(product_name);
    product_href = await product_href.getAttribute('href');
    return product_href;
}

const product_title = async function() {
    let product_title = await product(product_path);
    product_title = await product_title.getAttribute('title');
    product_title = product_title.toString();
    return product_title;
}

const browser_set_url = async function(url) {
    return browser.url(url);
}

const visit_page = async function (){
    let web_page = browser_set_url(web_url);
    return web_page;
}

const product_set_value = async function(pro) {
    let product_set = await product(search_path);
    console.log(product_set);
    let product_set_value = await  product_set.setValue(pro);
    return product_set_value;
} 


exports.select_product = async function () {
    let href = await product_href(product_path);
    return browser_set_url(web_url + href);

}

exports.page_content = async function(){
    return (await browser.$("body")).getText();
}

exports.cart_button = async function(){
    return button_set_path(add_to_cart_button_path);
}

exports.addToCart = async function () {
    const current_browser_url = browser.getUrl();
    const body_text = (await current_browser_url.$("body")).getText();
    if (body_text.includes(product_title())){
        return true;
    }
    else{
        return false;
    }
}

exports.searchItem = async function(productName) {
    let setValue = await product_set_value(productName);
    browser.keys("\uE007");
    
}


exports.page = {
    visitPage : visit_page,
}

// exports.product = {
//     productUrl : product,
//     productLink : product_href,
//     productTitle: product_title,
//     insertProduct : product_set_value,
//     searchProduct : searchItem,
     

// }

exports.searchContent  = async function (parameter) {
    const current_browser_url = browser.getUrl();
    const body_text = (await current_browser_url.$("body")).getText();
    if (body_text.includes(parameter)){
        return true;
    }
    else{
        return false;
    }
}
