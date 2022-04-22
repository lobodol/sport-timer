# sport-timer
A simple Vue app for musculation.

Live app is available here: [https://lobodol.github.io/sport-timer/](https://lobodol.github.io/sport-timer/)

# Development
```bash
make dev
```

Then, go to [https://sport-timer.docker.localhost](https://sport-timer.docker.localhost).

# Deployment
The app is deployed on GitHub pages. 

```bash
# build
make build.app

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lobodol/sport-timer.git master:gh-pages

cd -
```