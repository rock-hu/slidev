#! /bin/bash
while IFS="," read -r slide
do
    echo $slide
    cp -r ${slide} public
    ls -l public/${slide}
done <  topics.csv

ls -l public