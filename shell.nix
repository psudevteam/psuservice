{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  name = "react-auth-full-flow";
  buildInputs = [ pkgs.nodejs-18_x pkgs.nodePackages.yarn ];
  shellHook = ''
    export PATH=~/.npm-packages/bin:$PATH
    export NODE_PATH=~/.npm-packages/lib/node_modules  
  '';
}
