import { getTimeTemp } from './time';

const resFn = ({code, data, msg}) => {

    const timeTemp = getTimeTemp(); // 当前时间戳

    const res = {
        code,
        data,
        msg,
        timeTemp
    }

    return res;
}

export {
    resFn
};