import DS from 'ember-data';
export default DS.Model.extend({
  title: DS.attr(),
  photos: DS.hasMany('photo', { async: true })
});
