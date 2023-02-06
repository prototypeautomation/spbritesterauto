const abjad = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j"
  ];


function createTimeStamp() {
    const day = new Date();
    let dd, mm, yy, tmp;
    dd = day.getDate();
    mm = day.getMonth();
    yy = day.getFullYear();
    mm = mm +1;
    if (mm < 10) {
      mm = "0"+mm.toString()
    }
    if (dd < 10) {
      dd = "0"+dd.toString()
    }if (yy < 10) {
      yy = "0"+yy.toString()
    }
    tmp = dd.toString()+mm.toString()+yy.toString();
    return tmp
}

function createUsernameRandom() {
    var data = [];
    var data1 = 'User ';
    var data2 = 'email';
    var data3 = '810';
    var data4 = '08';
    var data5 = 'Spbri@'
    data2 = data2 + createTimeStamp();
    data4 = data4 + createTimeStamp();
    for (var i = 0; i <= 3; i++){
        let random = Math.floor(Math.random() * 9) + 0;
        data1 = data1 + abjad[random];
        data2 = data2 + abjad[random];
        data3 = data3 + random.toString();
        data4 = data4 + random.toString();
        data5 = data5 + random.toString();
    }
    data2 = data2 + '@mailinator.com';
    data = [data1, data2, data3, data4, data5];
    return data;
}
const createData = createUsernameRandom();

function createEmailRandom() {
    var data = 'email';
    var random;
    for (var i = 0; i <= 3; i++){
        random = Math.floor(Math.random() * 9);
        data = data + abjad[random];
    }
    return data;
}

module.exports = {
    createData,
    createEmailRandom,
    createUsernameRandom
  };