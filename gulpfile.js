const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task(
  'deploy',
  shell.task(
    [
      'git checkout -b gh-pages-tmp',
      // Remove .gitignore, so it won't be active
      'rm .gitignore',
      // ignore node modules for temp gh pages branch commit
      'echo "node_modules/" >> .gitignore',
      // Add all files, including the newly built site files
      'git add .',
      // Commit all changes for deployment
      'git commit -am "Remove gitignore; add built docs"',
      // Delete remote (origin) gh-pages branch
      'git push origin --delete gh-pages',
      // Push the 'public' folder to the upstream Github Pages branch
      'git subtree push --prefix public origin gh-pages',
      // Switch back to master branch
      'git checkout master',
      // Cleanup temp GitHub Pages branch
      'git branch -D gh-pages-tmp',
      // Put .gitignore back in place
      'git reset --hard HEAD'
    ]
  )
);
