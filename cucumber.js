module.exports = {
  default: {
    parallel: 1,
    format: ['html:reports/report.html',
      'junit:reports/report.xml'
    ],
    require: ['step-definitions/**/*.js'],
    paths: ['features/**/*.feature']
  }
}