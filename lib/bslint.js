'use babel';

import { CompositeDisposable } from 'atom';
import { spawn } from 'child_process';
// import linter from './linter.js';

export default {

    subscriptions: null,

    activate() {
        this.subscriptions = new CompositeDisposable();

        // Register command that toggles this view
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'bslint:run': () => this.run()
        }));

    },

    deactivate() {
        this.subscriptions.dispose();
    },

    run() {
        let editor
        if (editor = atom.workspace.getActiveTextEditor()){
            let path = editor.getPath()
            atom.notifications.addSuccess(path)

            const bslint = spawn('python3', ['-V']);

            bslint.stdout.on('data', (data) => {
                if (!data.toString().startsWith("Python 3")) {
                    atom.notifications.addError("Please download Python 3 to use this tool")
                }
            //   console.log(`${data}`);
            });

            bslint.stderr.on('data', (data) => {
              console.log(`stderr: ${data}`);
            });

            bslint.on('close', (code) => {
              console.log('No warnings/errors found, good job :)')
            });
        }

    }

    // atom.workspace.observeTextEditors((editor) {
    //   return editor.onDidSave(() => {
    //      run()
    //   });
    // });

};
