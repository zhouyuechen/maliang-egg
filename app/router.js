'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.psd.psdIndex);
  router.post('/pa', controller.psd.psdAnalysis);
  //router.get('/user/:id', controller.user.page);
  // router.post('/admin', isAdmin, controller.admin);
  // router.post('/user', isLoginUser, hasAdminPermission, controller.user.create);
};
