# 戒毒所

本文描述在 Windows 环境下运行项目所需的步骤。

## 运行环境

- Git: <https://github.com/git-for-windows/git/releases/download/v2.25.1.windows.1/Git-2.25.1-64-bit.exe>

- nodejs 10.x: <https://nodejs.org/dist/latest-v10.x/node-v10.19.0-x64.msi>

  > node 版本应在 v10 及以上，**若采用 node v12 版本，则必须使用 yarn。**

- python 2.7: <https://www.python.org/ftp/python/2.7.17/python-2.7.17.amd64.msi>

- MSBuild 2017: <https://download.microsoft.com/download/5/F/7/5F7ACAEB-8363-451F-9425-68A90F98B238/visualcppbuildtools_full.exe>

  > 这里也可以采用 MSBuild 2019。

## 运行项目

检出项目（或采用图形化 TortoiseSVN 界面）：

```cmd
svn co http://win-tt00k4rah43:8080/svn/aw_mis/awd.cloud/awd.cloud.suppers/awd.cloud.suppers.webjs/web-template/gulp-template
```

运行项目：

```cmd
REM 注意 REM 开头表示注释

REM 安装 yarn
npm i yarn -g

REM 进入到项目目录
cd gulp-template

REM 采用 yarn 安装依赖
yarn

REM 运行项目
yarn dev:jds
```

## Issues

### Command failed

报错信息如下：

```text
error Command failed
Exit code: 128
Command: git
Arguments: fetch --tags
Directory: C:\Users\PC\AppData\Local\Yarn\Cache\v6\.tmp\4a848db32f46ad0fa21ddb0aefdc3402
Output:
fatal: not a git repository (or any of the parent directories): .git
```

删除目录 `C:\Users\PC\AppData\Local\Yarn\Cache\v6\.tmp` 后重试。

该问题可能为安装过程中强制终止导致的，避免强制终止安装过程可避免此问题发生。
