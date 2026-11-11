# SyncFlow

Landing page độc lập dùng React, TypeScript, Vite và các component shadcn/ui. Giao diện dựa trên hai frame SyncFlow trong Figma. [Desktop](https://www.figma.com/design/9IklZ21HmUDD1eikzg3MNk/SyncFlow?node-id=1-2) · [Mobile](https://www.figma.com/design/9IklZ21HmUDD1eikzg3MNk/SyncFlow?node-id=61-62)

## Chạy tại máy

Mở terminal trong thư mục SyncFlow. Dùng phiên bản Node phù hợp với trường `engines` của Vite trong lockfile.

```powershell
npm ci
npm run dev
```

```powershell
npm run lint
npm run build
npm run preview
```

`npm run build` tạo bản tĩnh trong `dist/`. Khi bàn giao source, giữ thư mục này cùng `package-lock.json`, mã nguồn và asset. Người nhận có thể tạo lại `dist/` bằng lệnh build.

## Cấu trúc

- `src/components/sections/` chứa nội dung và cấu trúc các section.
- `src/components/ui/` chứa Button, Accordion, Dialog và Input.
- `src/index.css` chứa biến màu, font, bố cục và breakpoint.
- `src/content.ts` chứa dữ liệu cho navigation, pricing và FAQ.
- `src/assets/` chứa asset xuất từ Figma. [Hướng dẫn Figma và responsive](./FIGMA-GUIDE.md)

CTA và pricing dùng form demo lưu email trong trình duyệt hiện tại. Các mục Resources, Legal và biểu tượng social giữ nội dung từ Figma và chờ URL đích khi đưa lên bản chính thức.
