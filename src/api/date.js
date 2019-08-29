// 获取当前事件
export const currentydate = (a) => {
    let data_time = new Date();
    // 年
    let year = data_time.getFullYear()
        // 判断小于10，前面补0
    if (year < 10) {
        year = "0" + year;
    }
    // 月
    let month = data_time.getMonth();
    // 判断小于10，前面补0
    if (month < 10) {
        month = "0" + month;
    }

    // 日
    let day = data_time.getDate();
    // 判断小于10，前面补0
    if (day < 10) {
        day = "0" + day;
    }

    let hours = data_time.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }

    let minutes = data_time.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // 秒
    let seconds = data_time.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let date_str;
    if (a == 1) {
        //2019年08月29日 17:24:36
        date_str = year + "年" + month + '月' + day + '日' + " " + hours + ":" + minutes + ":" + seconds;
    } else if (a == 2) {
        //2019-08-29 17:24:36
        date_str = year + "-" + month + '-' + day + " " + hours + ":" + minutes + ":" + seconds;
    } else if (a == 3) {
        //2019年08月29日 17时24分36秒
        date_str = year + "年" + month + '月' + day + '日' + " " + hours + "时" + minutes + "分" + seconds + '秒';
    } else {
        //2019年08月29日 17:24:36
        date_str = year + "年" + month + '月' + day + '日' + " " + hours + ":" + minutes + ":" + seconds;
    }

    return date_str;
}