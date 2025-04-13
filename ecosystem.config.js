module.exports = {
  apps: [
    {
      name: "no-data",
      script: "./.output/server/index.mjs", //指定伺服器上的檔案
      instances: "max", //負載平衡模式下的 cpu 數量
      exec_mode: "cluster", //cpu 負載平衡模式
      port: "3000",
    },
  ],
};
