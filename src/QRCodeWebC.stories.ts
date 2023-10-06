import type { Meta, StoryObj } from "@storybook/web-components";
import "./QRCodeWebC";
import { html } from "lit";

const meta: Meta = {
  component: "qrcode-webc",
  argTypes: {
    errorCorrectionLevel: {
      options: ['L', 'M', 'Q', 'H'],
      control: 'radio'
    }
  }
};
export default meta;

export const QRCode: StoryObj = {
  args: {
    value: "hello",
    width: 200,
    errorCorrectionLevel: "L"
  },
  render: (args) =>
    html`
      <div style="display: flex; flex-direction: column; align-items: center;">
        <qrcode-webc value="${args.value}" width="${args.width}"></qrcode-webc>
        <section>
          <p>
            To use this in your project add <em>qrcode-webc</em> element into
            your code
          </p>
          <p><strong>Required param: </strong>value</p>
          <p><strong>Optional params: </strong>width, errorCorrectionLevel</p>
          <p>
            <strong>Github link: </strong
            ><a href="https://github.com/eBitzu/qrcode-webc">qrcode-webc</a>
          </p>
          <p>
            <strong>My portfolio: </strong
            ><a href="https://gr-cv.vercel.app/">here</a>
          </p>
        </section>
      </div>
    `,
};
