#! /bin/bash
while IFS="," read -r slide
do
    echo $slide
    cp -r ${slide} public
    ls -l public/${slide}
    echo "<base href=\"https://rock-hu.github.io/slidev/${slide}/\">"
    export base="<base href=\"https://rock-hu.github.io/slidev/${slide}/\">"
    echo $base
    sed "4 i ${base}" public/${slide}/index.html > index.html
    mv index.html public/${slide}/index.html
    sed "4 i ${base}" public/${slide}/404.html > 404.html
    mv 404.html public/${slide}/404.html
done <  topics.csv
ls -l public