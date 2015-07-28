import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.find('item', 1)
  },
  afterModel(item) {
    Ember.run.later(this, () => {
      this.globalEvents.trigger('photo-view:open', item.get('photos'))
    }, 300)
  }
});
