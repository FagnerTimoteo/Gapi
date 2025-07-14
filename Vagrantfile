Vagrant.configure("2") do |config|

  config.vm.define "vm2" do |vm2|
    vm2.vm.box = "ubuntu/focal64"
    vm2.vm.hostname = "vm2"
    vm2.vm.network "private_network", ip: "192.168.56.11"
    vm2.vm.network "forwarded_port", guest: 3001, host: 3001

    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
  end

  # nó de controle do ansible
  config.vm.define "vm1" do |vm1|
    vm1.vm.box = "ubuntu/focal64"
    vm1.vm.hostname = "vm1"
    vm1.vm.network "private_network", ip: "192.168.56.10"
    vm1.vm.synced_folder "./ansible", "/vagrant/ansible"  # Compartilha os arquivos ansible
    vm1.vm.synced_folder ".vagrant/machines/vm2/virtualbox", "/vagrant_keys", type: "virtualbox"

    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end

    vm1.vm.provision "shell", inline: <<-SHELL
      # Instala o ansible
      sudo apt update
      sudo apt install -y software-properties-common
      sudo apt-add-repository --yes --update ppa:ansible/ansible
      sudo apt install -y ansible git

      # Copia a chave privada da vm2
      mkdir -p /home/vagrant/.ssh
      cp /vagrant_keys/private_key /home/vagrant/.ssh/vm2_key
      chown vagrant:vagrant /home/vagrant/.ssh/vm2_key
      chmod 600 /home/vagrant/.ssh/vm2_key

      # Executa o playbook
      cd /vagrant/ansible
      ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i inventory configura-node.yml

      sleep 5
      curl --retry 5 --retry-delay 3 -X POST http://192.168.56.11:3001/api/games \
        -H "Content-Type: application/json" \
        -d '{
          "titulo": "The Legend of Zelda: Breath of the Wild",
          "genero": "Aventura",
          "dataLancamento": "2017-03-03",
          "plataforma": "Nintendo Switch",
          "desenvolvedora": "Nintendo",
          "email": "nintendo@zelda.com"
        }' || echo "Falha ao acessar API"

      curl --retry 5 --retry-delay 3 http://192.168.56.11:3001/api/games || echo "Falha ao acessar API"
    SHELL
  end  
end
