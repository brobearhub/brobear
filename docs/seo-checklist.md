## SEO checklist (после деплоя)

### 1) Базовые урлы
- Откройте `https://<домен>/robots.txt` — должен возвращаться 200 и содержать ссылку на sitemap.
- Откройте `https://<домен>/sitemap.xml` — должен возвращаться 200 и содержать урлы страниц.

### 2) Проверка мета-тегов
- На главной странице проверьте наличие:
  - `<title>` и `meta name="description"`
  - `link rel="canonical"`
  - OpenGraph (`meta property="og:*"`) и Twitter card
  - `script[type="application/ld+json"]` (schema.org)

### 3) Верификация поисковых систем

#### Google Search Console (meta-тег)
- Добавьте переменную окружения `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` со значением из Search Console.
- Задеплойте, затем нажмите Verify в Search Console.

#### Яндекс.Вебмастер (meta-тег)
- Добавьте `NEXT_PUBLIC_YANDEX_VERIFICATION` со значением из Вебмастера.
- Задеплойте, затем подтвердите права в Вебмастере.

### 4) Индексация
- В Search Console:
  - Отправьте sitemap.
  - Воспользуйтесь URL Inspection → Request indexing для главной.

### 5) Производительность
- Запустите Lighthouse/PSI на мобилке для главной.
- Если LCP высокий — проверьте вес фонового изображения Hero и шрифты.

