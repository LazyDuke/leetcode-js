#! /usr/bin/env node
const cmd = require('commander')
const ora = require('ora')
const chalk = require('chalk')
const { resolve } = require('path')
const { copy, existsSync, ensureFile } = require('fs-extra')

const generateFiles = async (dir, subDir) => {
  const waitingForCreateFiles = ['answer.js', 'first.js']
  const waitingForCopyFiles = ['index.html']

  for (let i = 0; i < waitingForCreateFiles.length; i++) {
    const distFilePath = resolve(
      process.cwd(),
      `./${dir}/${subDir}/${waitingForCreateFiles[i]}`
    )
    const spinner = ora({
      text: `${chalk.yellow(distFilePath)}`,
      color: 'green'
    })

    try {
      await ensureFile(distFilePath)
      spinner.succeed()
    } catch (error) {
      spinner.fail()
      console.log(chalk.red(error))
    }
  }

  for (let i = 0; i < waitingForCopyFiles.length; i++) {
    const distFilePath = resolve(
      process.cwd(),
      `./${dir}/${subDir}/${waitingForCopyFiles[i]}`
    )
    const spinner = ora({
      text: `${chalk.yellow(distFilePath)}`,
      color: 'green'
    })

    try {
      await copy(
        resolve(__dirname, `./template/${waitingForCopyFiles[i]}`),
        distFilePath
      )
      spinner.succeed()
    } catch (error) {
      spinner.fail()
      console.log(chalk.red(error))
    }
  }
}

const isFileExists = (dir, subDir) => {
  return existsSync(resolve(process.cwd(), `./${dir}/${subDir}`))
}

cmd.command('generate <dir> <subDir>').action(async (dir, subDir) => {
  if (isFileExists(dir, subDir)) {
    console.log(
      `${chalk.cyan(dir)}${chalk.red('下的')}${chalk.cyan(subDir)}${chalk.red(
        '已存在！'
      )}`
    )
    return
  }
  await generateFiles(dir, subDir)
  console.log(
    `${chalk.cyan(dir)}${chalk.green('下的')}${chalk.cyan(subDir)}${chalk.green(
      '已生成！'
    )}`
  )
})

cmd.parse(process.argv)
