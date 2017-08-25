//var msnry = new Masonry('.wall', {gutter: 15});

var masonry = new Macy({
        container: '.wall',
        trueOrder: false,
        waitForImages: true,
        debug: true,
        margin: {
            x: 25,
            y: 25
        },
        columns: 4,
        breakAt: {
          991: {
            columns: 3,
            margin: {
                x: 25,
                y: 25
            }
          },
          767: {
            margin: {
                x: 25,
                y: 25
            }
          },
          500: {
            columns: 3,
            margin: 10
          }
        }
      });