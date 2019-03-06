function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`member: name ${this.name}, cost: ${this.cost}`);
    };
    return member;
  };
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = "$5";
};
const StandardMembership = function(name) {
  this.name = name;
  this.cost = "$10";
};
const SuperMembership = function(name) {
  this.name = name;
  this.cost = "$15";
};

let factory = new MemberFactory();

factory.createMember("Wojtek", "super").define();
factory.createMember("Darek", "simple").define();
factory.createMember("Darek", "standard").define();
