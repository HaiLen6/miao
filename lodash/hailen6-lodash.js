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
  },

  findIndex: function(ary, f, fromIndex = 0) {
    for (let i = fromIndex; i < ary.length; i++) {
      if (f(ary[i])) {
        return i;
      }
    }

    return -1;
  },

  flatten: function(ary) {
    var result = [];

    for (let i = 0; i < ary.length; i++) {
      if (!Array.isArray(ary[i])) {
        result.push(ary[i]);
      } else {
        for (let j = 0; j < ary[i].length; j++) {
          result.push(ary[i][j]);
        }
      }
    }

    return result;
  },

  flattenDeep: function(ary) {
    var result = [];

    function actionInnerDeep(ary) {
      for (let i = 0; i < ary.length; i++) {
        if (Array.isArray(ary[i])) {
          actionInnerDeep(ary[i]);
        } else {
          result.push(ary[i]);
        }
      }
    }

    actionInnerDeep(ary);

    return result;

  },

  flattenDepth: function(ary, depth = 1) {
    var result = [];
    var initDepth = 0;

    function actionInnerDeep(ary) {
      for (let i = 0; i < ary.length; i++) {
        if (Array.isArray(ary[i])) {
          if (initDepth < depth) {
            initDepth++;
            actionInnerDeep(ary[i]);
          } else {
            result.push(ary[i]);
          }
        } else {
          result.push(ary[i]);
        }
      }
    }

    actionInnerDeep(ary, depth);

    return result;
  },

  fromPairs: function(ary) {
    var result = {};

    for (let i = 0; i < ary.length; i++) {
      result[ary[i][0]] = ary[i][1];
    }

    return result;
  },

  head: function(ary) {
    return ary[0];
  },

  indexOf: function(ary, value, fromIndex = 0) {
    if (fromIndex < 0) {
      if (fromIndex + ary.length < 0) {
        for (let i = 0; i < ary.length; i++) {
          if (ary[i] === value) {
            return i;
          }
        }
        return -1;
      } else {
        for (let i = fromIndex + ary.length; i < ary.length; i++) {
          if (ary[i] === value) {
            return i;
          }
        }
        return -1;
      }
    } else if (fromIndex >= 0) {
      for (let i = fromIndex; i < ary.length; i++) {
        if (ary[i] === value) {
          return i;
        }
      }
      return -1;
    }
  },

  lastIndexOf: function(ary, value, fromIndex = ary.length - 1) {
    if (fromIndex < 0) {
      return -1;
    }

    if (fromIndex - (ary.length - 1) > 0) {
      for (let i = ary.length - 1; i >= 0; i--) {
        if (ary[i] === value) {
          return i;
        }
      }
      return -1;
    } else {
      for (let i = fromIndex; i >= 0; i--) {
        if (ary[i] === value) {
          return i;
        }
      }
      return -1;
    }
  },

  initial: function(ary) {
    var result = [];

    if (ary.length === 0) {
      return [];
    } else {
      for (let i = 0; i < ary.length - 1; i++) {
        result.push(ary[i]);
      }
      return result;
    }
  },

  join: function(ary, separator = ',') {
    var initString = '';

    for (let i = 0; i < ary.length; i++) {
      if (i < ary.length - 1) {
        initString = initString + ary[i] + separator;
      } else {
        initString += ary[i];
      }
    }

    return initString;
  },

  last: function(ary) {
    return ary.at(-1);
  },

  pull: function(ary, ...value) {
    if (value.length === 0) {
      return ary;
    }

    for (let i = 0; i < ary.length; i++) {
      for (let j of value) {
        if (ary[i] === j) {
          ary.splice(i, 1);
          i--;
        }
      }
    }

    return ary;
  },

  reverse: function(ary) {
    if (ary.length === 0) {
      return ary;
    }

    for (let i = 0; i < Math.ceil(ary.length / 2); i++) {
      var temp = ary[i];
      ary[i] = ary[ary.length - 1 - i];
      ary[ary.length - 1 - i] = temp;
    }

    return ary;
  },

  size: function(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof(collection) === "string") {
      return collection.length;
    } else if (typeof(collection) === "object") {
      let num = 0;
      for (const key in collection) {
        num++;
      }

      return num;
    }
  },

  pullAll: function(ary, values) {
    if (values.length === 0) {
      return ary;
    }

    for (let i = 0; i < ary.length; i++) {
      for (let j of values) {
        if (ary[i] === j) {
          ary.splice(i, 1);
          i--;
        }
      }
    }

    return ary;
  },

}



function demo() {

  var vabiable = new Function('a', "return a")
  return vabiable(1);
}






/*
  compact,✔
  chunk,✔
  fill,✔
  drop,✔
  findIndex,  没通过, 好好想想原因!
  findLastIndex,
  flatten,✔
  flattenDeep,✔
  flattenDepth✔
  fromPairs,✔
  head,✔
  indexOf,✔
  lastIndexOf,✔
  initial,✔
  join,✔
  last,✔
  pull,✔
  reverse,✔
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
  size,✔
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
  mapValues,
  range,
  stringifyJSON,
  concat,
  isEqual,
  repeat,
  padStart,
  padEnd,
  pad,
  keys,
  random,
  round,
  ceil,
  floor,
  cloneDeep,
  trim,
  trimStart,
  trimEnd
*/
