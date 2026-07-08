import "react";

// React 19 moved JSX.IntrinsicElements under the "react" module's own
// namespace, so augmenting the old global `JSX` namespace no longer merges —
// this has to declare into "react" directly.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "tera-header": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "logo-text"?: string;
          "logo-img"?: string;
          "logo-href"?: string;
          nav: string;
          "cta-text"?: string;
          "cta-href"?: string;
        },
        HTMLElement
      >;
    }
  }
}
