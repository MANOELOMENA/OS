//--------------Atv1---------------------
const os = require("node:os")

// console.log(os.platform())
// console.log(os.arch())

//-------------Atv2----------------------

//1ºForma
// console.log(os.cpus()) Errada provavelmente

//2ºForma
// const cpus = os.cpus()

// cpus.forEach((cpu, index) => {
//     console.log(`Processador ${index + 1}:`)
//     console.log('Modelo:', cpu.model)
//     console.log('Velocidade:', cpu.speed + ' MHz')
//     console.log('Identificador:', cpu.model)
// })

//--------------Atv3------------------------
// const totalMemoryBytes = os.totalmem()
// console.log('Total de Memória:', totalMemoryBytes, 'bytes')
// const totalMemoryKB = totalMemoryBytes / 1024
// const totalMemoryMB = totalMemoryKB / 1024
// const totalMemoryGB = totalMemoryMB / 1024

// console.log('Total de Memória(KB):', totalMemoryKB.toFixed(2), 'KB')
// console.log('Total de Memória(MB):', totalMemoryMB.toFixed(2), 'MB')
// console.log('Total de Memória(GB):', totalMemoryGB.toFixed(2), 'GB')

//---------------Atv4------------------------
// console.log('Nome do Usuário:', os.userInfo().username)
// console.log('Diretório:', os.homedir())

//---------------Atv5-----------------------
// console.log('Nome do Sistema:', os.type())
// console.log('Versão do Sistema:', os.release())
// console.log('Plataforma do Sistema:', os.platform())

//------------------FIM--------------------------