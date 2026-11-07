# Portfolio — Muhammad Faiq Hudzaifah

Portfolio sekaligus CV. Dibangun dengan **Astro 7**, **Tailwind CSS 4**, dan **Bun**.

## Menjalankan

```sh
bun install
bun dev            # http://localhost:4321
bun run build      # output ke ./dist
bun preview        # cek hasil build
bun run check      # type check (astro check)
```

## Cara update konten (tanpa menyentuh komponen)

| Mau ubah | Edit di |
| :-- | :-- |
| Nama, kontak, pendidikan, GPA | `src/data/profile.ts` |
| Pengalaman / project baru | tambah file `.md` di `src/content/experience/` |
| Sertifikat tunggal | tambah file `.md` di `src/content/certifications/` |
| Kursus baru di program yang sama | tambah item `courses` di `src/content/certifications/komdigi.md` |
| File PDF sertifikat | taruh di `public/certificates/`, lalu isi `url` / `link` |
| Skill & interest | `src/content/skills/data.json` |
| Artikel blog | `src/content/blog/*.md` |

Angka di bagian statistik (jam pelatihan, jumlah sertifikat, jumlah project) dihitung otomatis dari konten.

## Simpan sebagai CV (PDF)

Tombol **Simpan sebagai PDF** di halaman utama membuka dialog cetak browser. Gaya cetaknya sudah diatur di `src/styles/global.css` (`@media print`).
