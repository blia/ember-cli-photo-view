import Ember from 'ember';
import layout from '../templates/components/actions-panel';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['actions'],
  click(evt) {
    if (this.$(evt.target).data('action')) {
      if (typeof this.globalEvents !== "undefined") {
        console.log('photo-view:' + this.$(evt.target).data('action'));
        this.globalEvents.trigger('photo-view:' + this.$(evt.target).data('action'), this.get('photos'))
      }
    }
    evt.preventDefault()
  }
});
