# rsschool-node-js-backend-course

Please for testing:

1. Go to the root folder of the repository

2. Use scripts from package.json

 "scripts": {
    "fs:create": "node src/fs/create.js",
    "fs:copy": "node src/fs/copy.js",
    "fs:rename": "node src/fs/rename.js",
    "fs:delete": "node src/fs/delete.js",
    "fs:list": "node src/fs/list.js",
    "fs:read": "node src/fs/read.js",
    "cli:env": "node src/cli/env.js",
    "cli:args": "node src/cli/args.js",
    "modules:cjsToEsm": "node src/modules/cjsToEsm.mjs",
    "hash:calcHash": "node src/hash/calcHash.js",
    "streams:read": "node src/streams/read.js",
    "streams:write": "node src/streams/write.js",
    "streams:transform": "node src/streams/transform.js",
    "zlib:compress": "node src/zlib/compress.js",
    "zlib:decompress": "node src/zlib/decompress.js",
    "wt:main": "node src/wt/main.js",
    "cp:cp": "node src/cp/cp.js"
  },
  with npm run like in the example below:

  """
    npm run fs:create
  """

  **For testing CLI please use**

  1. For env:

  $env:RSS_1='Hello'; $env:RSS_2='World'; npm run cli:env

  2. For Args:

  npm run cli:args
