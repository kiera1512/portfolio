# Portfolio

Portfolio song ngữ `vi/en` xây trên `Next.js 16` và `Once UI`, tối giản còn 3 phần chính:

- `Home`
- `About`
- `Projects`

Ngôn ngữ mặc định là tiếng Việt ở route gốc:

- `/`
- `/about`
- `/projects`

Tiếng Anh nằm dưới prefix `/en`:

- `/en`
- `/en/about`
- `/en/projects`

## Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `MDX` cho nội dung project
- `Once UI`

## Chạy local

1. Cài dependency

```bash
npm install
```

2. Chạy dev server

```bash
npm run dev
```

3. Kiểm tra trước khi push

```bash
npm run typecheck
npm run lint
npm run build
```

## Cập nhật nội dung

- Thông tin cá nhân và nội dung song ngữ:
  [src/resources/content.tsx](./src/resources/content.tsx)
- Cấu hình site, `baseURL`, routes, theme:
  [src/resources/once-ui.config.ts](./src/resources/once-ui.config.ts)
- Dự án MDX:
  [src/content/projects/vi](./src/content/projects/vi)
  [src/content/projects/en](./src/content/projects/en)
- Ảnh public:
  [public/images](./public/images)

## Deploy lên GitHub Pages

Repo này đã được cấu hình để build static export cho GitHub Pages bằng GitHub Actions.

### 1. Kiểm tra repository settings

Trên GitHub repo [kiera1512/portfolio](https://github.com/kiera1512/portfolio):

1. Vào `Settings`
2. Mở `Pages`
3. Ở `Source`, chọn `GitHub Actions`

### 2. Push code lên branch `main`

Mỗi lần bạn push lên `main`, workflow này sẽ tự chạy:

- [.github/workflows/deploy-pages.yml](./.github/workflows/deploy-pages.yml)

Workflow sẽ:

- cài dependency bằng `npm ci`
- build static export với `GITHUB_PAGES=true`
- upload thư mục `out`
- deploy lên GitHub Pages

### 3. URL deploy

Site sẽ được publish tại:

- [https://kiera1512.github.io/portfolio](https://kiera1512.github.io/portfolio)

### 4. Nếu bạn đổi tên repo

Nếu repo không còn là `portfolio`, cần cập nhật 3 chỗ:

1. `GITHUB_PAGES_REPO` trong
   [deploy-pages.yml](./.github/workflows/deploy-pages.yml)
2. `NEXT_PUBLIC_SITE_URL` trong
   [deploy-pages.yml](./.github/workflows/deploy-pages.yml)
3. `baseURL` fallback trong
   [src/resources/once-ui.config.ts](./src/resources/once-ui.config.ts)

## Ghi chú kỹ thuật cho GitHub Pages

- GitHub Pages chỉ host static files, nên project này đã bỏ phụ thuộc runtime vào `app/api/*`.
- `next.config.mjs` tự chuyển sang `output: "export"` khi có env `GITHUB_PAGES=true`.
- `basePath` và `assetPrefix` được set theo tên repo để site chạy đúng dưới `/portfolio`.

## Việc nên làm tiếp trước khi public

- thay `hello@example.com`
- thay social links placeholder
- thay avatar và project thumbnails
- rà lại `baseURL` nếu đổi domain hoặc đổi tên repo

## License

Kế thừa license từ template gốc Once UI/Magic Portfolio. Xem file:

- [LICENSE](./LICENSE)
