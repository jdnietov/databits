import { Template } from 'meteor/templating';

import './introModal.html';

Template.introModal.events({
  'click .ui.close.button' {
    $('#generalModal').modal('hide');
    console.log('jalsk');
  };
});
