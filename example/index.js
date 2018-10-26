const XiaoAI = require('..');

const xiaoai = new XiaoAI();

const response = new XiaoAI.Response()
  .speak('hello')
  .display('greeting')
  .event('mediaplayer.playbacknearlyfinished')
  .directive()
  .directive()
  .action()
  .wait()

console.log(response);

xiaoai.start();