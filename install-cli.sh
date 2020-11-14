#!/bin/bash
set -e

function log {
  local message=$1
  echo -e "\e[34m[$(date)] >> $message\e[39m"
}

function install_cli {
  log "Installing the CLI..."
  sudo npm install ./load-donkey-cli -g
}

function install_dependencies {
  log "Installing dependencies..."
  log "| ApacheAB"
  sudo apt install apache2-utils
}

function main {
  install_cli
  install_dependencies
}

main