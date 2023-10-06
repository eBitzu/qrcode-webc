import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { QRCodeErrorCorrectionLevel, toCanvas } from "qrcode";
/**
 * @param errorCorrectionLevel: QRCodeErrorCorrectionLevel
 * @param value: string
 * @param width: number
 */
@customElement("qrcode-webc")
export class QRCodeWebC extends LitElement {
  @property()
  errorCorrectionLevel?: QRCodeErrorCorrectionLevel = "L";

  @property()
  value: string = "";

  @property()
  width?: number = 200;

  updated(updates: any) {
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
      <canvas
        id="${this.id}_canvas"
        width="${this.width}"
        height="${this.width}"
      ></canvas>
    `;
  }
}

declare global {
  export interface HTMLElementTagNameMap {
    "qrcode-webc": QRCodeWebC;
  }
}
