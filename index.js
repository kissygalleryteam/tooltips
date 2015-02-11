var $ = require('node').all;
var Base = require('base');
var Event = require('event');

var Tooltips = Base.extend({
    initializer:function() {

    },
    render: function() {
        var self = this;
        var $target = self.get('target');
        var tpl = self.get('tpl');
        var id = $target.attr('id');
        var placement = $target.attr('data-placement');
        var eventType = $target.attr('data-event');
        var content = $target.attr('data-content');
        var width = $target.attr('data-width');
        var height = $target.attr('data-height');

        //代表是否是第一次点击或者hover
        var flag = true;
        // 使用全局的guid
        var tooltipId = S.guid('tooltip');
        var tooltipSelector = '#' + tooltipId;
        var $tpl = $(tpl);
        $tpl.one('.tooltip-content').html(content);
        //对两种事件情况进行处理
        if(eventType === 'click') {
            $target.on('click', function() {
                if(flag) {
                    $('body').append($tpl);
                }
                $tpl.attr('id', tooltipId);
                var $tooltip = $(tooltipSelector);
                //存放$tooltip，供外部调用
                self.set('$tooltip', $tooltip);
                $tooltip.css({
                    'width': width,
                    'height': height
                });
                if(flag) {
                    $tooltip.css('display', 'none');
                    flag = false;
                }
                if($tooltip.css('display') === 'none') {
                    self.show();
                } else {
                    self.hide();
                }
                self._setPosition($tooltip, placement);
            });
        }
        if(eventType === 'mouseover') {
            $target.on('mouseenter', function() {
                if(flag) {
                    $('body').append($tpl);
                    flag = false;
                }
                $tpl.attr('id', tooltipId);
                var $tooltip = $(tooltipSelector);
                //存放$tooltip，供外部调用
                self.set('$tooltip', $tooltip);
                $tooltip.css({
                    'width': width,
                    'height': height
                });
                self.show(content);
                self._setPosition($tooltip, placement);
            });

            $target.on('mouseleave', function() {
                self.hide();
            });
        }
    },
    show:function(){
        self = this;
        var $tooltip = self.get('$tooltip');
        $tooltip.css('display', 'block');
    },
    hide: function(){
        self = this;
        var $tooltip = self.get('$tooltip');
        $tooltip.css('display', 'none');
    },
    _setPosition: function($tooltip, placement){
        var self = this;
        var $target = self.get('target');
        var targetWidth = $target.outerWidth();
        var targetHeight = $target.outerHeight();
        var targetPositionLeft = $target.offset().left;
        var targetPositionTop = $target.offset().top;
        var tooltipWidth = $tooltip.outerWidth();
        var tooltipHeight = $tooltip.outerHeight();
        var tooltipPositionLeft;
        var tooltipPositionTop;
        var $arrow = $tooltip.one('.J_Arrow');
        var arrowBorderWidth = parseInt($arrow.css('border-width'));
        var arrowLeft;
        var arrowTop;
        switch(placement) {
            case "top":
                tooltipPositionLeft = targetPositionLeft - (tooltipWidth - targetWidth) / 2;
                tooltipPositionTop = targetPositionTop - tooltipHeight - arrowBorderWidth;
                $tooltip.css({
                    'position': 'absolute',
                    'left': tooltipPositionLeft,
                    'top': tooltipPositionTop
                });
                arrowLeft = '50%';
                arrowTop = tooltipHeight + arrowBorderWidth;
                $arrow.css({
                    top: arrowTop - 2,
                    left: arrowLeft,
                    'border-bottom-width': 0,
                    'border-top-color': '#fff',
                    'margin-left': - arrowBorderWidth
                });
                break;
            case "bottom":
                tooltipPositionLeft = targetPositionLeft - (tooltipWidth - targetWidth) / 2;
                tooltipPositionTop = targetPositionTop + targetHeight + arrowBorderWidth;
                $tooltip.css({
                    'position': 'absolute',
                    'left': tooltipPositionLeft,
                    'top': tooltipPositionTop
                });
                arrowLeft = '50%';
                arrowTop = -arrowBorderWidth + arrowBorderWidth;
                $arrow.css({
                    top: arrowTop,
                    left: arrowLeft,
                    'border-top-width': 0,
                    'border-bottom-color': '#fff',
                    'margin-left': - arrowBorderWidth
                });
                break;
            case "left":
                tooltipPositionLeft = targetPositionLeft - tooltipWidth - arrowBorderWidth;
                tooltipPositionTop = targetPositionTop - (tooltipHeight - targetHeight) / 2;
                $tooltip.css({
                    'position': 'absolute',
                    'left': tooltipPositionLeft,
                    'top': tooltipPositionTop
                });
                arrowTop = '50%';
                arrowLeft = tooltipWidth;
                $arrow.css({
                    top: arrowTop,
                    left: arrowLeft - 2,
                    'border-right-width': 0,
                    'border-left-color': '#fff'
                });
                break;
            case "right":
                tooltipPositionLeft = targetPositionLeft + targetWidth + arrowBorderWidth;
                tooltipPositionTop = targetPositionTop - (tooltipHeight - targetHeight) / 2;
                $tooltip.css({
                    'position': 'absolute',
                    'left': tooltipPositionLeft,
                    'top': tooltipPositionTop
                });
                arrowTop = '50%';
                arrowLeft = - arrowBorderWidth;
                $arrow.css({
                    top: arrowTop,
                    left: arrowLeft,
                    'border-left-width': 0,
                    'border-right-color': '#fff'
                });
                break;
        }
    }
},{
    ATTRS:{
        //目标元素，由外部传入
        target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        },
        //tooltip增加的样式名称，由外部传入
        className: {
            value: '',
            getter: function(v) {
                return v;
            }
        },
        // tooltip的模板
        tpl: {
          value: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-content"></div></div>'
        },
        // tooltip的content
        content: {
            value: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
        },
        //存放tooltip
        $tooltip: {
            value: ''
        }
    }
});

module.exports = Tooltips;



