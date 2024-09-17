document.cookie = "safeCookie1=foo; SameSite=Lax";
document.cookie = "safeCookie2=foo";
document.cookie = "crossCookie=bar; SameSite=None; Secure";
// location / {
//     // # your usual config ...
//     // # hack, set all cookies to secure, httponly and
//     samesite(strict or lax) proxy_cookie_path / "/; secure; SameSite=None";
// }
