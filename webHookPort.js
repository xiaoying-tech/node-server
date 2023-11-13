var http = require("http");

// github-webhook-handler 的绝对路径
var createHandler = require("/root/.nvm/versions/node/v14.4.0/lib/node_modules/github-webhook-handler");
var handler = createHandler({ path: "/", secret: "blog-hugo-lvhaohua" });

function run_cmd(cmd, args, callback) {
  var spawn = require("child_process").spawn;
  var child = spawn(cmd, args);
  var resp = "";

  child.stdout.on("data", function (buffer) {
    resp += buffer.toString();
  });
  child.stdout.on("end", function () {
    callback(resp);
  });
}

handler.on("error", function (err) {
  console.error("Error:", err.message);
});

handler.on("push", function (event) {
  console.log(
    "Received a push event for %s to %s",
    event.payload.repository.name,
    event.payload.ref
  );
  run_cmd(
    "sh",
    ["./publish.sh", event.payload.repository.name],
    function (text) {
      console.log(text);
    }
  );
});

http
  .createServer(function (req, res) {
    res.write("server is running...");
    handler(req, res, function (err) {
      res.statusCode = 404;
      res.end("no such location");
    });
  })
  .listen(10001);
