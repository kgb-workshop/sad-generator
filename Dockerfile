FROM ubuntu:18.04

RUN apt-get update && apt-get install -y openjdk-8-jdk npm wget git
RUN mkdir /sad-generator
COPY . /sad-generator

CMD ["tail", "-f", "/dev/null"]