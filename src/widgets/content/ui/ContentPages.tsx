import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { contentEntries, contentGroups } from "@/shared/content/catalog";
import type { ContentGroup } from "@/shared/content/catalog";
import type { ContentPage } from "@/shared/content/types";
import { ContentSchema } from "@/shared/seo/ContentSchema";
import { SectionLabel, SiteContainer } from "@/shared/ui/site";
import { Contact } from "@/widgets/contact";

const titleStyles = {
  fontSize: { xs: 38, sm: 48, md: 64 },
  lineHeight: 1.08,
  overflowWrap: "anywhere",
};

const paragraphStyles = {
  color: "text.secondary",
  fontSize: { xs: 18, md: 20 },
  lineHeight: 1.6,
};

function ContentBreadcrumbs({ group, page }: { group: ContentGroup; page?: ContentPage }) {
  const category = contentGroups[group];

  return (
    <Breadcrumbs
      aria-label="Хлебные крошки"
      separator="/"
      sx={{
        fontSize: 15,
        mb: { xs: 4, md: 6 },
        "& .MuiBreadcrumbs-ol": {
          rowGap: 1,
        },
      }}
    >
      <Link href="/" color="inherit" underline="hover">Главная</Link>
      {page ? (
        <Link href={`/${group}`} color="inherit" underline="hover">{category.title}</Link>
      ) : (
        <Typography component="span" aria-current="page" sx={{ fontSize: "inherit" }}>{category.title}</Typography>
      )}
      {page && (
        <Typography component="span" aria-current="page" sx={{ fontSize: "inherit" }}>{page.cardTitle}</Typography>
      )}
    </Breadcrumbs>
  );
}

function PageCard({ page, href, label, heading = "h3" }: {
  page: ContentPage;
  href: string;
  label: string;
  heading?: "h2" | "h3";
}) {
  return (
    <Stack
      component="a"
      href={href}
      spacing={2}
      sx={{
        p: { xs: 3, md: 4 },
        minWidth: 0,
        height: "100%",
        color: "text.primary",
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
        textDecoration: "none",
        transition: "border-color 160ms ease",
        "&:hover": {
          borderColor: "primary.main",
        },
      }}
    >
      <SectionLabel>{label}</SectionLabel>
      <Typography component={heading} sx={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
        {page.cardTitle}
      </Typography>
      <Typography sx={{ ...paragraphStyles, fontSize: 18 }}>{page.cardDescription}</Typography>
    </Stack>
  );
}

export function CatalogPage({ group }: { group: ContentGroup }) {
  const category = contentGroups[group];

  return (
    <>
      <ContentSchema
        title={category.heading}
        description={category.description}
        path={`/${group}`}
        breadcrumbs={[{ name: "Главная", path: "/" }, { name: category.title, path: `/${group}` }]}
        collection
      />
      <SiteContainer sx={{ pt: { xs: "110px", md: "160px" }, pb: { xs: 7, md: 10 } }}>
        <ContentBreadcrumbs group={group} />
        <Stack spacing={3} sx={{ maxWidth: 1000, mb: { xs: 5, md: 7 } }}>
          <SectionLabel>{group === "services" ? "ЧТО МЫ ДЕЛАЕМ" : "КАК МЫ РАБОТАЕМ"}</SectionLabel>
          <Typography component="h1" sx={{ ...titleStyles, fontWeight: 900 }}>{category.heading}</Typography>
          <Typography sx={paragraphStyles}>{category.introduction}</Typography>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: group === "services" ? "repeat(3, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))" },
            gap: 3,
          }}
        >
          {category.pages.map((page, index) => (
            <PageCard
              key={page.slug}
              page={page}
              href={`/${group}/${page.slug}`}
              label={`${group === "process" ? "ЭТАП " : ""}${String(index + 1).padStart(2, "0")}`}
              heading="h2"
            />
          ))}
        </Box>
        <Stack spacing={2} sx={{ maxWidth: 900, mt: { xs: 5, md: 7 } }}>
          <Typography component="h2" sx={{ fontSize: 28, fontWeight: 700 }}>
            {group === "services" ? "Как выбрать направление" : "Как выстраиваем работу над проектом"}
          </Typography>
          <Typography sx={paragraphStyles}>{category.note}</Typography>
          <Link
            href={group === "services" ? "/process" : "/services"}
            color="inherit"
            underline="always"
            sx={{ alignSelf: "flex-start", fontSize: 18 }}
          >
            {group === "services" ? "Все этапы разработки приложения" : "Наши услуги и задачи, которые они решают"}
          </Link>
        </Stack>
      </SiteContainer>
      <Contact />
    </>
  );
}

