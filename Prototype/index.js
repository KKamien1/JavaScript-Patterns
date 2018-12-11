let Castle = function(name) {
  this.name = name;
};
Castle.prototype.build = function() {
  console.log(this.name);
};

let instance1 = new Castle("Winterfell");
let instance2 = new Castle("Harrenhall");

instance1.build();
instance2.build();

Castle.prototype.build = function() {
  console.log(this.name.replace("Winterfell", "Moat Cailin"));
};

instance1.build();
instance2.build();

// Object.create(prototype [,propertiesObject])
// writable, configurable, enumerable, value

let instance3 = Object.create(Castle.prototype, {
  name: { value: "Winterfell", writable: false }
});
instance3.build();
instance3.name = "Highgarden"; // it doesn't work becouse writable: false
instance3.build();
