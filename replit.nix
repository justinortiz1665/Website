
{ pkgs }: {
  deps = [
    pkgs.nodejs-20_x
    pkgs.nodePackages.typescript
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.npm
    pkgs.yarn
    pkgs.nodePackages.postcss
    pkgs.nodePackages.tailwindcss
  ];
}
