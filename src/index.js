import messages_en from "./translations/en.json";
import ClaimFilterByInsureeGender from "./components/ClaimFilterByInsureeGender";
import ClaimFilterHasAttachments from "./components/ClaimFilterHasAttachments";

const DEFAULT_CONFIG = {
  "translations": [{ key: "en", messages: messages_en }],
  "claim.ReviewsFilter": [ClaimFilterByInsureeGender,ClaimFilterHasAttachments],
}

export const ClaimNeModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}