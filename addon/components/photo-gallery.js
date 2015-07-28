import Ember from 'ember';
import layout from '../templates/components/photo-gallery';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['gallery'],
  classNameBindings: ['display'],
  opened: Ember.computed.filterBy('photos', 'isOpened', true),
  photo: Ember.computed.alias('opened.firstObject'),
  total: Ember.computed.alias('photos.length'),
  display: Ember.computed.bool('total'),
  click(evt) {
    const index = this.$().children().index(evt.target)
    if (index === -1) {
      return
    }
    this.get('photo').set('isOpened', false)
    this.get('photos').objectAt(index).set('isOpened', true)
  }
});
