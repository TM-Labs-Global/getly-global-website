export type FlagSize = 16 | 24 | 32 | 48 | 64;

export function getFlagUrl(isoCode: string, size: FlagSize = 24): string {
  if (!isoCode) return `/flags/${size}/US.png`;
  const normalizedCode = isoCode.trim().toUpperCase();
  return `/flags/${size}/${normalizedCode}.png`;
}
