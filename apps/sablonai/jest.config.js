module.exports = {
  name: 'sablonai',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sablonai',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
