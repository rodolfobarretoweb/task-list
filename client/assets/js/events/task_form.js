Template.task_form.events({
  "submit form" : function(e, template){
    e.preventDefault();

    var $name        = $('#name'),
        $description = $('#description');

    Meteor.call('insert', {
      user_id     : Meteor.user()._id,
      date        : new Date(),
      name        : $name.val(),
      description : $description.val()
    });

    $name.val('').focus();
    $description.val('');
  }
});
