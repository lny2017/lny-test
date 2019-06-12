let timeObj = {
    /**
     * 获取当前的时间戳
     */
    getTimeTemp() {
        const timer = new Date();
        return timer.getTime().toString();
    },

    /**
     * 获取年月日 默认输出当前的
     * return 2019-06-12
     */
    getYMD(times, rule) {
        const num = times * 1;
        const rules = rule ? rule : '-';
        const timer = num ? new Date(num) : new Date();

        const year = timer.getFullYear()
        const mounth = timer.getMonth() + 1;
        const day = timer.getDay();

        let timeStr = this._addZero(year) + rules + this._addZero(mounth) + rules + this._addZero(day);

        return timeStr;
    },

    /**
     * 补0函数
     */
    _addZero(val) {
        return val > 9 ? val : '0' + val;
    }
}
module.exports = timeObj;