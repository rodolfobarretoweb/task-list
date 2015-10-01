Template.task_list.helpers({
  list : function(){
    return Tasks.find({user_id : Meteor.user()._id});
  },

  format_date : function() {
    return moment(this.date).format('DD/MM/YYYY - HH:mm:ss');
  }
});

Template.task_list.events({
  "click .delete_task" : function(e, template){
    e.preventDefault();

    if(window.confirm("Are you sure ?")) {
      Meteor.call('remove', this._id);
    }
  }
});
