# Young Volunteers Reading Version 2

独立新版本；原 outputs/young-volunteers-lesson-live 保持不变。材料来源：修改后的volunteer matching.docx。

## 运行
Node.js 20+，npm install，然后 npm start。老师 /teacher.html，学生使用老师页 COPY STUDENT LINK。

## 流程
封面、lead-in、单词匹配、单词运用活动保持原样。阅读采用新原文（每段正文163词，标题计入每段165词）。g 为老师 Example 0；a–f 为六组题。每组完成全部六题 Key Idea；Text Bridge 每组负责 a–f 中一题。h、i 为出门条，保留现有六组在线共同提交、老师公布、柱状图及榜单流程。

f 的参考 Text Bridge 有四句，允许选1–4句；至少 C5+C7+C10 完整证明所有概念，C8可补充。e 接受 B5+B6 或 B5+B7，以及三句完整引用。

答案随老师公布后显示；PDF导出保留个人笔记及本组学习记录。课前活动不改。

## 独立部署
为保留旧线上版本，请使用新的 GitHub 仓库和新的 Render Node Web Service。将本项目文件放在新仓库根目录，保留public文件夹；不要上传node_modules。Build: npm install；Start: npm start；Health: /health；Root Directory 留空。新服务名可用 young-volunteers-reading-v2。

房间数据在内存中，重启前请下载PDF保存。
