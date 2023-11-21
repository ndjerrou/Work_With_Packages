// DEALING With yargs commands - how to make a CLI

const yargs = require('yargs');

// configure a command , with the following pattern : node index.js add --title="one title"
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler(args) {
    // fired when the add command is spotted
    console.log('Adding a new note...');
    console.log('args = ', args.title);
  },
  builder: {
    title: {
      demandOption: true,
      type: 'number',
      describe: 'title is the title of the note',
    },
  },
});

// making an other command avaiable in the CLI
yargs.command({
  commande: 'remove',
});

// mandatory so we can use yargs
yargs.parse();
