export function enviarWhatsApp(numero, mensagem) {
    const link =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, '_blank');
}