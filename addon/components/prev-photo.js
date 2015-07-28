import Ember from 'ember';
import layout from '../templates/components/prev-photo';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['prev'],
  classNameBindings: ['display'],
  opened: Ember.computed.filterBy('photos', 'isOpened', true),
  photo: Ember.computed.alias('opened.firstObject'),
  display: Ember.computed('photo', function() {
    if (this.get('photo') && this.get('photos')) {
      return this.get('photos').indexOf(this.get('photo')) > 0
    }
    return false
  }),
  click() {
    const index = this.get('photos').indexOf(this.get('photo')) - 1
    this.get('photo').set('isOpened', false)
    this.get('photos').objectAt(index).set('isOpened', true)
  }
});
