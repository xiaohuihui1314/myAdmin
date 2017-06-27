import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: function (resolve) {
        require(['@/components/Login'], resolve);
      },
    }
    , {
      path: '/register',
      name: 'register',
      component: function (resolve) {
        require(['@/components/Register'], resolve);
      },
    }, {
      path: '/hello',
      name: 'hello',
      component: function (resolve) {
        require(['@/components/Hello'], resolve);
      },
    }
    , {
      path: '/upload',
      name: 'upload',
      component: function (resolve) {
        require(['@/components/Upload'], resolve);
      },
    }
    , {
      path: '/socket',
      name: 'socket',
      component: function (resolve) {
        require(['@/components/Socket'], resolve);
      },
    }
    , {
      path: '/address',
      name: 'address',
      component: function (resolve) {
        require(['@/components/Address'], resolve);
      },
    }
  ]
})
