# Portfolio

Portfolio song ngu `vi/en` xay tren `Next.js 16` va `Once UI`, toi gian con 3 phan chinh:

- `Home`
- `About`
- `Projects`

Ngon ngu mac dinh la tieng Viet o route goc:

- `/`
- `/about`
- `/projects`

Tieng Anh nam duoi prefix `/en`:

- `/en`
- `/en/about`
- `/en/projects`

## Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `MDX` cho noi dung project
- `Once UI`

## Chay local

1. Cai dependency

```bash
npm install
```

2. Chay dev server

```bash
npm run dev
```

3. Kiem tra truoc khi push

```bash
npm run typecheck
npm run lint
npm run build
```

## Cap nhat noi dung

- Thong tin ca nhan va noi dung song ngu:
  [src/resources/content.tsx](./src/resources/content.tsx)
- Cau hinh site, `baseURL`, routes, theme:
  [src/resources/once-ui.config.ts](./src/resources/once-ui.config.ts)
- Du an MDX:
  [src/content/projects/vi](./src/content/projects/vi)
  [src/content/projects/en](./src/content/projects/en)
- Anh public:
  [public/images](./public/images)

## Deploy len GitHub Pages bang branch

Repo nay da chuyen sang cach deploy khong dung GitHub Actions. Site se duoc publish tu branch `gh-pages`.

### 1. Build static export

Tren may local Windows:

```bash
npm run build:pages
```

Lenh nay build site voi:

- `GITHUB_PAGES=true`
- `GITHUB_REPOSITORY=kiera1512/portfolio`

Sau khi build xong, file static nam trong thu muc `out/`.

### 2. Push noi dung `out/` len branch `gh-pages`

Co the dung quy trinh:

1. xoa workflow GitHub Actions cu
2. build static tu `main`
3. copy noi dung `out/` sang branch `gh-pages`
4. push branch `gh-pages` len GitHub

Neu ban dang lam thu cong, branch `gh-pages` chi nen chua file static da build, khong chua source code Next.js.

### 3. Cau hinh GitHub Pages

Trong repo [kiera1512/portfolio](https://github.com/kiera1512/portfolio):

1. vao `Settings`
2. mo `Pages`
3. o `Source`, chon `Deploy from a branch`
4. chon branch `gh-pages`
5. chon folder `/ (root)`

### 4. URL deploy

Site se duoc publish tai:

- [https://kiera1512.github.io/portfolio](https://kiera1512.github.io/portfolio)

## Ghi chu ky thuat cho GitHub Pages

- GitHub Pages chi host static files, nen project nay da bo phu thuoc runtime vao `app/api/*`.
- `next.config.mjs` tu chuyen sang `output: "export"` khi co env `GITHUB_PAGES=true`.
- `basePath` va `assetPrefix` duoc set theo ten repo de site chay dung duoi `/portfolio`.

## Viec nen lam tiep truoc khi public

- thay `hello@example.com`
- thay social links placeholder
- thay avatar va project thumbnails
- ra lai `baseURL` neu doi domain hoac doi ten repo

## License

Ke thua license tu template goc Once UI/Magic Portfolio. Xem file:

- [LICENSE](./LICENSE)
