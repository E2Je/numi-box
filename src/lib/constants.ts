// Central contact info - update here only
export const PHONE_DISPLAY = "050-7803791";
export const PHONE_INTL = "972507803791";
export const EMAIL = "batsh.pam@gmail.com";

export const WHATSAPP_BASE = `https://wa.me/${PHONE_INTL}`;

export const whatsappLink = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
