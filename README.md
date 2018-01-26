# from-package-to-terminal

Parses your package json files and returns the npm commands that will be needed to install the dependencies.

## Usage

```bash

  # global
  npm i -g from-package-to-terminal

  # or as dev dependency
  npm i -D from-package-to-terminal

  # or as dependency
  npm i -S from-package-to-terminal

```

### Via Callback

```javascript

  const fptt = require('from-package-to-terminal')

  fptt('./package.json', deps => {
    console.log(deps.dependencies.loose)
    console.log(deps.dependencies.strict)
    console.log(deps.dependencies.command.loose)
    console.log(deps.dependencies.command.loose)
    console.log(deps.devDependencies.loose)
    console.log(deps.devDependencies.strict)
    console.log(deps.devDependencies.command.loose)
    console.log(deps.devDependencies.command.loose)
  })

```


#### Outcome

```javascript

  [ 'node-path-choice' ]
  [ 'node-path-choice@^2.0.0' ]
  npm i -S node-path-choice
  npm i -S node-path-choice
  [ 'eslint',
    'eslint-config-standard',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-standard',
    'jasmine' ]
  [ 'eslint@^4.16.0',
    'eslint-config-standard@^11.0.0-beta.0',
    'eslint-plugin-import@^2.8.0',
    'eslint-plugin-node@^5.2.1',
    'eslint-plugin-promise@^3.6.0',
    'eslint-plugin-standard@^3.0.1',
    'jasmine@^2.9.0' ]
  npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard jasmine
  npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard jasmine
  { dependencies:
    { loose: [ 'node-path-choice' ],
      strict: [ 'node-path-choice@^2.0.0' ],
      command:
        { loose: 'npm i -S node-path-choice',
          strict: 'npm i -S node-path-choice@^2.0.0' } },
    devDependencies:
    { loose:
        [ 'eslint',
          'eslint-config-standard',
          'eslint-plugin-import',
          'eslint-plugin-node',
          'eslint-plugin-promise',
          'eslint-plugin-standard',
          'jasmine' ],
      strict:
        [ 'eslint@^4.16.0',
          'eslint-config-standard@^11.0.0-beta.0',
          'eslint-plugin-import@^2.8.0',
          'eslint-plugin-node@^5.2.1',
          'eslint-plugin-promise@^3.6.0',
          'eslint-plugin-standard@^3.0.1',
          'jasmine@^2.9.0' ],
      command:
        { loose: 'npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard jasmine',
          strict: 'npm i -D eslint@^4.16.0 eslint-config-standard@^11.0.0-beta.0 eslint-plugin-import@^2.8.0 eslint-plugin-node@^5.2.1 eslint-plugin-promise@^3.6.0 eslint-plugin-standard@^3.0.1 jasmine@^2.9.0' } } }

```

### Via return value

```javascript

  const fptt = require('from-package-to-terminal')

  const deps = fptt('./package.json')

  console.log(deps.dependencies.loose)
  console.log(deps.dependencies.strict)
  console.log(deps.dependencies.command.loose)
  console.log(deps.dependencies.command.loose)
  console.log(deps.devDependencies.loose)
  console.log(deps.devDependencies.strict)
  console.log(deps.devDependencies.command.loose)
  console.log(deps.devDependencies.command.loose)

```

#### Outcome

```javascript

  console.log(deps.dependencies.loose)
  [ 'node-path-choice' ]

  console.log(deps.dependencies.strict)
  [ 'node-path-choice@^2.0.0' ]

  console.log(deps.dependencies.command.loose)
  npm i -S node-path-choice

  console.log(deps.dependencies.command.loose)
  npm i -S node-path-choice

  console.log(deps.devDependencies.loose)
  [ 'eslint',
    'eslint-config-standard',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-standard',
    'jasmine' ]

  console.log(deps.devDependencies.strict)
  [ 'eslint@^4.16.0',
    'eslint-config-standard@^11.0.0-beta.0',
    'eslint-plugin-import@^2.8.0',
    'eslint-plugin-node@^5.2.1',
    'eslint-plugin-promise@^3.6.0',
    'eslint-plugin-standard@^3.0.1',
    'jasmine@^2.9.0' ]

  console.log(deps.devDependencies.command.loose)
  npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard jasmine

  console.log(deps.devDependencies.command.loose)
  npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard jasmine


```

## License

MIT &copy; Git Faf 2017 - 2018
