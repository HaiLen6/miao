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
  },

  compact: function(ary) {
    var result = [];

    for (let i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i]);
      }
    }

    return result;
  },

  difference: function(ary, ...values) {
    var result = [];
    var aryObj = {};
    var comparisionObj = {};

    for (let i = 0; i < ary.length; i++) {
      if (!aryObj[ary[i]]) {
        aryObj[ary[i]] = 0;
      } else {
        aryObj[ary[i]]++;
      }
    }

    values = values.flat(Infinity);

    for (let i = 0; i < values.length; i++) {
      if (!comparisionObj[values[i]]) {
        comparisionObj[values[i]] = 0;
      } else {
        comparisionObj[values[i]]++;
      }
    }

    for (let i = 0; i < ary.length; i++) {
      if (ary[i] in comparisionObj) {
        continue;
      } else {
        result.push(ary[i]);
      }
    }

    return result;
  },

  differenceBy: function(ary, values, f) {
    var result = [];
    // 未完待续
  },

  fill: function(ary, value, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
      ary[i] = value;
    }

    return ary;
  },

  drop: function(ary, n = 1) {
    if (n >= ary.length) {
      return [];
    }

    for (let i = 0; i < n; i++) {
      ary.shift();
    }

    return ary;
  }
}


/*
  compact,✔
  chunk,✔
  fill,✔
  drop,
  findIndex,
  findLastIndex,
  flatten,
  flattenDeep,
  flattenDepth
  fromPairs,
  head,
  indexOf,
  lastIndexOf,
  initial,
  join,
  last,
  pull,
  reverse,
  every,
  some
  countBy,
  groupBy,
  keyBy,
  forEach,
  map,
  filter,
  reduce,
  reduceRight,
  size,
  sortBy,
  sample,
  isUndefined,
  isNull,
  isNil,
  max,
  min,
  maxBy,
  minBy,
  round,
  sumBy
  flagMap,
  flatMapDepth,
  get,
  has,
  mapKeys,
  mapValues
*/
