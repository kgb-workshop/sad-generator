const {query} = require('graphqlld-on-file');

module.exports = async () => {
  //TODO there is either a bug in the query or in the graphql-ld code

  let result = await query('../kg/data.nt', {
    "name": { "@id": "http://schema.org/name", "@singular": true },
    "review": { "@id": "http://schema.org/review", "@singular": true },
    "papertype": { "@id":"http://example.com/paperType", "@singular": true },
    "creator": { "@id":"http://purl.org/dc/terms/creator" },
    "item": { "@id":"http://purl.org/co/item" },
    "index": { "@id":"http://purl.org/co/index", "@singular": true },
    "itemContent": { "@id":"http://purl.org/co/itemContent", "@singular": true },
    "Article": "http://schema.org/Article",
  }, '{ ... on Article {name review papertype creator {item {index itemContent {name}}} } }');

  const papers = {};

  result.forEach(paper => {
    if (!papers[paper.name]) {
      papers[paper.name] = JSON.parse(JSON.stringify(paper));
      papers[paper.name].creator = [];
    }

    const author = {
      index: paper.creator[0].item[0].index[0],
      name: paper.creator[1].item[0].itemContent[0].name[0]
    };

    papers[paper.name].creator.push(author);
  });

  result = Object.values(papers);

  result.sort( (a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });

  result.forEach(r => {
    r.creator.sort( (a, b) => {
      if (parseInt(a.index) > parseInt(b.index)) {
        return 1;
      } else {
        return -1;
      }
    });
  });

  return result;
};
