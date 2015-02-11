## tooltips

* 版本：1.0.0
* 教程：[http://gallery.kissyui.com/tooltips/1.0.0/guide/index.html](http://gallery.kissyui.com/tooltips/1.0.0/guide/index.html)
* demo：[http://gallery.kissyui.com/tooltips/1.0.0/demo/index.html](http://gallery.kissyui.com/tooltips/1.0.0/demo/index.html)

## 综述

tooltips是一款轻量级的提示组件，配置简单，容易调用。支持click和hover两种事件。
![image](http://gtms02.alicdn.com/tps/i2/TB1DApgHXXXXXbOXXXXFvIM3VXX-434-180.png)

## 依赖的HTML结构
```html
<div data-width="300" data-height="100" data-placement="right"  data-event="click" id="J_TooltipsClickRight"  type="button">Tooltips Right </div>
```
**配置参数说明**：

- data-width:      tooltip的宽度。
- data-height:     tooltip的高度。
- data-placement:  tooltip显示的方位，可选值为：top, right, bottom, left。即支持上、右、下、左四个方位。
- data-event:      tooltip支持的诗句类型，可选值为: click, mouseover。即支持点击和鼠标hover两种事件。
- id:              钩子，这个必须进行指定

## 初始化组件

```javascript
    var tooltipsClickRight = new Tooltips({
        target: '#J_TooltipClickRight',
        tpl: '<div class="tooltip"><div class="tooltip-arrow J_Arrow"></div><div class="tooltip-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div></div>'
    });
```
-

## API说明

**外部可以调用的API**:

- render():   调用render()可以进行tooltip的渲染。
- show(msg):  传入你希望显示的信息，调用show()方法可以更改html里配置的提示内容。
- hide():     隐藏tooltip。


**私有API**:
- _setPosition():  设置tooltip的显示位置，采用相对定位。


## 调用Demo

```html
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">click 模式下的</h4>
            <p></p>
        </div><!-- panel-heading -->
        <div class="panel-body">

            <div class="tooltips-click">
                <button data-width="160" data-height="60" data-placement="right"  data-event="click" class="btn btn-default" id="J_TooltipsClickRight"  type="button">Tooltips Right </button>
                <button data-width="160" data-height="60" data-placement="left"   data-event="click" class="btn btn-default" id="J_TooltipsClickLeft"   type="button">Tooltips Left  </button>
                <button data-width="160" data-height="60" data-placement="top"    data-event="click" class="btn btn-default" id="J_TooltipsClickTop"    type="button">Tooltips Top   </button>
                <button data-width="160" data-height="60" data-placement="bottom" data-event="click" class="btn btn-default" id="J_TooltipsClickBottom" type="button">Tooltips Bottom</button>
            </div>

        </div>
    </div>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">hover 模式下的</h4>
            <p></p>
        </div><!-- panel-heading -->
        <div class="panel-body">

            <div class="tooltips-mouseover">
                <button data-width="160" data-height="60"  data-placement="right"  data-event="mouseover" class="btn btn-default" id="J_TooltipsHoverRight"  type="button">Tooltips Right </button>
                <button data-width="160" data-height="60"  data-placement="left"   data-event="mouseover" class="btn btn-default" id="J_TooltipsHoverLeft"   type="button">Tooltips Left  </button>
                <button data-width="160" data-height="60"  data-placement="top"    data-event="mouseover" class="btn btn-default" id="J_TooltipsHoverTop"    type="button">Tooltips Top   </button>
                <button data-width="160" data-height="60"  data-placement="bottom" data-event="mouseover" class="btn btn-default" id="J_TooltipsHoverBottom" type="button">Tooltips Bottom</button>
            </div>

        </div>
    </div>
```

```javascript
    S.use('kg/tooltips/1.0.0/index, kg/tooltips/1.0.0/index.css', function (S, Tooltips) {
        // 点击， 提示消息出现在右边
        var tooltipsClickRight = new Tooltips({
            target: '#J_TooltipsClickRight',
            tpl: '<div class="tooltip"><div class="tooltip-arrow J_Arrow"></div><div class="tooltip-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div></div>'
        });
        tooltipsClickRight.render();

        // 点击， 提示消息出现在右边
        var tooltipsClickLeft = new Tooltips({
            target: '#J_TooltipsClickLeft',
            tpl: '<div class="tooltip"><div class="tooltip-arrow J_Arrow"></div><div class="tooltip-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div></div>'
        });
        tooltipsClickLeft.render();

        var tooltipClickTop = new Tooltips({
            target: '#J_TooltipsClickTop',
            tpl: '<div class="tooltip"><div class="tooltip-arrow J_Arrow"></div><div class="tooltip-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div></div>'
        });
        tooltipsClickTop.render();

        var tooltipClickBottom = new Tooltips({
            target: '#J_TooltipsClickBottom',
            tpl: '<div class="tooltip"><div class="tooltip-arrow J_Arrow"></div><div class="tooltip-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div></div>'
        });
        tooltipsClickBottom.render();

        var tooltipHoverRight = new Tooltips({
            target: '#J_TooltipsHoverRight',
            tpl: '<div class="tooltip"><div class="tooltip-arrow J_Arrow"></div><div class="tooltip-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div></div>'
        });
        tooltipsHoverRight.render();

        var tooltipHoverLeft = new Tooltips({
            target: '#J_TooltipsHoverLeft',
            tpl: '<div class="tooltip"><div class="tooltip-arrow J_Arrow"></div><div class="tooltip-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div></div>'
        });
        tooltipsHoverLeft.render();

        var tooltipHoverTop = new Tooltips({
            target: '#J_TooltipsHoverTop',
            tpl: '<div class="tooltip"><div class="tooltip-arrow J_Arrow"></div><div class="tooltip-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div></div>'
        });
        tooltipsHoverTop.render();

        var tooltipHoverBottom = new Tooltips({
            target: '#J_TooltipsHoverBottom',
            tpl: '<div class="tooltip"><div class="tooltip-arrow J_Arrow"></div><div class="tooltip-content">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div></div>'
        });
        tooltipsHoverBottom.render();
    })
```

## 关于issue
如果有更好的建议，欢迎随时拍砖，帮助我们一起完善VC组件。

## changelog

### V1.0.0

    [!] 完成基本功能。
        使用缓存，如果页面上已经存在tooltip，则不进行重复创建
        允许创建tooltip arrow
        美化tooltip，支持用户自己编写skin



