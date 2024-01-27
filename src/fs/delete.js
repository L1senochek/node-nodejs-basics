import url from 'url'
import path from 'path'
import fs from 'fs/promises'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const errorMessage = 'FS operation failed'

const deleteFilePath = path.join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
  try {
    await fs.access(deleteFilePath)
    await fs.unlink(deleteFilePath)
  } catch {
    throw new Error(errorMessage)
  }
}

await remove()
