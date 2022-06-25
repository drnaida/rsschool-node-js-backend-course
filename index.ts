import Jimp from 'jimp';
import {httpServer} from './src/http_server/index';
import { WebSocketServer, createWebSocketStream } from 'ws';
import {parseInputCommand} from './src/utils';
import {mouse_position} from './src/robotjsFunctions/mouse_position';
import { makeScreenshot } from './src/robotjsFunctions/screenshot';

const HTTP_PORT = 3000;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
  ws.isAlive = true;
  const wsStream = createWebSocketStream(ws, { encoding: 'utf-8', decodeStrings: false });
  wsStream.on('data', (data) => {
    console.log('received: %s', data);
    if (data == 'mouse_position') {
      const {currX, currY} = mouse_position();
      console.log(currX, currY);
      wsStream.write(`mouse_position ${currX},${currY}`);
    } else if (data == 'prnt_scrn') {
      const jimg = makeScreenshot();
      jimg.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        wsStream.write(`prnt_scrn ${buffer.toString('base64')}`);
      });
  } else {
      const command = data.toString().split(' ')[0];
      parseInputCommand(data);
      wsStream.write(command);
    }
  });
});
process.on('SIGINT', () => {
  wss.clients.forEach((ws: any) => {
    if (ws.isAlive) ws.terminate();
  });
  wss.close(() => {
    console.log('\nStop web socket server.');
  });
  process.nextTick(() => {
      process.exit();
  });
});
