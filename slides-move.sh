#! /bin/bash
while IFS="," read -r slide
do
    echo $slide
    ls -l public/${slide}
done <  topics.csv

ls -l public