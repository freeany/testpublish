# Electron App

一个使用 Electron Forge 构建的简单 Electron 应用程序。

## 开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```

### 生成图标
```bash
npm run generate-icons
```

### 构建应用
```bash
npm run make
```

### 发布到 GitHub Releases
```bash
npm run publish
```

## 自动化发布

本项目配置了 GitHub Actions 自动化工作流，当推送带有版本标签的提交时会自动构建并发布到 GitHub Releases。

### 发布新版本

1. 更新 `package.json` 中的版本号
2. 创建并推送版本标签：
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
3. GitHub Actions 会自动构建 macOS 和 Windows 版本并发布到 Releases

## 支持的平台和打包格式

### Windows 系统
- **ZIP 包**：便携版应用，解压即用
- **Squirrel 安装包**：`111-setup.exe` - 带安装向导的安装程序
- **NuGet 包**：`111-1.0.0-full.nupkg` - 完整应用包

### macOS 系统
- **ZIP 包**：包含 `.app` 应用程序的压缩包
- **DMG 包**：`111 Installer.dmg` - 标准的 macOS 安装镜像文件

所有包都包含相应平台的图标文件（Windows: .ico, macOS: .icns）

## 图标配置

项目包含完整的图标配置：
- `assets/icon.svg` - 源图标文件
- `assets/icon.ico` - Windows 图标
- `assets/icon.icns` - macOS 图标

如需更换图标，请替换 `assets/icon.svg` 文件，然后运行 `npm run generate-icons` 重新生成图标。

## 配置说明

在使用前，请确保：

1. 在 `forge.config.js` 中更新 GitHub 仓库信息：
   ```javascript
   publishers: [
     {
       name: '@electron-forge/publisher-github',
       config: {
         repository: {
           owner: 'your-github-username',
           name: 'your-repo-name'
         },
         prerelease: false
       }
     }
   ]
   ```

2. 确保 GitHub 仓库已启用 Actions 并具有适当的权限。