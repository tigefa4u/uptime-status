// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: 'https://sugeng.win/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm790396853-c2d1d26afd2f44d1a618d8e6',
    'm791376638-52a8903ec384bd0a816ed4d2',
    'm791376642-57b04feea3b58483cfdc83ac',
    'm790719892-f80bdfbaf3eedc130ef33527',
    'm786787158-3607791f31052eb330c0d36e',
    'm790514708-758d7d86a6a34abf2808687f',
    'm791376600-96dd5a4b69f21fa412448001',
    'm791178160-c90ee4c874eb09886b9fbbab',
    'm791178163-966ebbe9186ca6420d65a1c1',
    'm790417318-8d895849b5c5e92c930dfc17',
    'm791178179-51fe9021ef475d3a9416d7c8',
    'm790916285-59db2084776ecc66610180b3',
    'm790940509-eeb0527b0d139544fb4154d4',
    'm790348925-e54d5857df35b8c3856d7e47',
    'm790294991-9b82a2ac3607cba5324d5cad',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Tigefa',
      url: 'https://tigefa.win/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/tigefa4u/uptime-status'
    },
    {
      text: 'Twitter',
      url: 'https://twitter.com/sugengtigefa'
    }
  ]
};
