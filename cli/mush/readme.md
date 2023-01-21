# mush

Command line via node shell access via the binary executable in the package.json file.

### setup

- run `npm install` in projects root: this installs the node too from bin.
- in case of file permission issues during initialization
  - run `sudo chown -R $USER /usr/local/lib` to update lib dir owner
  - run installation command with `sudo` level `sudo npm install -g .`

### todo

- update architecture and allow support for properly abstracted methods/features.
