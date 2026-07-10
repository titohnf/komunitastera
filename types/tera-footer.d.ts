import "react";

// See tera-header.d.ts for why this augments "react" directly instead of
// the global JSX namespace.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "tera-footer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          site: "tera" | "bimbel" | "foundation" | "komunitas";
          "logo-text"?: string;
          "logo-img"?: string;
          description?: string;
          nav: string;
          contact?: string;
        },
        HTMLElement
      >;
    }
  }
}
