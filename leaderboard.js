function swapOrNot(str1, str2) {
  var l1 = str1.length;
  var l2 = str2.length;
  var length = Math.min(l1, l2);
  for (let i = 0; i < length; i++) {
    if (str1[i] != str2[i]) {
      if (str1[i] > str2[i]) {
        return true;
      } else {
        return false;
      }
    }
    }
    return false;
}
var names = ["zoya", "aman", "faisal", "juhi"];
var marks = [45, 35, 27, 98];

function sortNames(names, marks) {
    for (i = 0; i < names.length; i++){
        for (j = 0; j < names.length-i-1; j++){
            if (swapOrNot(names[j], names[j + 1]) == true) {
                swap(names, marks, j, j + 1);
            }
        }
    }
    console.log(names.join(" "), marks.join(" "));
}

function swap(names, marks, i, j) {
    var temp = names[i];
    names[i] = names[j];
    names[j] = temp;

    temp = marks[i];
    marks[i] = marks[j];
    marks[j] = temp;

}
