Authentication

Types of authentications :
1) Stateful Authentication : Server maintains the state by storing the data within itself.
2) Stateless Authentication : Data for maintaining state is not stored on the server.

1) Stateful Authentication :

-------------                                      ----------
|           |                                      |        |
| Client    | --------> Auth Middleware -------->  | Server |
|           |                                      |        |
-------------                                      ----------
