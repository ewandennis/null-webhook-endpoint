# null-webhook-endpoint
Receive and dump HTTP request bodies to stdout.  This service listens on port 3000 by default.

# Usage

To start the service: `node index.js`

If you have [jq](https://stedolan.github.io/jq/) to hand, you can prettify the output of incoming JSON requests like this: `node index.js | jq .`

Note: Node streams are buffered so don't be surprised if you don't immediately see small requests in your console.
