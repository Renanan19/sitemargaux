# Photos

Every image here is WebP, 1600 px on the long side at most. `manifest.json` holds each one's pixel size so pages reserve the space before it loads. The build wires images by file name:

- `hero` : home page arch
- `project-1` to `project-6` : home page gallery (cropped 4:5)
- `margaux` : portrait on the About page
- `main-N`, `second-N`, `rental-N`, `furniture-N`, `render-N`, `drawing-N` : Projects page, in the order and groups of Margaux's portfolio

The selection follows `Margaux Stouls-Portfolio-English.pdf`. To add or replace an image, export it to WebP, add its size to `manifest.json`, add its description in `src/pages-work.mjs`, then run `node build.mjs` and `node check.mjs`.
