There are two ways of sending an tokens to client
    1) Using Cookies
    2) Using response

1) Using cookies :
- Cookies are the small informations that are stored on browser.
- Browser sends this cookies with each request on the server.
- Cookies has a domain, through which the cookies are sends to specific domain as specified in them.
- Server and browser can modify this cookie.

2) Using response:
- We send the token in 'authorization' header with syntax : "Bearer YourToken"
- We use this method typically for platform that does not allow cookies e.g. Mobile Applications


