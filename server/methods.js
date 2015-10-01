Meteor.methods({
  insert : function(data) {
    Tasks.insert(data);
  },

  remove : function(id) {
    Tasks.remove({_id : id});
  }
});
