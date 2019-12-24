import * as path from 'path';
import { getAlias } from 'remax/cjs/propsAlias';

export function getNativePropName(props: any, isNative = false, type?: string) {
  return getAlias(props, isNative, 'wechat', type);
}

export const name = 'wechat';

export const extensions = {
  template: {
    extension: '.wxml',
    tag: 'import',
    src: 'src',
  },
  style: '.wxss',
  jsHelper: {
    extension: '.wxs',
    tag: 'wxs',
    src: 'src',
  },
  include: {
    tag: 'include',
    src: 'src',
  },
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  base: path.join(templateBaseDir, 'wechat/base.ejs'),
  component: path.join(templateBaseDir, 'wechat/component.ejs'),
  page: path.join(templateBaseDir, 'wechat/page.ejs'),
  jsHelper: path.join(templateBaseDir, 'helper.js'),
};

export const moduleFormat = 'cjs';

export function getIcons(config: any) {
  if (!config.tabBar) {
    return [];
  }

  const tabs: Array<{ iconPath: string; selectedIconPath: string }> =
    config.tabBar.list;

  return (tabs || []).reduce<string[]>(
    (images, tab) => [...images, tab.iconPath, tab.selectedIconPath],
    []
  );
}
