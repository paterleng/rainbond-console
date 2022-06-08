-- 5.3.3 - 5.4.0 sql
ALTER TABLE service_group ADD COLUMN `logo` VARCHAR(255) DEFAULT '';

-- 5.4.1 - 5.5.0 sql
ALTER TABLE tenant_info ADD COLUMN `namespace` VARCHAR(33) unique;
update tenant_info set namespace=tenant_id;
ALTER TABLE service_group ADD COLUMN `k8s_app` VARCHAR(64);
ALTER TABLE tenant_service ADD COLUMN `k8s_component_name` VARCHAR(100);
update tenant_service set k8s_component_name=service_alias;
ALTER TABLE tenant_service_delete ADD COLUMN `k8s_component_name` VARCHAR(100);

-- 5.5.0 - 5.5.1 sql
ALTER TABLE `service_domain` ADD COLUMN `path_rewrite` bool DEFAULT false NOT NULL;
ALTER TABLE `service_domain` ADD COLUMN `rewrites` longtext NOT NULL;

-- 5.6.0 - 5.7.0 sql
ALTER TABLE `rainbond_center_app_version` ADD COLUMN `is_plugin` bool DEFAULT false NOT NULL;
ALTER TABLE `plugin_config_items` MODIFY `attr_name` varchar(64) NOT NULL;
ALTER TABLE `plugin_config_items` MODIFY `attr_alt_value` LONGTEXT NOT NULL;
ALTER TABLE `plugin_config_items` MODIFY `attr_default_value` LONGTEXT;
ALTER TABLE `service_plugin_config_var` MODIFY `attrs` LONGTEXT NOT NULL;
