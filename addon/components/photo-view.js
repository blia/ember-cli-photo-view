import Ember from 'ember';
import DS from 'ember-data';
import layout from '../templates/components/photo-view';
const log = Ember.debug
export default Ember.Component.extend({
  classNames: ['photo-view'],
  classNameBindings: ['fullscreen', 'opened', 'loading'],
  layout: layout,
  fullscreen: true,
  opened: false,
  photos: false,
  loading: false,
  noPhotos: false,
  activePhoto: null,
  didInsertElement() {
    if (typeof this.globalEvents !== "undefined") {
      this.globalEvents.on('photo-view:open', this, 'open')
      this.globalEvents.on('photo-view:close', this, 'close')
    }
  },
  open(photos) {
    this.set('loading', true)
    this.set('opened', true)
    if (photos instanceof DS.PromiseManyArray) {
      photos.then(photos => {
        this.set('photos', photos)
        this.set('loading', false)
        if (photos.get('length') === 0) {
          this.set('noPhotos', true)
          // TODO throw error
          return
        }
        this.openPhoto(0)
      })
    }
  },
  close() {
    this.set('opened', false)
    // this.set('photos', false)
  },
  openPhoto(index) {
    const openedPhoto = this.get('photos').findBy('isOpened', true)
    if (openedPhoto) {
      openedPhoto.set('isOpened', false)
    }
    this.get('photos').objectAt(index).set('isOpened', true)
  },
  click(evt) {
    evt.preventDefault()
    if ($(evt.target).hasClass('close')) {
      this.close()
    }
  }
});
