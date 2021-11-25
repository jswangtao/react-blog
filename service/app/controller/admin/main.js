/*
 * @Author: wangtao
 * @Date: 2021-11-15 16:37:47
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-25 22:10:04
 * @Description: file content
 */
'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    // 首页的文章列表数据
    this.ctx.body = 'hi api';
  }

  // 判断用户名密码是否正确
  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql = `SELECT userName FROM admin_user WHERE userName='${userName}' AND password='${password}'`;
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      // 登录成功，进行session缓存
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = { data: '登录成功', openId };
    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }

}

module.exports = MainController;