import Ember from 'ember';
import layout from '../templates/components/photo-canvas';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['canvas'],
  isRetina: window.devicePixelRatio === 2,
  opened: Ember.computed.filterBy('photos', 'isOpened', true),
  photo: Ember.computed.alias('opened.firstObject'),
  src: Ember.computed('photo', function () {
    if (!this.get('photo')) {
      return
    }
    const url = this.get('isRetina') ? this.get('photo.sourceURL2x') : this.get('photo.sourceURL')
    const photo = this.get('photo').get(url)
    return photo
  })
});
