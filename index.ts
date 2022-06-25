import Jimp from 'jimp';
import {httpServer} from './src/http_server/index';
import { WebSocketServer, createWebSocketStream } from 'ws';
import {parseInputCommand} from './src/utils';
import {mouse_position} from './src/robotjsFunctions/mouse_position';
import { makeScreenshot } from './src/robotjsFunctions/screenshot';

const HTTP_PORT: number = 3000;
const ws_port: number = 8080;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
const wss = new WebSocketServer({ port: ws_port });
wss.on('listening', () => {
  console.log(`Websocket connection started, listening on port: ${ws_port}. Websocket parameters (you will see them when you open localhost:3000):`)
})
wss.on('headers', (data) => {
  console.log(data);
});
wss.on('connection', (ws) => {
  ws.isAlive = true;
  const wsStream = createWebSocketStream(ws, { encoding: 'utf-8', decodeStrings: false });
  wsStream.on('data', (data) => {
    if (data == 'mouse_position') {
      try {
        console.log(`Command: mouse_position`);
        const {currX, currY} = mouse_position();
        wsStream.write(`mouse_position ${currX},${currY}\0`, () => {
          console.log(`Status: success`);
        });
      } catch (err) {
        console.log('Status: failed');
      }
      
    } else if (data == 'prnt_scrn') {
      try {
        console.log(`Command: prnt_scrn`);
        const jimg = makeScreenshot();
        jimg.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
          wsStream.write(`prnt_scrn ${buffer.toString('base64')}\0`, () => {
            console.log(`Status: success`);
          });
        });
      } catch (err) {
        console.log('Status: failed');
      }
      
  } else {
    try {
      const command = data.toString().split(' ')[0];
      console.log(`Command: ${data.toString()}`);
      parseInputCommand(data);
      wsStream.write(`${command}\0`, () => {
        console.log(`Status: success`);
      });
    } catch (err) {
      console.log('Status: failed');
    }
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
