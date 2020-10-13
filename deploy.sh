rm -rf build
rm -rf ../tigercao1.github.io/*
npm run build
sleep 5
mv -v build/* ../tigercao1.github.io
sleep 2
git -C ../tigercao1.github.io add .
git -C ../tigercao1.github.io commit -m "automated deployment"
git -C ../tigercao1.github.io push