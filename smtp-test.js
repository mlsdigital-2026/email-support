const tls = require("tls");

const socket = tls.connect({
  host: "67.223.118.117",
  port: 465,
  servername: "sbcmailme.com",
});

socket.setTimeout(10000);

socket.on("secureConnect", () => {
  console.log("✅ TLS CONNECTED");
  console.log(socket.getPeerCertificate());
  socket.end();
});

socket.on("timeout", () => {
  console.log("❌ TIMEOUT");
  socket.destroy();
});

socket.on("error", (err) => {
  console.error(err);
});