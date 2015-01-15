Package.describe({
	name: "velocity:test-proxy",
	summary: "Dynamically created package to expose test files to mirrors",
	version: "0.0.4",
	debugOnly: true
});

Package.on_use(function (api) {
	api.use("coffeescript", ["client", "server"]);
	api.add_files("tests/robotframework/arguments.txt",["server","client"]);
	api.add_files("tests/robotframework/suites/leaderboard-resources.txt",["server","client"]);
	api.add_files("tests/robotframework/suites/leaderboard.txt",["server","client"]);
	api.add_files("tests/robotframework/suites/selenium-resources.txt",["server","client"]);
});