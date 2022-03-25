/* 
const fs = require('fs');
const path = require('path');

const serverFun = (req, res) => {

	const errorHTML = `Majomkolbasz`;
    
	let filePath = path.resolve(__dirname + '/../frontend' + req.url);
	
	let filePath = path.resolve(`${__dirname}/../frontend${req.url}`);
    
	fs.access(filePath, fs.constants.R_OK, (err) => {
	if(err){
		res.statusCode = 404;
		res.end(errorHTML);
	}else{
		if(fs.statSync(filePath).isDirectory()) {
			filePath += '/index.html';
		}
		fs.readFile(filePath, (err, data) => {
			if(err) {
				res.statusCode = 500;
				res.end(errorHTML);
			} else {
				console.log("Az index.html kiszolgálódott")
				res.end(data);
			}
		});
	}
	});
};

const server = http.createServer(serverFun);

const port = 9000;
const ip = "127.0.0.1";
const listenFun = () => {
    const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`);
		console.log(`1st of April new Meshuggah album release`)
};


server.listen(port, ip, listenFun);
 */

const express = require("express");
const path = require("path");
const app = express();

app.get("/", (_, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
});

app.use("/kismacska", express.static(`${__dirname}/../frontend/pub`));

app.listen(9000, () => console.log("http://127.0.0.1:9000"));
