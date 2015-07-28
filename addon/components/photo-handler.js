import Ember from 'ember';
import layout from '../templates/components/photo-handler';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: ['active'],
  attributeBindings: ['style'],
  isRetina: window.devicePixelRatio === 2,
  active: Ember.computed.alias('photo.isOpened'),
  style: Ember.computed('photo', function () {
    if (!this.get('photo')) {
      return
    }
    const url = this.get('isRetina') ? this.get('photo.thumbURL2x') : this.get('photo.thumbURL')
    const photo = this.get('photo').get(url)
    return 'background-image: url("' + photo + '");'
  })
});
