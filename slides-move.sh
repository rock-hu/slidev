#! /bin/bash
while IFS="," read -r slide
do
    echo $slide
    mv -f ${slide} public
    pwd
    ls -l public/${slide}
done <  topics.csv

ls -l public