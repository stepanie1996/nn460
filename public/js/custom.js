// 这里编写自定义js脚本；将被静态引入到页面中
// pages/_app.js
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        document.title = 'QAQ别走好吗...';
    } 
    else {
        document.title = 'Hate_fish🐟的鱼缸';
    }
});
// lib/live2d-widget-config.js
window.live2d_settings = {
  // other settings
  dialog: {
    enable: true, // 是否开启对话框
    hitokoto: false, // 是否使用一言API获取随机对话
    script: {
      // 自定义对话脚本
      'load': [ // 网页加载时的对话
        '欢迎来到我的博客' // 对话内容
      ],
      'tap body': [ // 鼠标点击身体时的对话
        '不要乱摸我啦', // 对话内容
        '你是不是喜欢我呀' // 对话内容
      ],
      'tap face': [ // 鼠标点击脸部时的对话
        '你怎么敢打我', // 对话内容
        '你想亲我吗' // 对话内容
      ],
      'hover': [ // 鼠标悬停时的对话
        '你在看什么呢', // 对话内容
        '你好呀' // 对话内容
      ],
      'skin': [ // 切换皮肤时的对话
        '你喜欢这个样子吗', // 对话内容
        '我变美了吗' // 对话内容
      ],
      'home': [ // 回到主页时的对话
        '欢迎回来', // 对话内容
        '你去哪里了呀' // 对话内容
      ],
      'close': [ // 关闭按钮点击时的对话
        '不要走啊', // 对话内容
        '再见了' // 对话内容
      ]
    }
  },
  // other settings
}
