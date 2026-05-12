import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";
const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "https://kiera1512.github.io/portfolio";
const siteBasePath = (() => {
  try {
    const pathname = new URL(siteURL).pathname.replace(/\/$/, "");
    return pathname === "/" ? "" : pathname;
  } catch {
    return "";
  }
})();

const person: Person = {
  firstName: "An",
  lastName: "Nguyen",
  name: "An Nguyen",
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "hello@example.com",
  location: "Asia/Ho_Chi_Minh",
  locationLabel: "Ho Chi Minh City, Vietnam",
  languages: ["Tieng Viet", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <>Newsletter is disabled in this starter.</>,
};

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/your-handle", essential: true },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/your-handle/",
    essential: true,
  },
  { name: "Email", icon: "email", link: `mailto:${person.email}`, essential: true },
];

export function getLocalizedPath(locale: Locale, path: string) {
  const normalizedPath = path === "/" ? "" : path;
  if (locale === defaultLocale) {
    return normalizedPath || "/";
  }

  return `/en${normalizedPath}`;
}

export function normalizePathname(pathname: string) {
  const sanitizedPathname = pathname.replace(/\/$/, "") || "/";

  if (siteBasePath && sanitizedPathname.startsWith(siteBasePath)) {
    const strippedPathname = sanitizedPathname.slice(siteBasePath.length);
    return strippedPathname || "/";
  }

  return sanitizedPathname;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const normalizedPathname = normalizePathname(pathname);
  return normalizedPathname === "/en" || normalizedPathname.startsWith("/en/")
    ? "en"
    : defaultLocale;
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  const normalizedPathname = normalizePathname(pathname);
  const localizedPath = normalizedPathname.startsWith("/en")
    ? normalizedPathname.replace(/^\/en/, "") || "/"
    : normalizedPathname;
  return getLocalizedPath(targetLocale, localizedPath);
}

type LocalizedContent = {
  home: Home;
  about: About;
  work: Work;
};

