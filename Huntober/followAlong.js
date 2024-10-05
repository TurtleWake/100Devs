// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet


function domainName(url) {
    //remove protocols
    url = url.replace('http://', '').replace('https://', '');
    
    //remove www.
    url = url.replace('www.', '');
    
    //extract the domain name before the first '.'
    return url.split('.')[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));  // Output: github
console.log(domainName("http://www.zombie-bites.com"));          // Output: zombie-bites
console.log(domainName("https://www.cnet.com"));                 // Output: cnet
