function sumItems(array, index = 0) {
  if (index === array.length) {
    return 0;
  }

  if (Array.isArray(array[index])) {
    return sumItems(array[index], 0) + sumItems(array, index + 1);
  }
  return array[index] + sumItems(array, index + 1);
}

module.exports = sumItems;