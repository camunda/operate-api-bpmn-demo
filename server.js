const http = require("http");
const request = require("request");

const server = http.createServer((req, res) => {
  request.get(
    {
      url: `http://localhost:8080${req.url}`,
      headers: {
        /*
         * Replace COOKIE_VALUE with a valid OPERATE-SESSION cookie.
         * See https://docs.camunda.io/docs/apis-clients/operate-api/#authentication-for-self-managed-cluster for more details
         */
        Cookie: "OPERATE-SESSION=COOKIE_VALUE",
      },
    },
    (error, response, body) => {
      if (error) {
        console.error(error);
        res.statusCode = 500;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/json");
        res.end("Error: Could not get data from API");
      } else {
        res.setHeader("Content-Type", response.headers["content-type"]);
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.end(body);
      }
    },
  );
});

server.listen(3030, () => {
  console.log("Proxy server listening on port 3030");
});
