import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social, work } from "@/app/resources/content";
import React from "react";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    /* {
     *   title: about.studies.title,
     *   display: about.studies.display,
     *   items: about.studies.institutions.map((institution) => institution.name),
     * }, */
    /* {
     *   title: about.technical.title,
     *   display: about.technical.display,
     *   items: about.technical.skills.map((skill) => skill.title),
     * }, */
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`${baseURL}/og?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon
                  paddingLeft="12"
                  name="calendar"
                  onBackground="brand-weak"
                />
                <Flex paddingX="8">Agende conosco</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Button
                          className="s-flex-hide"
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          variant="secondary"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {about.intro.description}
            </Column>
          )}

          <Column maxWidth="m" paddingY="l" gap="l">
            {/* Page title */}
            <Heading as="h1" variant="display-strong-s" marginBottom="m">
              Artistas
            </Heading>

            {/* Artist experiences */}
            <Column fillWidth gap="l">
              {about.work.experiences.map((exp, idx) => (
                <Column key={idx} fillWidth gap="4">
                  {/* Company name + Instagram beside it + timeframe */}
                  <Flex
                    fillWidth
                    horizontal="space-between"
                    vertical="center"
                    marginBottom="4"
                  >
                    <Flex vertical="center" gap="8">
                      <Text variant="heading-strong-l">{exp.company}</Text>
                      {exp.instagram && (
                        <a
                          href={`https://instagram.com/${exp.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            textDecoration: "none",
                          }}
                        >
                          <Icon name="instagram" size="s" />
                          <Text variant="body-default-s">@{exp.instagram}</Text>
                        </a>
                      )}
                    </Flex>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {exp.timeframe}
                    </Text>
                  </Flex>

                  {/* Role */}
                  <Text
                    variant="body-default-s"
                    onBackground="brand-weak"
                    marginBottom="m"
                  >
                    {exp.role}
                  </Text>

                  {/* Achievements list with profile pic beside */}
                  <Flex fillWidth gap="l" vertical="start">
                    <SmartImage
                      src={exp.image ?? person.avatar}
                      alt={exp.company}
                      radius="full"
                      enlarge
                      sizes="200px"
                      style={{
                        width: 200,
                        height: 200,
                        flexShrink: 0,
                      }}
                    />{" "}
                    <Column as="ul" gap="16" flex={1}>
                      {exp.achievements.map((ach, i2) => (
                        <Text as="li" variant="body-default-m" key={i2}>
                          {ach}
                        </Text>
                      ))}
                    </Column>
                  </Flex>
                </Column>
              ))}
            </Column>
          </Column>
        </Column>
      </Flex>
    </Column>
  );
}
