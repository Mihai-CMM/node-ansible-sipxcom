var Ansible = require('node-ansible');




// Export "action" fuction to create a machine in AWS to be called from app.js
module.exports = {

    action: function() {
      command = new Ansible.Playbook().playbook('./ansible/playbook_configure_sipxcom');
      promise = command.exec();
      return promise.then(function(result) {
          console.log(result.output);
          console.log(result.code);
        },function(err) {
          console.error(err);
      })
}

}
