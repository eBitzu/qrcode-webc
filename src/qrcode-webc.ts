import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { QRCodeErrorCorrectionLevel, toCanvas } from "qrcode";
/**
 * An example element.
 *
 * @slot - This element has a slot
 *
 */
@customElement("qrcode-webc")
export class QRCodeWebC extends LitElement {
  @property()
  errorCorrectionLevel?: QRCodeErrorCorrectionLevel = "L";

  @property()
  value: string = "";

  @property()
  width?: number = 200;

  firstUpdated(updates: any) {
    super.firstUpdated(updates);

    toCanvas(
      this.shadowRoot?.querySelector(`#${this.id}_canvas`),
      this.value,
      {
        errorCorrectionLevel: this.errorCorrectionLevel,
        width: this.width,
        color: { dark: "#000", light: "#FFF" },
      },
      (er) => {
        if (er) {
          console.error("[QR_WC]: ", er);
        }
      }
    );
  }
  render() {
    return html`
      <div>
        <canvas
          id="${this.id}_canvas"
          width="${this.width}"
          height="${this.width}"
        ></canvas>
        <slot></slot>
      </div>
    `;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "qrcode-webc": QRCodeWebC;
  }
}
