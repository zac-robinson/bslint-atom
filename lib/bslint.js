'use babel';

import { CompositeDisposable } from 'atom';

export default {

    subscriptions: null,

    activate() {

        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
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
        
    }
};
