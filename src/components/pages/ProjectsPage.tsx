import { Column, Heading, Meta, Schema } from "@once-ui-system/core";

import { Projects } from "@/components/work/Projects";
import { type Locale, baseURL, getContent, person } from "@/resources";

export function getProjectsMetadata(locale: Locale) {
  const { about, home, work } = getContent(locale);

  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    image: home.image,
    path: work.path,
  });
}

export function ProjectsPage({ locale }: { locale: Locale }) {
  const { about, home, work } = getContent(locale);

  return (
    <Column fillWidth paddingTop="24" style={{ maxWidth: "1400px" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Projects locale={locale} />
    </Column>
  );
}
