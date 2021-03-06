/// <reference path="../typings/tsd.d.ts" />

import * as express from 'express';
import Playlist from './playlist';

var app: express.Express = express();
var newPlaylist: Playlist = new Playlist();

app.use((req, res, next) => {
    var data = '';
    req.setEncoding('utf8');
    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', () => {
        req.body = data;
        next();
    });
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/playlist", (req, res) => {
    res.send(JSON.stringify(newPlaylist.all));
});

app.post("/addsong", (req, res) => {
    newPlaylist.addSong(req.body);
    res.send(JSON.stringify(newPlaylist.all));
});

app.post("/removesong", (req, res) => {
    var toRemove: string = req.body;
    var removed;
    var removeIndex = parseInt(toRemove);
    if (removeIndex) {
        removed = newPlaylist.removeSong(removeIndex);
    } else {
        removed = newPlaylist.removeSong();
    }
    
    res.send(JSON.stringify(removed));
});

app.get("/currentsong", (req, res) => {
    res.send(JSON.stringify(newPlaylist.current));
})

app.get("/nextsong", (req, res) => {
    res.send(JSON.stringify(newPlaylist.next));
});

var server = app.listen(3000, "localhost", () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('CollabPlaylist service listening at http://%s:%s', host, port);
});