## Description

This is a demo that uses Operate API to render a Bpmn diagram for a specified process definition, along with highlighting processed sequence flows and displaying process instance statistics (in this example, incidents).

## Getting Started

Clone the project

```bash
git clone https://github.com/camunda/operate-api-bpmn-demo.git
cd operate-api-bpmn-demo
```

Install the required packages

```bash
npm install
```

Change the Operate API url in api.js file
if necessary from `http://localhost:8080` to your server URL, and use your active OPERATE-SESSION cookie value.

```js
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

```

Start running the proxy server

```bash
node server.js
```

Run index.html in your browser and see your process!

Example:

![color-sequence-flows](https://user-images.githubusercontent.com/45518829/227175198-1e383a38-5f97-4fa1-aaa9-2a11c6b42486.png)
