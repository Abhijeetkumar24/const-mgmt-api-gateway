import { createProxyMiddleware } from "http-proxy-middleware";
import express from 'express';

require('dotenv').config()

const app = express();


// define routes and ports
const routes = {
    '/admin': 'http://localhost:5001',
    '/user': 'http://localhost:5002'
}


// reate a proxy fro each routes
for( const route in routes ){
    const target = routes[route]                                                  // route: /orders , target: http://localhost:3001
    app.use(route, createProxyMiddleware({target}));                              //   createProxyMiddleware allows to forward incoming HTTP requests to a different server or endpoint,
}

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Api gateway started on port ${port}`);
})