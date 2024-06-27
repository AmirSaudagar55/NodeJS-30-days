Authentication

Types of authentications :
1) Stateful Authentication : Server maintains the state by storing the data within itself.
2) Stateless Authentication : Min Data for maintaining state is stored on the server.

2) Stateless Authentication :
- We share a authentication token (generated using a secret key) as a payload in cookies to user.
- Whenever a user request with a cookie payload which was send by the server, Server decode it using a Secret Key, and then validate that user.

-If someone modifies the jwt token within the cookies, It will not be validated until he knows secret key.