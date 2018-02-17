var Metalsmith  = require('metalsmith');

Metalsmith(__dirname)
    .source('./source')       // read files from here
    .destination('./build')    // write files to here
    .use(require('metalsmith-markdown')())
    .build(err => {             // build!
    if (err) throw err;     // handle errors
});
