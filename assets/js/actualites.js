//var msnry = new Masonry('.wall', {gutter: 15});

var masonry = new Macy({
        container: '.wall',
        trueOrder: false,
        waitForImages: true,
        debug: true,
        margin: {
            x: 20,
            y: 20
        },
        columns: 4,
        breakAt: {
          991: {
            columns: 3,
            margin: {
                x: 20,
                y: 20
            }
          },
          767: {
            columns: 1,
            margin: {
                x: 20,
                y: 10
            }
          }
        }
      });