Vagrant.configure("2") do |config|

  # VM2 - Servidor alvo
  config.vm.define "vm2" do |vm2|
    vm2.vm.box = "ubuntu/focal64"
    vm2.vm.hostname = "vm2"
    vm2.vm.network "private_network", ip: "192.168.56.11"
    vm2.vm.synced_folder "./", "/home/vagrant/vagrant_data", type: "virtualbox"
    vm2.vm.network "forwarded_port", guest: 3001, host: 3001

    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = "512"
    end
  end

  # VM1 - Controladora com Ansible
  config.vm.define "vm1" do |vm1|
    vm1.vm.box = "ubuntu/focal64"
    vm1.vm.hostname = "vm1"
    vm1.vm.network "private_network", ip: "192.168.56.10"

    # Compartilha a pasta onde a chave da vm2 será gerada
    vm1.vm.synced_folder ".vagrant/machines/vm2/virtualbox", "/vagrant_keys", type: "virtualbox"

    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = "512"
    end

    vm1.vm.provision "shell", inline: <<-SHELL
      # Instala o Ansible
      sudo apt update
      sudo apt install -y software-properties-common
      sudo apt-add-repository --yes --update ppa:ansible/ansible
      sudo apt install -y ansible

      # Copia a chave privada da vm2
      mkdir -p /home/vagrant/.ssh
      cp /vagrant_keys/private_key /home/vagrant/.ssh/vm2_key
      chown vagrant:vagrant /home/vagrant/.ssh/vm2_key
      chmod 600 /home/vagrant/.ssh/vm2_key
    SHELL
  end  
end
