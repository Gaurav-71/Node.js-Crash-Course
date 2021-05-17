const url = require("url");

const myurl = new URL("https://www.bgc-genomics.com/user-report?srfid=1234");

// serializzed url
console.log(myurl.href);

// host (root domain)
console.log(myurl.host);

// host name ( does not get port )
console.log(myurl.hostname);

// path name
console.log(myurl.pathname);

// serialized query
console.log(myurl.search);

// parmas object
console.log(myurl.searchParams);

// add params
myurl.searchParams.append("abc", 123);
console.log(myurl.searchParams);

// loop through params
myurl.searchParams.forEach((value, name) => console.log(name, ":", value));
