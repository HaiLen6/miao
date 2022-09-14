var hailen6 = {
chunk: function(ary, size = 1) {
  var result = [];
  var bracketsNumber = Math.ceil(ary.length / size);

  var index = 0;

  for (let i = 0; i < bracketsNumber; i++) {
    let ini = [];
    for (let j = index; j < index + size; j++) {
      if (ary[j] === undefined) {
        continue;
      } else {
        ini.push(ary[j]);
      }
    }

    index += size;
    result.push(ini);
  }

  return result;
}
  // compact:
  // fill:
}
