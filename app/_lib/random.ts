export default function random(from: number, to: number) {
  var r = Math.random();
  return Math.floor(r * (to - from) + from);
}
