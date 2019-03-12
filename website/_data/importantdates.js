const {query} = require('graphqlld-on-file');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

module.exports = async () => {
  const result = await query('../kg/data.nt', {
    "title": { "@id": "http://schema.org/name", "@singular": true },
    "description": { "@id": "http://schema.org/description", "@singular": true },
    "date": { "@id": "http://schema.org/startDate", "@singular": true },
    "subEvent": { "@reverse": "http://schema.org/subEvent", "@singular": true },
    "Event": "http://schema.org/Event",
    "workshop": "http://example.com/resources/Event/example-event"
  },`{... on Event {title description date subEvent(_:workshop)}}`);

  result.sort( (a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  result.forEach(importantDate => {
    const date = new Date(importantDate.date);
    importantDate.date = {
      day: date.getDate(),
      monthYear: monthNames[date.getMonth()] + ', ' + date.getFullYear()
    };
  });

  return result;
};
