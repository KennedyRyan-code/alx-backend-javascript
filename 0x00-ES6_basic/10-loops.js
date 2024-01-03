export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value += appendString;
  }

  return array.map(value => appendString + value);
}
