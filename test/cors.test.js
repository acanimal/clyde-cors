"use strict";

var path = require("path"),
    request = require("supertest"),
    http = require("http"),
    clyde = require("clyde");


describe("cors", function() {

  var server;

  afterEach(function() {
    server.close();
  });


  it("should success applying cors headers", function(done) {
    var options = {
      port: 8888,
      logfile: path.join(__dirname, "..", "tmp", "clyde.log"),
      loglevel: "info",

      prefilters: [
        {
          id: "cors",
          path: path.join(__dirname, "../lib/index.js"),
          config: {}
        }
      ],

      providers: [
        {
          id: "id",
          context: "/provider",
          target: "http://server"
        }
      ]
    };

    // Create server with clyde's middleware options
    var middleware = clyde.createMiddleware(options);
    server = http.createServer(middleware);
    server.listen(options.port);

    // Make request which expects a provider not found error
    request("http://localhost:8888")
      .get("/foo")
      .expect("Access-Control-Allow-Origin", "*")
      .expect(404, done);

  });


});
