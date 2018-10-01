#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_release () {
  git push origin --delete gh-pages
  git checkout -b gh-pages
  yarn run build-storybook
  git add .
  git commit -m "doc(storybook): added new version to page"
  git subtree push --prefix storybook-static origin gh-pages
}

setup_git
commit_release