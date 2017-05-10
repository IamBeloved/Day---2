function MobilePhone(imei, screenSize, batteryLife){
  this.imeiNumber = imei;
  this.screenSize = screenSize;
  this.batteryLife = batteryLife;
  
  this.dialNumber = function(mobileNumber){
    if(mobileNumberOn === true){
      console.log("call Connected");
    }
    else{
      console.log("the number you're trying to call is currently not available");
    }
  };
  this.sendMessage = function (mobileNumber, message){
    if(mobileNumberOn === true){
      console.log("message delivered");
    }
    else {
      console.log("sending failed");
    }
  };
} 

function Android(version, make, year, goToPlaystore, bluetoothSend, installApk){
  this.androidVersion = version;
  this.gotoPlaystore = function(){
    console.log("click to download application");
  };
  this.bluetoothSend = function (fileName){
    if(bluetoothOn === true){
      console.log("file transfered");
    }
    else {
      console.log("transfer failed");
    }
  };
  this.installApk = function(apkFileName){
    console.log("file installed successfully");
  };
}
Android.prototype = new MobilePhone();

function Ios(version, make, year, goToIosStore, installIos){
  this.iosVersion = version;
  this.goToIosStore = function(){
    console.log("click to download application");
  };
  this.installIos = function(iosFileName){
    console.log("file installed successfully");
  };
}
Ios.prototype = new MobilePhone();

var galaxyS8 = new Android("icecream", "samsung", 2017);
  console.log("I am the new Samsung Galaxy S8");



var iphone9 = new Ios();


