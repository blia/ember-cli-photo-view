import Ember from 'ember';
import layout from '../templates/components/next-photo';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['next'],
  classNameBindings: ['display'],
  opened: Ember.computed.filterBy('photos', 'isOpened', true),
  photo: Ember.computed.alias('opened.firstObject'),
  total: Ember.computed.alias('photos.length'),
  display: Ember.computed('photo', function () {
    if (this.get('photo') && this.get('photos')) {
      return this.get('photos').indexOf(this.get('photo')) + 1 < this.get('total')
    }
    return false
  }),
  click() {
    const index = this.get('photos').indexOf(this.get('photo')) + 1
    this.get('photo').set('isOpened', false)
    this.get('photos').objectAt(index).set('isOpened', true)
  }
});
