# Engix photographic home page
Merge client into your existing client directory. Replace src/pages/Home.jsx and src/styles/engix-home.css and copy ALL files in public/images/home. Keep your router, navbar, footer and usePageTitle hook.
Run npm run dev and npm run build in the existing client project.
The page is self-contained and does not import the old home section components. No lucide-react dependency is needed by this page.
Nine real stock photographs are bundled locally. Photos are illustrative and do not depict verified Engix employees or client projects. The real Engix logo is an HTML overlay on the hero; it is not baked into the stock image.
The existing five user-selected Unsplash images are retained, plus four previously sourced Unsplash workplace photos. Source image identifiers are documented directly in the photos object in Home.jsx. Images fall back from local file to Unsplash CDN to a branded placeholder if both fail.
Responsive CSS covers desktop, tablet and mobile. Full app integration/build and real browser layout checks remain necessary before deployment. There is no formal LLM-approved certification.
