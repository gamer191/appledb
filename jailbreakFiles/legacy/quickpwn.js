module.exports = {
  name: "QuickPwn",
  info: {
    wiki: {
      name: "theapplewiki.com/wiki/QuickPwn",
      url: "https://www.theapplewiki.com/wiki/QuickPwn",
      external: true
    },
    type: "Untethered",
    firmwares: ["2.0","2.2.1"],
    latestVer: "3.0 Beta 3",
    color: "#dc5f60",
    icon: "/assets/images/jb-icons/quickpwn.png",
  },
  compatibility: [
    {
      firmwares: [
        "5A347", // 2.0
        "5B108", // 2.0.1
        "5C1", // 2.0.2
        "5F136", // 2.1
        "5F137", // 2.1
        "5G77", // 2.2
        "5H11", // 2.2.1
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPhone1,2", // iPhone 3G
        "iPod1,1", // iPod touch
      ]
    },
  ]
}