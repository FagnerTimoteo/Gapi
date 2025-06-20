Vagrant.configure("2") do |config|
  config.vm.define "vm1" do |vm1|
    vm1.vm.box = "ubuntu/focal64"
    vm1.vm.hostname = "vm1"
    vm1.vm.network "private_network", ip: "192.168.56.10"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end

    vm1.vm.provision "shell", inline: <<-SHELL
      # Para teste
      sudo apt update && sudo apt install -y curl
    SHELL
  end

  config.vm.define "vm2" do |vm2|
  vm2.vm.box = "ubuntu/focal64"
  vm2.vm.hostname = "vm2"
  vm2.vm.network "private_network", ip: "192.168.56.11"
  vm2.vm.synced_folder "./", "/home/vagrant/vagrant_data", type: "virtualbox"
  vm2.vm.network "forwarded_port", guest: 3001, host: 3001

  vm2.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  vm2.vm.provision "shell", inline: <<-SHELL
    # Atualiza pacotes
    sudo apt-get update

    # Instala Node.js
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs build-essential

    # Instala MongoDB (com correção de dependências)
    wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
    sudo apt-get update
    sudo apt-get install -y mongodb-org
    sudo systemctl enable mongod
    sudo systemctl start mongod

    # Entra na pasta do projeto
    cd /home/vagrant/vagrant_data

    # Instala dependências do projeto
    npm install --no-bin-links
    npm install -g nodemon

    # Inicia o app com nohup
    nohup npm start > app.log 2>&1 &
    SHELL
  end

end
