'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../npm/remax/esm/API.js');
require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/Platform.js');
require('../npm/remax/esm/createHostComponent.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/createNativeComponent.js');
var index$1 = require('../npm/remax/esm/index.js');
var View = require('../npm/remax/esm/adapters/alipay/components/View.js');
require('../npm/remax/esm/adapters/alipay/components/ScrollView.js');
require('../npm/remax/esm/adapters/alipay/components/Swiper.js');
require('../npm/remax/esm/adapters/alipay/components/SwiperItem.js');
require('../npm/remax/esm/adapters/alipay/components/MovableView.js');
require('../npm/remax/esm/adapters/alipay/components/MovableArea.js');
require('../npm/remax/esm/adapters/alipay/components/CoverView.js');
require('../npm/remax/esm/adapters/alipay/components/CoverImage.js');
require('../npm/remax/esm/adapters/alipay/components/Icon.js');
require('../npm/remax/esm/adapters/alipay/components/Text.js');
require('../npm/remax/esm/adapters/alipay/components/RichText.js');
require('../npm/remax/esm/adapters/alipay/components/Progress.js');
require('../npm/remax/esm/adapters/alipay/components/Button.js');
require('../npm/remax/esm/adapters/alipay/components/CheckboxGroup.js');
require('../npm/remax/esm/adapters/alipay/components/Checkbox.js');
require('../npm/remax/esm/adapters/alipay/components/Form.js');
require('../npm/remax/esm/adapters/alipay/components/Input.js');
require('../npm/remax/esm/adapters/alipay/components/Label.js');
require('../npm/remax/esm/adapters/alipay/components/Picker.js');
require('../npm/remax/esm/adapters/alipay/components/PickerView.js');
require('../npm/remax/esm/adapters/alipay/components/PickerViewColumn.js');
require('../npm/remax/esm/adapters/alipay/components/RadioGroup.js');
require('../npm/remax/esm/adapters/alipay/components/Radio.js');
require('../npm/remax/esm/adapters/alipay/components/Slider.js');
require('../npm/remax/esm/adapters/alipay/components/Switch.js');
require('../npm/remax/esm/adapters/alipay/components/TextArea.js');
require('../npm/remax/esm/adapters/alipay/components/Navigator.js');
require('../npm/remax/esm/adapters/alipay/components/Image.js');
require('../npm/remax/esm/adapters/alipay/components/Map.js');
require('../npm/remax/esm/adapters/alipay/components/Canvas.js');
require('../npm/remax/esm/adapters/alipay/components/WebView.js');
require('../npm/remax/esm/adapters/alipay/components/Lifestyle.js');
require('../npm/remax/esm/adapters/alipay/components/ContactButton.js');
require('../npm/remax/esm/adapters/alipay/components/Video.js');
require('../npm/remax/esm/adapters/alipay/api.js');

index$1.unstable_batchedUpdates(function () {});

var _page = function _page() {
  return React.createElement(View.default, null);
};

var index = Page(createPageConfig.default(_page));

exports.default = index;
