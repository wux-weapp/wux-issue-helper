export default function createPreview(issueType: string, values: any, locale: string) {
  if (issueType === 'bug') {
    return createBugPreview(values, locale);
  }
  return createFeaturePreview(values, locale);
}

function createBugPreview({
  version,
  weapp,
  react,
  system,
  browser,
  reproduction,
  steps,
  expected,
  actual,
  extra,
  repo,
}: any, locale: string) {
if (locale === 'zh') {
  return `
### 重现链接
${createReproductionLink(reproduction) || '无'}

### 重现步骤
${steps}

### 期望的结果是什么？
${expected}

### 实际的结果是什么？
${actual}

| 环境 | 版本 |
|---|---|
| Wux | ${version} |
| 微信小程序基础库 | ${weapp} |
| 系统 | ${system} |

${extra ? `---\n${extra}` : ''}
`.trim();
}  
  return `
### Reproduction link
${createReproductionLink(reproduction) || 'null'}

### Steps to reproduce
${steps}

### What is expected?
${expected}

### What is actually happening?
${actual}

| Environment | Info |
|---|---|
| Wux | ${version} |
| Wechat Miniprogram | ${weapp} |
| System | ${system} |

${extra ? `---\n${extra}` : ''}
`.trim();
}

function createFeaturePreview({ motivation, proposal }: any, locale: string) {
if (locale === 'zh') {
  return `
### 你期望的 API 是怎样的？
${motivation}

### 请确保将 issue 发往相关的仓库。
${proposal}
`.trim();
}
  return `
### What problem does this feature solve?
${motivation}

### What does the proposed API look like?
${proposal}
`.trim();
}

function createReproductionLink(link: string) {
  if (!link) {
    return;
  }

  if (link.indexOf('codesandbox.io') >= 0) {
    return `[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](${link})`;
  }

  return `[${link}](${link})`;
}
