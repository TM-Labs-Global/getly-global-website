export const APP_STORE_URL = process.env.NEXT_PUBLIC_APPSTORE_URL || "https://apps.apple.com/ng/app/getly/id6759157746";
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAYSTORE_URL || "https://play.google.com/store/apps/details?id=com.getly.app&hl=en";

export function getStoreLink(platform: "ios" | "android" | "smart"): string {
  if (platform === "ios") return APP_STORE_URL;
  if (platform === "android") return PLAY_STORE_URL;
  
  // Smart platform detection
  if (typeof navigator !== "undefined") {
    const userAgent = navigator.userAgent || navigator.vendor || "";
    if (/android/i.test(userAgent)) {
      return PLAY_STORE_URL;
    }
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return APP_STORE_URL;
    }
  }
  return APP_STORE_URL;
}
