#! /bin/bash
while IFS="," read -r slide
do
    echo $slide
    mv -r ${slide} public
    ls -l public/${slide}
done <  topics.csv

ls -l public
rm -f .gitignore