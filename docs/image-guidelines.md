# Image Guidelines

Project nay dung bo anh local trong `public/images` de tranh hotlink va giu build GitHub Pages on dinh.

## Thu muc chuan

- `public/images/profile/`
  - anh chan dung ca nhan
- `public/images/og/`
  - anh dung cho social preview, metadata, sharing
- `public/images/projects/<project-slug>/`
  - anh rieng cho tung project

## Quy uoc dat ten

- Anh chan dung:
  - `profile-portrait.jpg`
- Anh OG:
  - `og-home.jpg`
  - `og-project-<slug>.jpg` neu bo sung sau
- Anh project:
  - `cover-<subject>.jpg`
  - `detail-<subject>.jpg`

Vi du:

- `public/images/projects/ops-dashboard-revamp/cover-dashboard.jpg`
- `public/images/projects/ops-dashboard-revamp/detail-monitor-setup.jpg`
- `public/images/projects/design-system-rollout/cover-design-studio.jpg`

## Kich thuoc khuyen nghi

- Profile portrait:
  - ti le `3:4`
  - kich thuoc goc toi thieu `1200 x 1600`
- OG image:
  - ti le `1200 x 630`
  - dung cho social share
- Project cover:
  - ti le `16:10` hoac `4:3`
  - kich thuoc goc toi thieu `1600px` chieu ngang
- Project detail:
  - ti le linh hoat, uu tien `16:9`
  - kich thuoc goc toi thieu `1600px` chieu ngang

## Format

- Uu tien `jpg` cho anh chup, `webp` khi ban da toi uu san.
- Uu tien `png` chi khi can trong suot hoac can giu chi tiet giao dien sac net.
- Dung ten file bang chu thuong, co dau gach ngang, khong co khoang trang.

## Dung luong muc tieu

- Profile portrait: `200-400 KB`
- OG image: `250-500 KB`
- Project cover: `150-350 KB`
- Project detail: `150-400 KB`

Neu anh qua nang, nen nen truoc khi dua vao repo.

## Cach cap nhat

1. Export anh theo dung thu muc va ten file.
2. Cap nhat duong dan trong:
   - `src/resources/content.tsx`
   - `src/content/projects/vi/*.mdx`
   - `src/content/projects/en/*.mdx`
3. Chay:

```bash
npm run lint
npm run typecheck
npm run build:pages
```
