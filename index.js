const http = require('http');
const kelp = require('kelp');
const send = require('kelp-send');
const body = require('kelp-body');
const EventEmitter = require('events');

class XiaoAI extends EventEmitter {
  constructor(options){
    super();
    this.app = kelp();
    this.server = http.createServer(this.app);
    Object.assign(this, { 
      port: 6789
    }, options);
    this.app.use(send);
    this.app.use(body);
    this.app.use((req, res) => {
      const request = new XiaoAI.Request(req.body);
      console.log(req.headers['Authorization'], request);
      res.send(request);
    });
  }
  start(fn){
    const { port } = this;
    return this.server.listen(port, fn);
  }
}

XiaoAI.Request = require('./request');
XiaoAI.Response = require('./response');

module.exports = XiaoAI;