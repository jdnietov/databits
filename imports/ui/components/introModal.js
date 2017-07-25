import { Template } from 'meteor/templating';

import './introModal.html';

Template.introModal.events({
  'click .ui.labeled.icon.close.button'() {
    console.log('template');
    $('#generalModal').modal('hide');
  }
});
