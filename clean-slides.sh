#! /bin/bash
ls -l public
while IFS="," read -r slide
do
    echo $slide
    rm -rf ${slide} 
    rm -rf public/${slide} 
done <  topics.csv
