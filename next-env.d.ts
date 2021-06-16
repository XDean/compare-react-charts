/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="@mdx-js/loader" />

declare module '*.mdx' {
  let MDXComponent: () => JSX.Element
  export default MDXComponent
  export const meta: any
}
