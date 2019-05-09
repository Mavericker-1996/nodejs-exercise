var counter = {
    num: 1
};
function incCounter() {
  counter.num++;
  console.log(counter.num);
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};