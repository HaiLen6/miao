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

  }
}
