#mvn exec:java
rm -rf .vertx/
rm -rf file-uploads/
rm -rf jars/
rm -rf target/
mvn compile assembly:single
