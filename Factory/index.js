let KingJoffery = (function() {
  function KingJoffery() {}
  KingJoffery.prototype.makeDecision = function() {};
  KingJoffery.prototype.marry = function() {};
  return KingJoffery;
})();

let LordTywin = function() {
  function LordTywin() {}
  LordTywin.prototype.makeDecision = function() {};
  return LordTywin;
};

let LannisterFactory = (function() {
  function LannisterFactory() {}
  LannisterFactory.prototype.getKing = function() {
    return new KingJoffery();
  };
  LannisterFactory.prototype.getHandOfKing = function() {
    return new LordTywin();
  };
  return LannisterFactory;
})();

console.log(KingJoffery.prootype, LordTywin, LannisterFactory);
(() => console.log("---iife---"))();
