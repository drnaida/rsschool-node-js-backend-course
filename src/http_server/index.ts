import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';

export const httpServer = http.createServer(function (req, res) {
    const __dirname = path.resolve(path.dirname(''));
    const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
    const content = fs.createReadStream(file_path);
    let the_content = '';
    content.on("data", (chunk) => {
        the_content += chunk;
    });
    content.on('close', () => {
        res.writeHead(200);
        res.end(the_content);
    })
    content.on('error', (err) => {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
    })
});
