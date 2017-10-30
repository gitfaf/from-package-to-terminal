const fptt = require('../index')

describe('from package to ternimal', () => {
    describe('returns expected objects', () => {

        it('for package.json', () => {
            const out = fptt('package.json')
            expect(out).toBeDefined()
            expect(out.dependencies).toBeDefined()
            expect(out.devDependencies).toBeDefined()
        })
        it('for sampleJson/package.both.json', () => {
            const out = fptt('spec/sampleJson/package.both.json')
            expect(out).toBeDefined()
            expect(out.dependencies).toBeDefined()
            expect(out.devDependencies).toBeDefined()
        })
        it('for sampleJson/package.d.json', () => {
            const out = fptt('spec/sampleJson/package.d.json')
            expect(out).toBeDefined()
            expect(out.dependencies).toBeDefined()
            expect(out.devDependencies).toBeUndefined()
        })
        it('for sampleJson/package.dD.json', () => {
            const out = fptt('spec/sampleJson/package.dD.json')
            expect(out).toBeDefined()
            expect(out.dependencies).toBeUndefined()
            expect(out.devDependencies).toBeDefined()
        })
        it('for sampleJson/package.none.json', () => {
            const out = fptt('spec/sampleJson/package.none.json')
            expect(out).toBeDefined()
            expect(out.dependencies).toBeUndefined()
            expect(out.devDependencies).toBeUndefined()
        })
    })
    describe("returns correct values", () => {
        it('for package.json', () => {
            const out = fptt('package.json')
            expect(Array.isArray(out.dependencies.loose)).toBe(true)
            expect(Array.isArray(out.devDependencies.loose)).toBe(true)
            expect(Array.isArray(out.dependencies.strict)).toBe(true)
            expect(Array.isArray(out.devDependencies.strict)).toBe(true)
            expect(out.dependencies.loose.length).toBe(1)
            expect(out.devDependencies.loose.length).toBe(6)
            expect(out.dependencies.strict.length).toBe(1)
            expect(out.devDependencies.strict.length).toBe(6)
            
            expect(typeof out.dependencies.command.loose).toBe('string')
            expect(typeof out.devDependencies.command.loose).toBe('string')
            expect(typeof out.dependencies.command.strict).toBe('string')
            expect(typeof out.devDependencies.command.strict).toBe('string')

            expect(out.dependencies.command.loose).toBe('npm i -S node-path-choice')
            expect(out.dependencies.command.loose.length).toBe(25)
            expect(out.devDependencies.command.loose).toBe('npm i -D eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard jasmine')
            expect(out.devDependencies.command.loose.length).toBe(124)
            expect(out.dependencies.command.strict).toBe('npm i -S node-path-choice@^1.0.2')
            expect(out.dependencies.command.strict.length).toBe(32)
            expect(out.devDependencies.command.strict).toBe('npm i -D eslint-config-standard@^10.2.1 eslint-plugin-import@^2.8.0 eslint-plugin-node@^5.2.1 eslint-plugin-promise@^3.6.0 eslint-plugin-standard@^3.0.1 jasmine@^2.8.0')
            expect(out.devDependencies.command.strict.length).toBe(167)
        })
        it('for sampleJson/package.both.json', () => {
            const out = fptt('spec/sampleJson/package.both.json')
            expect(Array.isArray(out.dependencies.loose)).toBe(true)
            expect(Array.isArray(out.devDependencies.loose)).toBe(true)
            expect(out.dependencies.loose.length).toBe(1)
            expect(out.devDependencies.loose.length).toBe(6)
        })
        it('for sampleJson/package.d.json', () => {
            const out = fptt('spec/sampleJson/package.d.json')
            expect(Array.isArray(out.dependencies.loose)).toBe(true)
            expect(out.devDependencies).toBeUndefined
            expect(out.dependencies.loose.length).toBe(7)
        })
        it('for sampleJson/package.dD.json', () => {
            const out = fptt('spec/sampleJson/package.dD.json')
            expect(out.dependencies).toBeUndefined()
            expect(Array.isArray(out.devDependencies.loose)).toBe(true)
            expect(out.devDependencies.loose.length).toBe(7)
        })
        it('for sampleJson/package.none.json', () => {
            const out = fptt('spec/sampleJson/package.none.json')
            expect(out.dependencies).toBeUndefined()
            expect(out.devDependencies).toBeUndefined()
        })
    })
})
