async function getBaseEmail(senderName: string): Promise<string> {
    let base = await getHeaderText();
    
    base += `\nOlá ${senderName}, gostaria de me inscrever em uma vaga\n\n`;
    base += "\n Estou deixando o meu currículo em anexo, caso queira dar uma olhada.\n\n";
    base += "Aguardo o seu retorno, obrigado!";
    
    return base;
}

async function getHeaderText(): Promise<string> {
    return "EMAIL PARA VOCÊ\n"
}

export {
    getBaseEmail
};