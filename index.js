const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/json");
  const method = request.method;
  if (method === "GET") {
    response.end("Meu method é GET");
  }
  if (method === "GET") {
    response.end("Meu method é GET");
  }
  if (method === "POST") {
    response.end("Meu method é POST");
  }
  if (method === "DELETE") {
    response.end("Meu method é DELETE");
  }
  if (method === "PATCH") {
    response.end("Meu method é PATCH");
  }
});

server.listen(4000, () => {
  console.log("Servidor rodando piazada!");
});
