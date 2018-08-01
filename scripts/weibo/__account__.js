import { __url__, __first__, __second__, __urls__, __main__ } from './__url__';

const urls = [];

export const INDEX = 'index';
export const MBLOGLIST = 'mbloglist';
export const quene = {
    __push__: (url, key=INDEX) => {
        urls.push({ key, url });
    },
    __pop__: () => {
        return urls.shift();
    },
    __length__: () => {
        return urls.length;
    }
};

// 美宝莲
//for (let i=1; i<=302; i++) {
//    quene.__push__(__second__(1006061645385313, 'maybelline09', i, { __rnd: '1532672164176' }), MBLOGLIST);
//    quene.__push__(__main__(1006061645385313, i));
//}
//
//// 雪花秀Sulwhasoo
//for (let i=1; i<=231; i++) {
//    quene.__push__(__second__(1006062002262597, 'sulwhasoochina', i, { __rnd: '1533004542701' }), MBLOGLIST);
//    quene.__push__(__main__(1006062002262597, i));
//}
//
//// 伊蒂之屋
//for (let i=1; i<=143; i++) {
//    quene.__push__(__second__(1006062611545247, 'p/1006062611545247/home', i, { __rnd: '1533006421503'}), MBLOGLIST);
//    quene.__push__(__main__(1006062611545247, i));
//}
//
//// 巴黎欧莱雅
//for (let i=1; i<=277; i++) {
//    quene.__push__(__second__(1006061732472555, 'lorealparis', i, { __rnd: '1533006555237' }), MBLOGLIST);
//    quene.__push__(__main__(1006061732472555, i));
//}

// 欧莱雅美发
for (let i=1; i<=30; i++) {
    quene.__push__(__second__(1006063119329695, 'lrlmakeup', i, { __rnd: '1533006670733' }), MBLOGLIST);
    quene.__push__(__main__(1006063119329695, i));
}

// CalvinKlein
//for (let i=1; i<=52; i++) {
//    quene.__push__(__second__(1006062013236575, 'calvinklein', i, { __rnd: '1533006812624' }), MBLOGLIST);
//    quene.__push__(__main__(1006062013236575, i));
//}
//
//// TommyHilfiger
//for (let i=1; i<=127; i++) {
//    quene.__push__(__second__(1006062979334422, 'tommyhilfiger', i, { __rnd: '1533006914393' }), MBLOGLIST);
//    quene.__push__(__main__(1006062979334422, i));
//}

urls.sort((a, b) => Math.random()>.5 ? -1 : 1);
