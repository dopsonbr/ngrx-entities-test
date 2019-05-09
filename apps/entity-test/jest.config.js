module.exports = {
  name: 'entity-test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/entity-test/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
