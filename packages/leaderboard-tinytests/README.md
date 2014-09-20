leaderboard-tinytests
=====================

Unit tests for the Leaderboard example using Tinytest.  


#### Installation  

````sh
// grab a copy of meteor 
git clone http://github.com/meteor/meteor.git

// so you can fuss with the leaderboard example
cd meteor/examples/leaderboard/packages

// install the tinytests
git clone http://github.com/awatson1978/leaderboard-tinytests.git

// make sure the tiny test package is installed
cd ..
meteor add tinytests

// and run them
meteor test-packages leaderboard-tinytests
````

Check ``http://localhost:3000`` to see them run.


#### Notes  

The ``fireEvent`` stub isn't mocked up to anything, which is why the last test is failing.
