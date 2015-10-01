Meteor.methods({
  save : function(data) {
    Tasks.insert(data);
  }
});
