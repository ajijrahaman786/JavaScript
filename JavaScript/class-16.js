// var MyInfo= {YourName: "ajij", Village: "ekmukha", PhoneNo: "6297842931"};

// console.log(MyInfo.YourName);

// var NewPro = MyInfo["YourName"];




// function MyInfo(YourName,Village,PhoneNo){
//     this.YourName = YourName;
//     this.Village = Village;
//     this.PhoneNo = PhoneNo;
// }

// var NewObj = new MyInfo("ajij", "ekmukha", "6297842931");

// var NewObj1 = new MyInfo("ripan", "mathabhanga", "6297845931");

// console.log(NewObj);
// console.log(NewObj1);



function MyInfo3(YourName,Village,PhoneNo){
    this.YourName = YourName;
    this.Village = Village;
    this.PhoneNo = PhoneNo;
    this.Show = function(){
        console.log(this.YourName);
        console.log(this.Village);
        console.log(this.PhoneNo);
    }
}

var NewObj = new MyInfo3("ajij", "ekmukha", "6297842931");
var NewObj1 = new MyInfo3("shohan", "mathabhanga", "6297842931");
var NewObj2 = new MyInfo3("ripan", "mathabhanga", "6297842931");

NewObj.Show();
console.log("brack");
NewObj1.Show();
console.log("brack");
NewObj2.Show();
