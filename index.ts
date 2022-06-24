import Jimp from 'jimp';
import {httpServer} from './src/http_server/index';
import { WebSocketServer } from 'ws';
import {parseInputCommand} from './src/utils';
import {mouse_position} from './src/robotjsFunctions/mouse_position';
import { makeScreenshot } from './src/robotjsFunctions/screenshot';

const HTTP_PORT = 3000;

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    if (data == 'mouse_position') {
      const {currX, currY} = mouse_position();
      console.log(currX, currY);
      ws.send(`mouse_position ${currX} px,${currY} px`);
    } else if (data == 'prnt_scrn') {
      const jimg = makeScreenshot();
      jimg.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        ws.send(`prnt_scrn ${buffer.toString('base64')}`);
      });
  } else {
      const command = data.toString().split(' ')[0];
      parseInputCommand(data);
      ws.send(command);
    }
    
  });
});

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

