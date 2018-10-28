require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const api = require('./api');

/* 
   비구조화 할당 문법을 사용하여 process.env 파일 내부 값에 대한 레퍼런스를 만들고
   기본 값이 없으면 4000을 사용하도록 작성
*/
const {
    PORT: port = 4000,
    MONGO_URI: mongoURI
} = process.env;

// mongoose를 이용하여 서버에 데이터베이스 연결
mongoose.Promise = global.Promise; // Node의 Promise를 사용하도록 설정
mongoose.connect(mongoURI).then(() => {
    console.log('connected to mongodb');
}).catch((e) => {
    console.error(e);
});

const app = new Koa();
const router = new Router();

/* 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우트 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());
*/

/*
app.use((ctx) => {
    ctx.body = 'hello world';
});
*/
    
app.listen(port, () => {
    console.log('listening to port 4000');
});