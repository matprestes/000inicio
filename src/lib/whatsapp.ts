import { SUPPORT_PHONE } from '@/lib/promises';

export const WHATSAPP_PHONE = '5492236602699';

export interface BuildWhatsAppUrlOptions {
  message: string;
  source?: string;
  phone?: string;
}

export function buildWhatsAppUrl({
  message,
  phone = WHATSAPP_PHONE,
}: BuildWhatsAppUrlOptions): string {
  const cleanPhone = (phone || SUPPORT_PHONE).replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
