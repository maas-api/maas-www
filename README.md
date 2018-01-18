# MaaS-API.org
Sourcecode for the [MaaS-API.org](https://maas-api.org) documentation project.

# Use
In order to use the files in this repository, you will need to install some dependencies:

- [Hugo](https://gohugo.io/) static site generator
- [NPM](https://www.npmjs.com/get-npm) to handle dependencies
- [Git](https://git-scm.com/downloads) to deploy changes

## Submodule
There is one submodule in this project, which can be initialized with the following commands:

```
$ git submodule init
$ git submodule update
```

## Build
In order to build the static site, simply run the following comand:

```
hugo
```

There will be a (new) folder called `public` containing a static HTML site.

## Deploy
Once the site is built, it can be deployed to GitHub Pages with the following command:

```
npm run-script deploy
```
