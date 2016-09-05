var UnixtimeDynamicValue = function() {
  this.evaluate = function() {
    return Math.floor(Date.now() / 1000);
  };
  this.title = function() {
    return "Unixtime";
  };
};

UnixtimeDynamicValue.identifier = "com.darrenehlers.unixtime";
UnixtimeDynamicValue.title = "Unixtime";
UnixtimeDynamicValue.inputs = [];

registerDynamicValueClass(UnixtimeDynamicValue);
