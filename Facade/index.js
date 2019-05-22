let Transportation = {};

let Ship = (function() {
  function Ship() {
    Ship.prototype.TurnLeft = function() {};
    Ship.prototype.TurnRight = function() {};
    Ship.prototype.GoForward = function() {};
  }
  return Ship;
})();

Transportation.Ship = Ship;

let Admiral = (function() {
  function Admiral() {}
  return Admiral();
})();

Transportation.Admiral = Admiral;

let SupplyCoordinator = (function() {
  function SupplyCoordinator() {}
  return SupplyCoordinator;
})();

Transportation.SupplyCoordinator = SupplyCoordinator;

let Fleet = (function() {
  function Fleet() {
    Fleet.prototype.setDestination = function(destination) {
      // dispatch data to Admirals and all stuff
    };
    Fleet.prototype.resupply = function() {
      // body
    };
    Fleet.prototype.attack = function(destination) {
      // attact on destination
    };
    return Fleet;
  }
})();
