


function printDate(){
  var d=new Date()  
  console.log(d.getDate())
  printMonth()
}

function printMonth(){
    var m=new Date()
        console.log(m.getMonth()+1)
    getBatchInfo()
}

function getBatchInfo(){
    console.log("hi my name is anamika sharma i am trainee at functionup i am student of plutonium batch")
}



module.exports.printDate = printDate;
