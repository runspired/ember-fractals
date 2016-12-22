import Ember from 'ember';
import d3Scale from 'npm:d3-scale';
import memoizedCalc from '../utils/memoized-calc';
import layout from '../templates/components/pythagoras-rect';

const { Component, String: { htmlSafe } } = Ember;
const { interpolateViridis } = d3Scale;

export default Component.extend({
  layout,
  tagName: '',

  recalculateParams() {
    let { x, y, left, right, lvl, maxlvl, w, heightFactor, lean } = this;
    let args = { w, heightFactor, lean };
    let { A, B, nextLeft, nextRight } = memoizedCalc(args);

    let nextYLeft = - nextLeft;
    let nextXRight = w - nextRight;
    let nextYRight = - nextRight;
    let nextLvl = lvl + 1;

    let shouldRender = lvl < maxlvl && w >= 1;
    let squareFillStyle = htmlSafe(`fill: ${interpolateViridis(lvl / maxlvl)}`);

    let rotate = '';

    if (left) {
      rotate = `rotate(${-A} 0 ${w})`;
    } else if (right) {
      rotate = `rotate(${B} ${w} ${w})`;
    }

    let transformStyle = `translate(${x} ${y}) ${rotate}`;
    let props = {
      nextLvl,
      nextLeft,
      nextRight,
      nextYLeft,
      nextXRight,
      nextYRight,
      shouldRender,
      squareFillStyle,
      transformStyle
    };

    this.setProperties(props);
  },

  init() {
    this._super();
    this.nextXLeft = 0;
  },

  didReceiveAttrs(attrs) {
    this._super(attrs);
    this.recalculateParams();
  }

});
