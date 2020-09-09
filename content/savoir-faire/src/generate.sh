#!/bin/bash

for level1 in cto developper devops expert
do
    for level2 in python php greenit
    do
        for level3 in innovation responsabilite paysan
        do
            cat intro.md <(echo) $level1.md <(echo) $level2.md <(echo) $level3.md > ../$level1-$level2-$level3.md <(echo) footer.md
            sed -i "s/slug_tag/$level1-$level2-$level3/g" ../$level1-$level2-$level3.md
        done
    done
done
