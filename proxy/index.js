const { createProxyMiddleware } = require("http-proxy-middleware");

function onProxyRes(proxyRes, req, res) {
  proxyRes.headers["x-added"] = "foobar"; // add new header to response
  delete proxyRes.headers["access-token"]; // remove header from response
}

function getProxified() {
  const options = {
    target: "http://localhost:3000", // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
      "^/api/old-path": "/api/new-path", // rewrite path
      "^/api/remove/path": "/path", // remove base path
    },
    router: {
      // when request.headers.host == 'dev.localhost:3000',
      // override target 'http://www.example.org' to 'http://localhost:8000'
      "dev.localhost:3000": "http://localhost:8000",
    },
    onProxyRes,
  };

  // create the proxy (without context)
  const proxified = createProxyMiddleware(options);

  return proxified;
}

module.exports = getProxified;
