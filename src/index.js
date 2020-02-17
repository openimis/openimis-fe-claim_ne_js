import messages_en from "./translations/en.json";
import ClaimFilterByInsureeGender from "./components/ClaimFilterByInsureeGender";

const DEFAULT_CONFIG = {
  "translations": [{ key: "en", messages: messages_en }],
  "claim.Filter": [ClaimFilterByInsureeGender],
}

export const ClaimNeModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}