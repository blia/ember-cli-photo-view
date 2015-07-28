import DS from 'ember-data';
import PhotoModel from 'ember-cli-photo-view/mixins/model';

export default DS.Model.extend(PhotoModel, {
  title: DS.attr(),
  source: DS.attr(),
  source2x: DS.attr(),
  thumb: DS.attr(),
  thumb2x: DS.attr(),
  caption: Ember.computed('title', function () {
    return this.get('title')
  })
});
