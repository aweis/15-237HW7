Group members:
aweis
kbaysal

In order to run this, you first of all need to get your ip address and change the ip address in these files:
*phone1.js
*phone2.js
*phone1.html
*phone2.html
*desktop.html
*Pong.js
This is for socket io stuff.

Once that is done, you can run the socket server and the password server:
1) For socket server go to /socket and run node socketserver.js
2) For password server go to /server and run node passwordServer.js

Then on the desktop, you can go to http://ip.add.re.ss:8889/www/desktop.html
And go to http://ip.add.re.ss:8889/www/login.html
We have two different login info: 
1) user name: player1 password: secret1
2) user name: player2 password: secret2
One of these will start playing for one side and the other, other side. 
If you try to go to phone1/2.html directly, if you haven't logged in yet, it will redirect you to login.html.
