import "@unocss/reset/tailwind-compat.css";
import { grays } from "./src/index";

const { cancel, apply } = grays("html", 90);

window.__cancel = cancel;
window.__apply = apply;
