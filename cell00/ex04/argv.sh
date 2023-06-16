

if [ $# -gt 2 ]
then
echo "$1\n$2\n$3"
elif [ $# -eq 2 ]
then
echo "$1\n$2"
elif [ $# -eq 1 ]
then
echo "$1"
elif [ $# -eq 0 ]
then
echo No arguments supplied
fi
