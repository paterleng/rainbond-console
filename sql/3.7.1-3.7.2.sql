
-- 分享应用时给APP添加详情信息

ALTER TABLE `rainbond_center_app` ADD COLUMN `details` longtext NULL;

-- 云市插件表添加详情信息字段

ALTER TABLE `rainbond_center_plugin` ADD COLUMN `details` longtext NULL;

-- 添加判断更新字段

ALTER TABLE rainbond_center_app ADD `upgrade_time` varchar(30) DEFAULT "";

