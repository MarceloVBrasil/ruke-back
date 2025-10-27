export interface IEmailOptions {
    to: string
    from: { name: string, address: string }
    subject: string
    html?: string
    text?: string
    attachments?: IFile[]
}

interface IFile {
    filename: string
    content?: string
    encoding?: "base64"
}