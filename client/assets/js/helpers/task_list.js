Template.task_list.helpers({
  list : function(){
    return Tasks.find({});
  },

  format_date : function() {
    return moment(this.date).format('DD/MM/YYYY - HH:mm:ss');
  }
});

Template.task_list.events({
  "click .delete_task" : function(e, template){
    e.preventDefault();

    Tasks.remove({_id : this._id});
  }
});
