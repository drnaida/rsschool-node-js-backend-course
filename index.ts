import Jimp from 'jimp';
import {httpServer} from './src/http_server/index';
import { WebSocketServer } from 'ws';
import {parseInputCommand} from './src/utils';
import {mouse_position} from './src/robotjsFunctions/mouse_position';
import { makeScreenshot } from './src/robotjsFunctions/screenshot';
import robot from 'robotjs';

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
      const {currX, currY} = mouse_position();
      let size = 200;
      const centerX = currX - size/2;
      const centerY = currY - size/2;
      let rimg = robot.screen.capture(centerX, centerY, size, size);
      let jimg = new Jimp(size, size);
      for (var x=0; x<size; x++) {
          for (var y=0; y<size; y++) {
                  // hex is a string, rrggbb format
                  var hex = rimg.colorAt(x, y);
                  // Jimp expects an Int, with RGBA data,
                  // so add FF as 'full opaque' to RGB color
                  var num = parseInt(hex+"ff", 16)
                  // Set pixel manually
                  jimg.setPixelColor(num, x, y);
          }
      }
      jimg.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        console.log(buffer);
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

