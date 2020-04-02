# Knowledge graph generation
Using YARRRML mapping language, CSV files with the data, and the [RMLMapper](https://github.com/rmlio/rmlmapper-java), 
we build the corresponding knowledge graph, materialized using RDF.

## How to build your own knowledge graph
- Update the CSV files in the folder `csv`.
- Install java and download last RMLMapper realase: https://github.com/RMLio/rmlmapper-java/releases
- Execute the RMLMapper with the RML rules in `mapping.rml.ttl`: 
`java -jar rmlmapper.jar -m mapping.rml.ttl -o data.nt`.
