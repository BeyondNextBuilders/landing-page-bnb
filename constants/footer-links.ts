

1/1

Next.js 16.1.6
Turbopack
Build Error



Export socials doesn't exist in target module
./components/footer.tsx (3:1)

Export socials doesn't exist in target module
  1 | import Link from "next/link"
  2 | import Image from "next/image"
> 3 | import { socials } from "@/constants/socials"
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  4 |
  5 | const footerLinks = {
  6 |   Services: [

The export socials was not found in module [project]/constants/socials.tsx [app-rsc] (ecmascript).
The module has no exports at all.
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/footer.tsx
    ./app/page.tsx