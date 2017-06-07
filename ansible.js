var Ansible = require('node-ansible');




// Export "action" fuction to create a machine in AWS to be called from app.js
module.exports = {

    addMachine: function() {
      command = new Ansible.Playbook().playbook('./ansible/playbook_configure_sipxcom');
      promise = command.exec();
      return promise.then(function(result) {
          console.log(result.output);
          console.log(result.code);
        },function(err) {
          console.error(err);
      })
    },


    terminateMachine: function() {
      //Trebuie schimbat sa sterga masina
      command = new Ansible.Playbook().playbook('./ansible/terminate_sipxcom');
      promise = command.exec();
      return promise.then(function(result) {
          console.log(result.output);
          console.log(result.code);
        },function(err) {
          console.error(err);
      })
    },


    stopMachine: function() {

      //Trebuie schimbat doar sa opreasa machine din playbookul de ansible
      command = new Ansible.Playbook().playbook('./ansible/stop_sipxcom');
      promise = command.exec();
      return promise.then(function(result) {
          console.log(result.output);
          console.log(result.code);
        },function(err) {
          console.error(err);
      })
    },

    listMachines:  function() {

      //Trebuie schimbat doar sa listeze machinile
      command = new Ansible.Playbook().playbook('./ansible/list_sipxcom');
      promise = command.exec();
      return promise.then(function(result) {
          for (var i in JSON.parse(result.output).plays[0].tasks[0].hosts.localhost.instances) {
          console.log(JSON.parse(result.output).plays[0].tasks[0].hosts.localhost.instances[i].tags.Name + ' ..with Image ID.. ' + JSON.parse(result.output).plays[0].tasks[0].hosts.localhost.instances[i].id) }; // Nu uita de JSON.parse
          //console.log(result.output);
        },function(err) {
          console.error(err);
      })
    },

}
