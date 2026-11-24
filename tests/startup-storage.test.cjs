const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

test('starting the main process preserves saved progress and keeps IPC storage usable', () => {
    const saved = new Map([['progress', ['first entry']]]);
    const listeners = {};
    let clears = 0;
    class Store {
        clear() { clears++; saved.clear(); }
        get(key) { return saved.get(key); }
        set(key, value) { saved.set(key, value); }
    }
    const electron = {
        app: { on() {} },
        ipcMain: { on: (name, listener) => { listeners[name] = listener; } },
    };
    const source = fs.readFileSync(path.join(__dirname, '..', 'src', 'electron-starter.js'), 'utf8');
    vm.runInNewContext(source, {
        require: (name) => name === 'electron-store' ? Store : name === 'electron' ? electron : require(name),
        __dirname: path.join(__dirname, '..', 'src'),
        process: { platform: 'darwin' },
        console: { log() {} },
    });
    assert.equal(clears, 0);
    const read = {};
    listeners['electron-store-get'](read, 'progress');
    assert.deepEqual(read.returnValue, ['first entry']);
    listeners['electron-store-set']({}, 'progress', ['first entry', 'second entry']);
    assert.deepEqual(saved.get('progress'), ['first entry', 'second entry']);
});
