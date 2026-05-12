"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import {
  about,
  display,
  getContent,
  getLocaleFromPathname,
  normalizePathname,
  person,
  routes,
  switchLocalePath,
  work,
} from "@/resources";
import styles from "./Header.module.scss";
import { ThemeToggle } from "./ThemeToggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export const Header = () => {
  const pathname = usePathname() ?? "/";
  const normalizedPathname = normalizePathname(pathname);
  const locale = getLocaleFromPathname(pathname);
  const localized = getContent(locale);

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
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && (
            <Row s={{ hide: true }}>{person.locationLabel ?? person.location}</Row>
          )}
        </Row>
        <Row fillWidth horizontal="center">
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
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex s={{ hide: true }}>
              {display.time && (
                <TimeDisplay
                  timeZone={person.location}
                  locale={locale === "vi" ? "vi-VN" : "en-GB"}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
