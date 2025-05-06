import React from "react";
import { Metadata } from "next";
import { Column, Flex, Heading, Text, Icon } from "@/once-ui/components";
import { SmartImage } from "@/once-ui/components";
import { Meta, Schema } from "@/once-ui/modules";
import { baseURL } from "@/app/resources";
import { work, about, person } from "@/app/resources/content";

export async function generateMetadata(): Promise<Metadata> {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingY="l" gap="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page title */}
      <Heading as="h1" variant="display-strong-s" marginBottom="m">
        {work.title}
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
              <Text variant="heading-default-xs" onBackground="neutral-weak">
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
  );
}

/* import { Column } from "@/once-ui/components";
 * import { baseURL } from "@/app/resources";
 * import { about, person, work } from "@/app/resources/content";
 * import { Meta, Schema } from "@/once-ui/modules";
 * import { Projects } from "@/components/work/Projects";
 *
 * export async function generateMetadata() {
 *   return Meta.generate({
 *     title: work.title,
 *     description: work.description,
 *     baseURL: baseURL,
 *     image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
 *     path: work.path,
 *   });
 * }
 *
 * export default function Work() {
 *   return (
 *     <Column maxWidth="m">
 *       <Schema
 *         as="webPage"
 *         baseURL={baseURL}
 *         path={work.path}
 *         title={work.title}
 *         description={work.description}
 *         image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
 *         author={{
 *           name: person.name,
 *           url: `${baseURL}${about.path}`,
 *           image: `${baseURL}${person.avatar}`,
 *         }}
 *       />
 *       <Projects />
 *     </Column>
 *   );
 * } */
