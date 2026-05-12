"use client";

import { usePathname } from "next/navigation";

import { Button, Fade, Flex, Line, Row, SmartLink, ToggleButton } from "@once-ui-system/core";

import {
  about,
  getContent,
  getLocaleFromPathname,
  normalizePathname,
  person,
  routes,
  social,
  switchLocalePath,
  work,
} from "@/resources";
import styles from "./Header.module.scss";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const pathname = usePathname() ?? "/";
  const normalizedPathname = normalizePathname(pathname);
  const locale = getLocaleFromPathname(pathname);
  const localized = getContent(locale);
  const contactLink =
    social.find((item) => item.name === "Email")?.link || `mailto:${person.email}`;

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        s={{ hide: true }}
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Row fillWidth maxWidth={120} horizontal="between" vertical="center" paddingX="12" gap="24">
          <SmartLink className={styles.logo} href={localized.home.path}>
            an
          </SmartLink>
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton
                  label={localized.home.label}
                  href={localized.home.path}
                  selected={normalizedPathname === localized.home.path}
                />
              )}
              {routes[about.path as keyof typeof routes] && (
                <ToggleButton
                  href={localized.about.path}
                  label={localized.about.label}
                  selected={normalizedPathname === localized.about.path}
                />
              )}
              {routes[work.path as keyof typeof routes] && (
                <ToggleButton
                  href={localized.work.path}
                  label={localized.work.label}
                  selected={
                    normalizedPathname === localized.work.path ||
                    normalizedPathname.startsWith(`${localized.work.path}/`)
                  }
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <ToggleButton
                href={switchLocalePath(pathname, "vi")}
                label="VI"
                selected={locale === "vi"}
              />
              <ToggleButton
                href={switchLocalePath(pathname, "en")}
                label="EN"
                selected={locale === "en"}
              />
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <ThemeToggle />
            </Row>
          </Row>
          <Row gap="12" vertical="center" horizontal="end">
            <Button
              href={contactLink}
              variant="secondary"
              size="s"
              weight="default"
              label={locale === "vi" ? "Lien he" : "Contact"}
            />
          </Row>
        </Row>
      </Row>
      <Row
        hide
        s={{
          hide: false,
          position: "fixed",
        }}
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Row hide s={{ hide: false }} fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href={localized.home.path}
                  selected={normalizedPathname === localized.home.path}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes[about.path as keyof typeof routes] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href={localized.about.path}
                      label={localized.about.label}
                      selected={normalizedPathname === localized.about.path}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href={localized.about.path}
                      selected={normalizedPathname === localized.about.path}
                    />
                  </Row>
                </>
              )}
              {routes[work.path as keyof typeof routes] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href={localized.work.path}
                      label={localized.work.label}
                      selected={
                        normalizedPathname === localized.work.path ||
                        normalizedPathname.startsWith(`${localized.work.path}/`)
                      }
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href={localized.work.path}
                      selected={
                        normalizedPathname === localized.work.path ||
                        normalizedPathname.startsWith(`${localized.work.path}/`)
                      }
                    />
                  </Row>
                </>
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <ToggleButton
                href={switchLocalePath(pathname, "vi")}
                label="VI"
                selected={locale === "vi"}
              />
              <ToggleButton
                href={switchLocalePath(pathname, "en")}
                label="EN"
                selected={locale === "en"}
              />
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <ThemeToggle />
            </Row>
          </Row>
        </Row>
      </Row>
    </>
  );
};
