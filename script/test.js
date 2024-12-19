// data.js
import fs from 'fs/promises'

async function writeDataToFile() {
  try {
    await fs.writeFile('output.js', 'Hello, world!')
    console.log('Data written successfully!')
  } catch (err) {
    console.error('Error writing file:', err)
  }
}

writeDataToFile()
