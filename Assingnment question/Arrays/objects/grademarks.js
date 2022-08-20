var db = [
    {
      grade: "V",
      students: [
        { name: "Nrupul", marks: [10, 20, 30] },
        { name: "Prateek", marks: [20, 30, 40] },
      ],
    },
    {
      grade: "VI",
      students: [
        { name: "Aman", marks: [10, 20, 30] },
        { name: "Albert", marks: [20, 30, 40] },
      ],
    },
    {
      grade: "VII",
      students: [
        { name: "Yogesh", marks: [10, 20, 30] },
        { name: "Sandhya", marks: [20, 30, 40] },
      ],
    },
  ];
  
  for (var i = 0; i < db.length; i++) {
    var max = 0;
    var topper = ``;
    for (var j = 0; j < db[i].students.length; j++) 
    {
      var total = 0;
      for (var k = 0; k < db[i].students[j].marks.length; k++) 
      {
        total += db[i].students[j].marks[k];
      }
      if (max == 0) 
      {
        max = total;
        topper = db[i].students[j].name;
      } 
      else if (max < total) 
      {
        max = total;
        topper = db[i].students[j].name;
      }
    }
}