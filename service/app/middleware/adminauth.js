/*
 * @Author: wangtao
 * @Date: 2021-11-25 22:14:53
 * @LastEditors: æ±ªæ»
 * @LastEditTime: 2021-12-02 21:55:09
 * @Description: file content
 */

'use strict';

module.exports = options => {
  return async function adminauth(ctx, next) {
    console.log('ðððwimi======>>>middleware', ctx.session.openId);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = { data: 'æ²¡æç»å½' };
    }
  };
};
