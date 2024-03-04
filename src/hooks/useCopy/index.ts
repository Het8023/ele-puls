import { ElMessage } from "element-plus";

export const useCopy = (text:string)=>{
    // 创建文板框
    let input = document.createElement('input')

    input.value = text

    document.body.appendChild(input)

    input.select()

    // 执行浏览器复制命令
    document.execCommand('Copy')

    // 删除文本框
    document.body.removeChild(input)

    ElMessage.success('复制成功')
}