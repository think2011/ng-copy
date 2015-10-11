# ng-copy
对ZeroClipboard的angular封装，不同的是使用简单以及支持HTML复制

# 第一步
引入文件：

```html
<script src="zeroclipboard/ZeroClipboard.min.js"></script>
<script src="ng-copy.js"></script>
```

并注入到对应的module

```js
angular.module('app', ['ng-copy']);
```

# 第二步

```html
<button copy="model" type="button">复制</button>
```

点击这个按钮后，粘贴就有对应的内容了。

# 其他说明

* 第二步里的 `model` 就是你自己命名的`$scope.model`，支持html。
* 本repo自带了ZeroClipboard，不过理论上只要API不变，支持任何版本的ZeroClipboard。
