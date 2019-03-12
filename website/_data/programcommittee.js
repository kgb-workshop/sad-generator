const {query} = require('graphqlld-on-file');

module.exports = async () => {
  const result = await query('../kg/data.nt', {
    "name": { "@id": "http://schema.org/name", "@singular": true },
    "affiliation": { "@id": "http://schema.org/memberOf", "@singular": true },
    "event": { "@id": "http://schema.org/performerIn", "@singular": true },
    "Person": "http://schema.org/Person",
    "workshop": "http://example.com/resources/Event/example-event"
  }, `{ ... on Person {name affiliation event(_:workshop)} }`);

  result.sort( (a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });

  return result;
};
