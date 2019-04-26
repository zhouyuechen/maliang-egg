'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('file-system');
//const  pa=require('../public/jiexi.js');
class PsdController extends Controller {
    //渲染首页
    async psdIndex() {
        const { ctx } = this;

       await ctx.render('psd.html',{
           bb:999
       });
    }
    //解析的接口
    async psdAnalysis() {
        const { ctx } = this;
        //console.log(ctx.query) 获取查询字符串
        const file = ctx.request.files[0];
        const name = 'egg-multipart-test/' + path.basename(file.filename);
        console.log(file)
        // let result;
        // try {
        //     // 处理文件，比如上传到云端
        //     result = await ctx.oss.put(name, file.filepath);
        // } finally {
        //     // 需要删除临时文件
        //     await fs.unlink(file.filepath);
        // }
        // ctx.body = {
        //     url: result.url,
        //     // 获取所有的字段值
        //     requestBody: ctx.request.body,
        // };
         ctx.body = {
            file
        };

    }
}

module.exports = PsdController;