export function DetailPage({ group, page }: { group: ContentGroup; page: ContentPage }) {
  const category = contentGroups[group];
  const index = category.pages.findIndex((item) => item.slug === page.slug);
  const related = contentEntries.filter((entry) => entry.group === "services"
    ? page.relatedServices.includes(entry.page.slug)
    : page.relatedStages.includes(entry.page.slug));

  return (
    <>
      <ContentSchema
        title={page.title}
        description={page.description}
        path={`/${group}/${page.slug}`}
        breadcrumbs={[
          { name: "Главная", path: "/" },
          { name: category.title, path: `/${group}` },
          { name: page.cardTitle, path: `/${group}/${page.slug}` },
        ]}
        service={group === "services"}
      />
      <Box component="article">
        <SiteContainer sx={{ pt: { xs: "110px", md: "160px" }, pb: { xs: 7, md: 10 } }}>
          <ContentBreadcrumbs group={group} page={page} />
          <Stack spacing={3} sx={{ maxWidth: 1100, mb: { xs: 5, md: 7 } }}>
            <SectionLabel>
              {group === "process" ? `ЭТАП ${String(index + 1).padStart(2, "0")} / 08` : "ЧТО МЫ ДЕЛАЕМ"}
            </SectionLabel>
            <Typography component="h1" sx={{ ...titleStyles, fontWeight: 900 }}>{page.title}</Typography>
            <Typography sx={{ ...paragraphStyles, maxWidth: 900 }}>{page.lead}</Typography>
          </Stack>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "minmax(0, 1fr) 320px" },
              gap: { xs: 5, lg: 8 },
              alignItems: "start",
            }}
          >
            <Stack spacing={5}>
              {page.sections.map((section) => (
                <Stack component="section" id={section.id} key={section.id} spacing={2}>
                  <Typography component="h2" sx={{ fontSize: { xs: 28, md: 34 }, fontWeight: 700, lineHeight: 1.2 }}>
                    {section.title}
                  </Typography>
                  {section.paragraphs?.map((paragraph) => (
                    <Typography key={paragraph} sx={paragraphStyles}>{paragraph}</Typography>
                  ))}
                  {section.items && (
                    <Box component="ul" sx={{ pl: 3, m: 0, "& li + li": { mt: 1.5 } }}>
                      {section.items.map((item) => (
                        <Typography component="li" key={item} sx={paragraphStyles}>{item}</Typography>
                      ))}
                    </Box>
                  )}
                </Stack>
              ))}
              <Stack component="section" id="questions" spacing={3}>
                <Typography component="h2" sx={{ fontSize: { xs: 28, md: 34 }, fontWeight: 700 }}>Вопросы и ответы</Typography>
                {page.questions.map((item) => (
                  <Stack key={item.question} spacing={1.5}>
                    <Typography component="h3" sx={{ fontSize: 23, fontWeight: 700, lineHeight: 1.3 }}>{item.question}</Typography>
                    <Typography sx={paragraphStyles}>{item.answer}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
            <Stack
              component="aside"
              aria-label="Результат и содержание страницы"
              spacing={3}
              sx={{
                gridRow: { xs: 1, lg: "auto" },
                gridColumn: { lg: 2 },
                position: { lg: "sticky" },
                top: { lg: 24 },
                maxHeight: { lg: "calc(100dvh - 48px)" },
                overflowY: { lg: "auto" },
                p: 3,
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
                borderTop: "3px solid",
                borderTopColor: "primary.main",
                borderRadius: 1,
              }}
            >
              <Stack spacing={2}>
                <Typography component="h2" sx={{ fontSize: 26, fontWeight: 700 }}>Что получаете</Typography>
                <Typography sx={{ ...paragraphStyles, fontSize: 17 }}>{page.outcome}</Typography>
                <Box component="ul" sx={{ pl: 2.5, m: 0, "& li + li": { mt: 1 } }}>
                  {page.deliverables.map((item) => (
                    <Typography component="li" key={item} sx={{ ...paragraphStyles, fontSize: 17 }}>{item}</Typography>
                  ))}
                </Box>
              </Stack>
              <Stack component="nav" aria-label="На этой странице" spacing={1.5}>
                <Typography sx={{ fontSize: 15, color: "text.secondary" }}>На этой странице</Typography>
                {page.sections.map((section) => (
                  <Link key={section.id} href={`#${section.id}`} color="inherit" underline="hover" sx={{ fontSize: 16 }}>{section.title}</Link>
                ))}
                <Link href="#questions" color="inherit" underline="hover" sx={{ fontSize: 16 }}>Вопросы и ответы</Link>
              </Stack>
            </Stack>
          </Box>
          <Box component="section" sx={{ mt: { xs: 7, md: 10 } }}>
            <Typography component="h2" sx={{ fontSize: { xs: 28, md: 34 }, fontWeight: 700, mb: 3 }}>Связанные услуги и этапы</Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" }, gap: 3 }}>
              {related.map((entry) => (
                <PageCard key={entry.href} page={entry.page} href={entry.href} label={contentGroups[entry.group].title} />
              ))}
            </Box>
          </Box>
        </SiteContainer>
      </Box>
      <Contact />
    </>
  );
}
