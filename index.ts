import Jimp from 'jimp';
import {httpServer} from './src/http_server/index';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';
import {parseInputCommand} from './src/utils';
import { parse } from 'dotenv';

const HTTP_PORT = 3000;

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    parseInputCommand(data);
  });

  ws.send('something');
});

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

