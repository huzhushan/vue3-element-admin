const Layout = () => import('@/layout/index.vue')
const devices = () => import('@/views/product/devices.vue')
const products = () => import('@/views/product/products.vue')
const mqtt = () => import('@/views/product/mqtt.vue')

export default [
    {
      path: '/product',
      component: Layout,
      name: 'product',
      meta: {
        title: 'menu.product',
      },
      icon: 'Cpu',
      children: [
        {
          path: '/products',
          name: 'productsList',
          component: products,
          meta: {
            title: 'menu.products',
          },
          hidden: false
        },
        {
            path: '/devices',
            name: 'devicesList',
            component: devices,
            meta: {
              title: 'menu.devices',
            },
            hidden: false
        },
        {
            path: '/mqtt',
            name: 'mqtt',
            component: mqtt,
            meta: {
              title: 'menu.mqtt',
            },
            hidden: false
        },
      ],
    },
  ]