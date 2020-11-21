const Koa = require('koa');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const helmet = require("koa-helmet");
const app = new Koa();

app.use(logger());
app.use(helmet());
app.use(koaBody());

const vgmdbRelayRouter = require('./routes/vgmdbRelayRouter');
app.use(vgmdbRelayRouter.routes());

const port = process.env.PORT || 3000;
app.listen(port);
console.log('Koa app listen on port ' + port);