function createContent(locale: Locale): LocalizedContent {
  const isVietnamese = locale === "vi";
  const projectsPath = "/projects";

  return {
    home: {
      path: getLocalizedPath(locale, "/"),
      image: "/images/og/home.jpg",
      label: isVietnamese ? "Trang chu" : "Home",
      title: isVietnamese ? `Portfolio cua ${person.name}` : `${person.name} Portfolio`,
      description: isVietnamese
        ? `Portfolio gioi thieu du an, kinh nghiem va cach ${person.name} xay dung san pham web.`
        : `Portfolio showcasing ${person.name}'s projects, experience, and product thinking.`,
      headline: isVietnamese ? (
        <>Thiet ke trai nghiem ro rang, roi bien no thanh san pham chay tot</>
      ) : (
        <>Design clear experiences, then turn them into reliable products</>
      ),
      featured: {
        display: true,
        title: (
          <Row gap="12" vertical="center">
            <strong>Featured</strong>
            <Line background="brand-alpha-strong" vert height="20" />
            <Text onBackground="brand-medium">
              {isVietnamese ? "Case study noi bat" : "Featured case study"}
            </Text>
          </Row>
        ),
        href: getLocalizedPath(locale, `${projectsPath}/ops-dashboard-revamp`),
      },
      subline: isVietnamese ? (
        <>
          Toi tap trung vao{" "}
          <Text as="span" size="xl" weight="strong">
            Next.js
          </Text>
          , thiet ke he thong giao dien, va cac luong noi dung giup team ship nhanh hon ma van giu
          chat luong.
        </>
      ) : (
        <>
          I focus on{" "}
          <Text as="span" size="xl" weight="strong">
            Next.js
          </Text>
          , design systems, and content workflows that help teams ship faster without losing
          quality.
        </>
      ),
    },
    about: {
      path: getLocalizedPath(locale, "/about"),
      label: isVietnamese ? "Gioi thieu" : "About",
      title: isVietnamese ? `Gioi thieu - ${person.name}` : `About - ${person.name}`,
      description: isVietnamese
        ? `Tim hieu ve ${person.name}, ${person.role} tai ${person.locationLabel}.`
        : `Learn more about ${person.name}, a ${person.role} based in ${person.locationLabel}.`,
      tableOfContent: {
        display: true,
        subItems: false,
      },
      avatar: {
        display: true,
      },
      calendar: {
        display: false,
        link: "https://cal.com",
      },
      intro: {
        display: true,
        title: isVietnamese ? "Tong quan" : "Overview",
        description: isVietnamese ? (
          <>
            Toi xay dung website va san pham noi bo voi uu tien cao cho toc do, kha nang bao tri va
            trai nghiem nguoi dung ro rang. Toi lam tot o phan giao giua UI, noi dung va logic trien
            khai.
          </>
        ) : (
          <>
            I build websites and internal products with a strong focus on speed, maintainability,
            and clear user experience. My best work sits at the intersection of UI, content, and
            implementation detail.
          </>
        ),
      },
      work: {
        display: true,
        title: isVietnamese ? "Kinh nghiem" : "Experience",
        experiences: [
          {
            company: "Studio Product Team",
            timeframe: isVietnamese ? "2023 - nay" : "2023 - Present",
            role: "Frontend Developer",
            achievements: isVietnamese
              ? [
                  "Xay dung lai dashboard noi bo tren Next.js, giam dang ke thoi gian thao tac cua team van hanh.",
                  "Chuan hoa component va layout de cac tinh nang moi trien khai nhat quan hon.",
                ]
              : [
                  "Rebuilt an internal dashboard in Next.js and cut down daily friction for the operations team.",
                  "Standardized components and layout patterns so new features shipped more consistently.",
                ],
            images: [
              {
                src: "/images/projects/project-01/cover-01.jpg",
                alt: "Dashboard preview",
                width: 16,
                height: 9,
              },
            ],
          },
          {
            company: "Freelance",
            timeframe: "2021 - 2023",
            role: "Web Developer",
            achievements: isVietnamese
              ? [
                  "Thiet ke va phat trien landing page, website dich vu va portfolio cho khach hang nho.",
                  "Thiet lap quy trinh ban giao noi dung va tai nguyen de khach hang tu cap nhat de hon.",
                ]
              : [
                  "Designed and developed landing pages, service websites, and portfolios for small clients.",
                  "Set up content and asset handoff workflows so clients could update sites more easily.",
                ],
            images: [],
          },
        ],
      },
      studies: {
        display: true,
        title: isVietnamese ? "Hoc tap" : "Education",
        institutions: [
          {
            name: isVietnamese ? "Cong nghe phan mem" : "Software Engineering",
            description: isVietnamese ? (
              <>Nen tang ve kien truc web, phat trien frontend va lam viec theo san pham.</>
            ) : (
              <>
                Foundation in web architecture, frontend development, and product-focused delivery.
              </>
            ),
          },
        ],
      },
      technical: {
        display: true,
        title: isVietnamese ? "Ky nang ky thuat" : "Technical skills",
        skills: [
          {
            title: "Next.js",
            description: isVietnamese ? (
              <>
                Xay dung App Router, metadata, MDX content flow va trien khai production tren
                Vercel.
              </>
            ) : (
              <>
                Building with App Router, metadata, MDX content flows, and production deployment on
                Vercel.
              </>
            ),
            tags: [
              { name: "Next.js", icon: "nextjs" },
              { name: "TypeScript", icon: "typescript" },
              { name: "Vercel", icon: "vercel" },
            ],
            images: [
              {
                src: "/images/projects/project-01/cover-04.jpg",
                alt: "Next.js project",
                width: 16,
                height: 9,
              },
            ],
          },
          {
            title: isVietnamese ? "Design system" : "Design systems",
            description: isVietnamese ? (
              <>Thiet ke token, component reusable va document pattern de giu UI nhat quan.</>
            ) : (
              <>
                Designing tokens, reusable components, and documented patterns to keep UI
                consistent.
              </>
            ),
            tags: [
              { name: "Figma", icon: "figma" },
              { name: "SCSS", icon: "sass" },
            ],
            images: [
              {
                src: "/images/projects/project-01/cover-02.jpg",
                alt: "Design system work",
                width: 16,
                height: 9,
              },
            ],
          },
        ],
      },
    },
    work: {
      path: getLocalizedPath(locale, projectsPath),
      label: isVietnamese ? "Du an" : "Projects",
      title: isVietnamese ? `Du an - ${person.name}` : `Projects - ${person.name}`,
      description: isVietnamese
        ? `Mot so du an tieu bieu ve frontend, design system va toi uu luong noi dung cua ${person.name}.`
        : `Selected frontend, design system, and content workflow projects by ${person.name}.`,
    },
  };
}

const localizedContent = {
  vi: createContent("vi"),
  en: createContent("en"),
} satisfies Record<Locale, LocalizedContent>;

const home = localizedContent.vi.home;
const about = localizedContent.vi.about;
const work = localizedContent.vi.work;

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: "Blog is disabled in this starter.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery",
  description: "Gallery is disabled in this starter.",
  images: [],
};

export function getContent(locale: Locale) {
  return localizedContent[locale];
}

export { about, blog, gallery, home, newsletter, person, social, work };
