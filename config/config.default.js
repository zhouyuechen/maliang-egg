/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1556250302504_7337';

  // add your middleware config here
  config.middleware = ['auth'];

  exports.multipart = {
    mode: 'file',
  };
  config.view ={
    mapping: {'.html': 'ejs'} //左边写成.html后缀，会自动渲染.html文件
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

  };




  return {
    ...config,
    ...userConfig,
  };
};
