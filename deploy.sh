echo "Switching to branch main"
git checkout master

echo "Building app.."
npm run build 

echo "Deploying files to server.."
scp -r dist/* majkeloess@207.154.203.148:/var/www/207.154.203.148/


echo "Deployed!"