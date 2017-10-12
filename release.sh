echo "What type of update is this: major, minor, patch?"
read version

echo "Type your commit message:"
read message

V="$(npm --no-git-tag-version version $version -f)"
npm run bundle
git add -A
git commit -m "$message"
git tag -a $V -m "$message"
git push origin master --tags
npm publish --access public