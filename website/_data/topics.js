const {query} = require('graphqlld-on-file');

module.exports = async () => {
 let result = await query('../kg/data.nt',{
   "name": { "@id": "http://schema.org/name", "@singular": true },
   "keyword": { "@id": "http://schema.org/keyword", "@singular": true},
   "CreativeWork": "http://schema.org/CreativeWork"
 },`{... on CreativeWork {name keyword}}`);

  const topics = {};

  result.forEach(r => {
    const {name, keyword} = r;

    if (!topics[name]) {
      topics[name] = [];
    }

    topics[name].push(keyword);
  });

  result = [];
  const mainTopics = Object.keys(topics);

  for (let m of mainTopics) {
    result.push({name: m, subTopics: topics[m]});
  }

 return result;
};
