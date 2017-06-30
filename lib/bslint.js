'use babel';

import { CompositeDisposable } from 'atom';
import linter from './linter.js';

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
    
    run(){
        let editor;
        if (editor = atom.workspace.getActiveTextEditor()){
            let path = editor.getPath()
            linter.run(path)
        
    }
    
    // atom.workspace.observeTextEditors((editor) {
    //   return editor.onDidSave(() => {
    //      run()
    //   });
    // });

};
