import * as path from 'path';
import { getAlias } from 'remax/cjs/propsAlias';

export function getNativePropName(props: any, isNative = false, type?: string) {
  return getAlias(props, isNative, 'alipay', type);
}

export const name = 'alipay';

export const extensions = {
  template: {
    extension: '.axml',
    tag: 'import',
    src: 'src',
  },
  style: '.acss',
  jsHelper: {
    extension: '.sjs',
    tag: 'import-sjs',
    src: 'from',
  },
  include: {
    tag: 'include',
    src: 'src',
  },
};

const templateBaseDir = path.join(__dirname, '../../../../templates');

export const templates = {
  component: path.join(templateBaseDir, 'alipay/component.ejs'),
  page: path.join(templateBaseDir, 'alipay/page.ejs'),
  jsHelper: path.join(templateBaseDir, 'helper.js'),
};

export const moduleFormat = 'cjs';

export function getIcons(config: any) {
  if (!config.tabBar) {
    return [];
  }

  const tabs: Array<{ icon: string; activeIcon: string }> = config.tabBar.items;

  return (tabs || []).reduce<string[]>(
    (images, tab) => [...images, tab.icon, tab.activeIcon],
    []
  );
}
