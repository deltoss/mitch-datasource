module.exports = {
  repositoryUrl: 'https://github.com/deltoss/mitch-datasource.git',
  plugins: [
    // Default plugins
    ['@semantic-release/commit-analyzer', {
      releaseRules: [{
        // Add release rule for dependabot dependency updates
        type: 'chore',
        scope: 'deps-dev',
        release: 'patch',
      }],
    }],
    '@semantic-release/release-notes-generator',
    // Generates Changelogs
    ['@semantic-release/changelog', {
      'changelogFile': '../../CHANGELOG.md',
    }],
    '@semantic-release/npm',
    '@semantic-release/github',
    // Makes commits to GIT for changed files (i.e. changelog)
    ['@semantic-release/git', {
      'assets': ['../../CHANGELOG.md'], 
    }],
  ],
  debug: true,
};
