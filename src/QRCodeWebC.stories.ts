import type { Meta, StoryObj } from "@storybook/web-components";
import "./QRCodeWebC";
import { html } from "lit";

const meta: Meta = {
  component: "qrcode-webc",
};
export default meta;

export const QRCode: StoryObj = {
  args: {
    value: "hello",
    width: 200
  },
  render: (args) =>
    html`<qrcode-webc
      value="${args.value}"
      width="${args.width}"
    ></qrcode-webc>`,
};
