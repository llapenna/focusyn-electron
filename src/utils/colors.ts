import stc from 'string-to-color';

String.prototype.toColor = function () {
  return stc(this);
};
