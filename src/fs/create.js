import url from 'url'
import path from 'path'
import fs from 'fs/promises'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, 'files', 'fresh.txt')

const content = 'I am fresh and young'
const errorMessage = 'FS operation failed'

const create = async () => {
  try {
    await fs.writeFile(filePath, content, { flag: 'wx' })
  } catch {
    throw new Error(errorMessage)
  }
}

await create()
