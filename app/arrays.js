exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

    var i = 0, len = arr.length;
    for (; i < len; i++) {
      if(arr[i] === item)
      {
        return i;
      }
    }
    return -1;

  },

  sum: function(arr) {
     var i = 0, len = arr.length, sum = 0;
    for (; i < len; i++) {
     sum+= arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var i = 0, len = arr.length;
    var reset = [];
    for(;i < len; i++)
    {
      if(arr[i] != item)
        reset.push(arr[i]);
    }
    return reset;

  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
