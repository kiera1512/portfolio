import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  AvatarGroup,
  Column,
  Heading,
  Line,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";

import { CustomMDX, ScrollToHash } from "@/components";
import { Projects } from "@/components/work/Projects";
import { type Locale, baseURL, getContent, getLocalizedPath, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getProjectBySlug, getProjectPosts } from "@/utils/utils";

export async function getProjectMetadata(locale: Locale, slug: string): Promise<Metadata> {
  const { home, work } = getContent(locale);
  const post = getProjectBySlug(locale, slug);

  if (!post) {
    return {};
  }

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    image: post.metadata.image || home.image,
    path: getLocalizedPath(locale, `${work.path.replace(/^\/en/, "")}/${post.slug}`),
  });
}

export function getProjectStaticParams(locale: Locale) {
  const posts = getProjectPosts(locale);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function ProjectDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const { about, home, work } = getContent(locale);
  const post = getProjectBySlug(locale, slug);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((member) => ({
      src: member.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={getLocalizedPath(locale, `/projects/${post.slug}`)}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={post.metadata.image || home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href={work.path}>
          <Text variant="label-strong-m">{work.label}</Text>
        </SmartLink>
        <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
          {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
        </Text>
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
      </Column>
      <Row marginBottom="32" horizontal="center">
        <Row gap="16" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="s" />}
          <Text variant="label-default-m" onBackground="brand-weak">
            {post.metadata.team?.map((member, idx) => (
              <span key={member.name}>
                {idx > 0 && (
                  <Text as="span" onBackground="neutral-weak">
                    ,{" "}
                  </Text>
                )}
                <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
              </span>
            ))}
          </Text>
        </Row>
      </Row>
      {post.metadata.images.length > 0 && (
        <Media priority aspectRatio="16 / 9" radius="m" alt="image" src={post.metadata.images[0]} />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          {locale === "vi" ? "Dự án liên quan" : "Related projects"}
        </Heading>
        <Projects locale={locale} exclude={[post.slug]} range={[1, 2]} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
