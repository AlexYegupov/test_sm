(function($) {

    $.fn.percentageLoader = function(options) {

        this.each(function() {
            var $this = $(this);
            //é…ç½®é¡¹
            var config = $.extend({}, $.fn.percentageLoader.defaultConfig, options);

            var val = parseInt($this.children(config.valElement).text()),
                init = true,
                speed = 200,
                w = parseInt($this.css('width'));
            h = parseInt($this.css('height'));
            rx = w / 2,
                ry = h / 2,
                r = rx - config.strokeWidth / 2,
                z = null,
                txt = null,
                dstop = null;

            var paper = Raphael(this, w, h);

            function minit() {
                //æž„é€ åœ†çŽ¯
                //è‡ªå®šä¹‰arcå±žæ€§ï¼Œä¼ å…¥è¿›åº¦å€¼80%ï¼Œæ€»ä»½æ•°100%ï¼ŒåŠå¾„80
                paper.customAttributes.arc = function(value, total, R) {
                    var alpha = 360 / total * value, //è§’åº¦
                        a = (90 - alpha) * Math.PI / 180, //å¼§åº¦
                        x = rx + R * Math.cos(a),
                        y = ry - R * Math.sin(a),
                        path;
                    if (total == value) {
                        path = [
                            ["M", rx, ry - R],
                            ["A", R, R, 0, 1, 1, rx - 0.01, ry - R]
                            //åŠé•¿è½´ï¼Œ
                            //åŠçŸ­è½´ï¼Œ
                            //xè½´ä¸Žæ°´å¹³çº¿å¤¹è§’
                            //1ä»£è¡¨å¤§è§’åº¦å¼§çº¿ï¼Œ0ä»£è¡¨å°è§’åº¦å¼§çº¿
                            //1ä»£è¡¨é¡ºæ—¶é’ˆç”»å¼§ï¼Œ0ä»£è¡¨é€†æ—¶é’ˆ
                            //ç»“æŸç‚¹çš„xï¼Œyåæ ‡
                        ];
                    } else {
                        path = [
                            ["M", rx, ry - R],
                            ["A", R, R, 0, +(alpha > 180), 1, x, y]
                        ];
                    };

                    return {
                        path: path
                    };
                };
                //ç»˜åˆ¶èƒŒæ™¯åœ†çŽ¯
                paper.path().attr({
                    arc: [100, 100, r],
                    'stroke-width': config.strokeWidth,
                    'stroke': config.bgColor
                });
                if (!!val) {
                    z = paper.path().attr({
                        arc: [0.01, 100, r],
                        'stroke-width': config.strokeWidth,
                        'stroke': config.ringColor,
                        'cursor': "pointer"
                    });
                    updateVal(val, 100, r, z, 2);
                }

                txt = paper.text(rx, ry, val + "%").attr({
                    font: config.fontWeight + " " + config.fontSize + " Arial",
                    fill: config.textColor
                });
            };
            minit();
            // //è‰²è°±
            // function getColor(size) {
            //  var arr = [];
            //  for (var i = 0; i <= 255; i++) {
            //      arr.push("rgb(" + i + "," + (255 - i) + "," + 0 + ")");
            //  }
            //  console.log(arr);
            //  return arr[parseInt(size * 2.55)];
            // }; 
            //çŽ¯å½¢åŠ¨èµ·æ¥å’Œäº‹ä»¶ç»‘å®š
            function updateVal(value, total, R, hand, id) {
                if (init) {
                    hand.animate({
                        arc: [value, total, R]
                    }, 900, ">");
                } else {
                    if (!value || value == total) {
                        value = total;
                        hand.animate({
                            arc: [value, total, R]
                        }, 750, "bounce", function() {
                            hand.attr({
                                arc: [0, total, R]
                            });
                        });
                    } else {
                        hand.animate({
                            arc: [value, total, R]
                        }, 750, "elastic");
                    }
                }
            };

        });

    };
    //é»˜è®¤å€¼
    $.fn.percentageLoader.defaultConfig = {
        valElement: 'p',
        strokeWidth: 20,
        bgColor: '#d9d9d9',
        ringColor: '#d53f3f',
        textColor: '#9a9a9a',
        fontSize: '12px',
        fontWeight: 'normal'
    };

})(jQuery);