/**
 * @module
 *
 * Rich Messages authoring for the Telegram Bot API (Bot API 10.1
 * {@link https://core.telegram.org/bots/api#rich-messages | rich messages}).
 *
 * Re-exports `@gramio/format/rich` so `gramio` users get the `rich\`\`` tag and block helpers
 * without depending on `@gramio/format` directly. Pass the resulting `RichString` to
 * `ctx.send` / `ctx.reply` / `ctx.editText` (routed to `sendRichMessage`) or stream it with
 * `ctx.streamRichMessage`.
 *
 * @example
 * ```ts
 * import { rich, heading, list } from "gramio/rich";
 * import { bold, format } from "gramio";
 *
 * ctx.send(rich`
 *   ${heading(1, "Q1 Report")}
 *   ${list([format`Revenue: ${bold("$1.2M")}`, "42k users"])}
 * `);
 * ```
 */
export * from "@gramio/format/rich";
