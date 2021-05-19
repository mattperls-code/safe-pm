#!/bin/bash

if [[ $0 == /* ]];
    then 
        cd "${0/run.bash/}"
        cd "..";
    else
        path=$PWD
        path+="/"
        path+=$0
        cd "${path/run.bash/}"
        cd "..";
fi;

npm link
cd ../test

safe-pm $1 $2