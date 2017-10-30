require('node-path-choice').blatant(__dirname)
const fs = require('fs')

function dependenciesLoose(parsedJson) {
    if (!parsedJson.dependencies) throw new Error('dependencies do not exist!')
    return Object.keys(parsedJson.dependencies)
}

function devDependenciesLoose(parsedJson) {
    if (!parsedJson.devDependencies) throw new Error('devDependencies do not exist!')
    return Object.keys(parsedJson.devDependencies)
}

function dependenciesStrict(parsedJson) {
    const depArray = dependenciesLoose(parsedJson)
    return depArray.map(name => name + '@' + parsedJson.dependencies[name])
}

function devDependenciesStrict(parsedJson) {
    const depArray = devDependenciesLoose(parsedJson)
    return depArray.map(name => name + '@' + parsedJson.devDependencies[name])
}

function dependenciesLooseCommand(parsedJson) {
    const depArray = dependenciesLoose(parsedJson)
    return depArray.reduce((concated, current) => concated + ' ' + current, 'npm i -S')
}

function dependenciesStrictCommand(parsedJson) {
    const depArray = dependenciesStrict(parsedJson)
    return depArray.reduce((concated, current) => concated + ' ' + current, 'npm i -S')
}

function devDependenciesLooseCommand(parsedJson) {
    const depArray = devDependenciesLoose(parsedJson)
    return depArray.reduce((concated, current) => concated + ' ' + current, 'npm i -D')
}

function devDependenciesStrictCommand(parsedJson) {
    const depArray = devDependenciesStrict(parsedJson)
    return depArray.reduce((concated, current) => concated + ' ' + current, 'npm i -D')
}

function get(filename) {
    const data = fs.readFileSync(filename)
    const parsedJson = JSON.parse(data)
    const out = {}
    if (parsedJson.dependencies) {
        out.dependencies = {
            loose: dependenciesLoose(parsedJson),
            strict: dependenciesStrict(parsedJson),
            command: {
                loose: dependenciesLooseCommand(parsedJson),
                strict: dependenciesStrictCommand(parsedJson)
            }
        }
    }
    if (parsedJson.devDependencies) {
        out.devDependencies = {
            loose: devDependenciesLoose(parsedJson),
            strict: devDependenciesStrict(parsedJson),
            command: {
                loose: devDependenciesLooseCommand(parsedJson),
                strict: devDependenciesStrictCommand(parsedJson)
            }
        }
    }
    return out
}

module.exports = get
