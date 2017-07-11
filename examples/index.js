'use strict';
const escpos = require('../');

const device  = new escpos.USB();
// const device  = new escpos.Network('localhost');
// const device  = new escpos.Serial('/dev/usb/lp0');

const printer = new escpos.Printer(device);

device.open(function(){
    printer
        .font('a')
        .style('b')
        .lineSpace(10)
        .align('ct')
        .size(2, 2)
        .textln('小渔娘锡纸花甲（观前店）')
        .size(1, 1)
        .align('lt')
        .textln('订单编号：E707110004')
        .textln('下单时间：17-07-11 10:45')
        .align('ct')
        .textln('******************************')
        .align('lt')

        .text('秘制花甲')
        .control('ht')
        .text('* 5')
        .control('ht')
        .textln('35.00')

        .text('米饭')
        .control('ht')
        .text('* 2')
        .control('ht')
        .textln('35.00')

        .align('ct')
        .textln('------------------------------')
        .align('lt')

        .text('餐盒费')
        .control('ht')
        .control('ht')
        .textln('6.00')

        .text('配送费')
        .control('ht')
        .control('ht')
        .textln('4.00')

        .align('ct')
        .textln('------------------------------')
        .align('rt')
        .text('已支付 ')
        .size(2, 2)
        .textln('115.00元')
        .size(1, 1)

        .align('ct')
        .textln('------------------------------')
        .align('lt')

        .textln('苏州工业园区 通园路208号 苏化科技园23-103')
        .textln('周凯凯')
        .textln('13913534491')

        .align('ct')
        .textln('******************************')
        .textln('苏州天梦网络技术支持')
        .textln('www.dreamdaytech.com')

        .cut().close();
});
