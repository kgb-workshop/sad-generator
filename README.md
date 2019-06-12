# SAD Generator
The SAD Generator,
a Semantic Academic-event Dissemination Generator,
uses Semantic Web technologies to generate a knowledge graph and 
website for academic events.
This knowledge graph provides the data for generating the website.
Furthermore, the knowledge graph can be made available via, e.g, 
a SPARQL endpoint or a Triple Pattern Fragments server.

## Usage

Local:
- Build the knowledge graph as described [here](./kg/README.md).
- Generate the website as described [here](./website/README.md).

Using docker:
```
docker-compose up -d
./run.sh
```
Changes can be made locally at kg and website folders

## Used in the wild

- [KGB Workshop](http://kgb-workshop.org)
- [Sem4Tra Workshop](https://sem4tra.linkeddata.es/)

## License
[MIT License](./LICENSE)


## Demo paper at ESWC2019
Heyvaert, P., Chaves-Fraga, D., Priyatna, F., Dimou, A., & Sequeda, J. (2019, June). SAD Generator: eating our own dog food to generate KGs and websites for academic events. In European Semantic Web Conference. Springer, Cham. [PDF](https://pieterheyvaert.com/publications/heyvaert2019sad/paper.pdf)
