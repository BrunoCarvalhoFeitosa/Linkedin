export const cepFormatMask = (ev: any) => {
    ev.target.maxLength = 9
    let { value } = ev.target
  
    value = value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1")
  
    ev.target.value = value
}

export const phoneFormatMask = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    const inputElement = ev.currentTarget as HTMLInputElement
    let value = inputElement.value

    value = value.replace(/\D/g, "")

    if (value.length <= 2) {
        value = `(${value}`
    } else if (value.length <= 7) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`
    } else if (value.length <= 11) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
    } else {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`
    }

    inputElement.value = value
}

export const formatNameToUrl = (name: string) => {
    return name
        .toLowerCase() // Converte para minúsculas
        .normalize('NFD') // Normaliza a string para separar acentuação
        .replace(/[\u0300-\u036f]/g, '') // Remove acentuação
        .replace(/[^\w\s]/g, '') // Remove caracteres especiais
        .trim() // Remove espaços extras no início e no fim
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/-+$/, ''); // Remove hífens extras no final
}

export const reformatName = (name: string) => {
    return name
        .toLowerCase() // Converte toda a string para minúsculas
        .replace(/-/g, ' ') // Substitui hífens por espaços
        .replace(/\b\w/g, char => char.toUpperCase()); // Capitaliza a primeira letra de cada palavra
    }